import pickle
from eth_rpc_api import EthJsonRpc
import requests
import os
import time

session = requests.Session()


def getTraceTransactionRPC(tx):
    global session
    method = 'debug_traceTransaction'
    params = [tx, {"disableStack": False, "disableMemory": False, "disableStorage": False}]
    payload = {"jsonrpc": "2.0",
               "method": method,
               "params": params,
               "id": 1}
    headers = {'Content-type': 'application/json'}
    data = None
    try:
        response = session.post('http://localhost:8500', json=payload, headers=headers)
    except Exception as e:
        return None
    data = response.json()
    return data


def get_execution_record(count=0, attack_flag=-10, petflag=False):
    rpc = EthJsonRpc('127.0.0.1', 8500)
    max_block = rpc.eth_blockNumber()

    contract_to_last_tx_hash = {}
    all_trace = []
    attack = None
    migreate = None
    pertect = set()
    for current_block_num in range(0, max_block + 1):
        block = rpc.eth_getBlockByNumber(current_block_num, True)
        transactions = block["transactions"]
        for i in range(0, len(transactions)):
            transaction = transactions[i]
            if transaction == None:
                continue
            if transaction["to"] == None:
                continue
            if transaction["to"] not in contract_to_last_tx_hash:
                contract_to_last_tx_hash[transaction["to"]] = []
            transaction_hash = transaction["hash"]
            contract_to_last_tx_hash[transaction["to"]].append(transaction_hash)
            all_trace.append((transaction["to"], transaction_hash))

    for id, obj in enumerate(contract_to_last_tx_hash.items()):
        if id == 0:
            migreate = obj[0]
        if id == 1:
            pertect.add(obj[0])
        if len(obj[1]) == 1:
            attack = obj[0]
        # if len(value) == 1:
        #     attack = key
        #     break
        pass

    order_trace = []
    line_count = 0
    for tx_to, one_tx in all_trace:
        line_count += 1
        flag = 0
        if tx_to == migreate:
            continue
        # if tx_to == attack:
        #     flag = 1
        if line_count == len(all_trace):
            flag = 1
        trace_info = getTraceTransactionRPC(one_tx)
        complete_trace = trace_info["result"]["structLogs"]
        retrun_value = trace_info["result"]["returnValue"]
        trace_gas = trace_info["result"]["gas"]
        if retrun_value is not "":
            aaa = 0
        before_step = None
        all_ins = []
        for id, step in enumerate(complete_trace):
            info = {}
            if before_step and before_step["depth"] < step["depth"]:
                all_ins[id - 1]["stack"] = before_step["stack"][-2]
                pertect.add("0x" + before_step["stack"][-2][-40:])
            info["depth"] = step["depth"]
            info["pc"] = step["pc"]
            before_step = step
            all_ins.append(info)
        all_ins = (flag, tx_to, all_ins, trace_gas)
        order_trace.append(all_ins)

    output_data = (pertect, order_trace)
    f = open("./testTrace/%d" % count, "wb")
    pickle.dump(output_data, f)
    f.close()


gannache_cmd = "ganache-cli -i 10 -e 10000 -a 500 -p 8500 > ganachi-out &"


def read_pic(file_path):
    f = open(file_path, "rb+")
    g = pickle.load(f)
    f.close()
    return g


def find_contract(path):
    f = open(path, "r+")
    data = f.readlines()
    f.close()
    start = True
    all_contract = []
    for line in data:
        if line.find("snapshot") is not -1:
            start = False
        if start:
            continue
        if line.find("Contract created") is not -1:
            index = line.find(":")
            line = line[index + 1:].strip()
            line = line.replace("\n", "")
            all_contract.append(line)
    return all_contract, data


def find_attack(path):
    f = open(path, "r+")
    data = f.readlines()
    f.close()
    count = 0
    for line in data:
        if line.find("new") is not -1 or line.find("let") is not -1 or line.find("EVMTime") is not -1:
            continue
        if line.find("await") is not -1:
            count += 1
            continue
        if line.find("attack") is not -1:
            count += 1
            break
    return count


if __name__ == '__main__':
    root_path = "/home/xcrab/MyWorkspace/testExperiments/exp2/voting-dapp"
    dirs = os.listdir(root_path)
    for version in dirs:
        ver_path = root_path + "/" + version
        if os.path.isfile(ver_path):
            continue
        os.chdir(ver_path)
        tran_path = "./test"
        t_files = os.listdir(tran_path)
        os.system("pkill -9 node")
        for id, t_file in enumerate(t_files):
            if t_file.find("try") is not -1 or t_file.find("util") is not -1:
                continue
            print(version)
            petflag = False
            print("gannache")
            os.system(gannache_cmd)
            time.sleep(5)
            print("truffle")
            # attack_index = find_attack(tran_path + "/" + t_file)
            # if attack_index == 0:
            attack_index = -10
            truffle_cmd = "truffle test %s --network test > out" % (tran_path + "/" + t_file)
            print(truffle_cmd)
            os.system(truffle_cmd)
            all_contract, data = find_contract("./ganachi-out")

            cpcmd = "cp ./ganachi-out ./testTrace/%d_ganachi%s" % (id, t_file[:-3])
            os.system(cpcmd)

            f = open("./testTrace/%d_contracts" % id, "w+")
            for contract in all_contract:
                f.write(contract + "\n")
            f.close()
            if len(all_contract) > 4:
                print("检查版本%s用例%s编号%d" % (version, t_file, id))
            get_execution_record(id, attack_index + 2, petflag)
            os.system("pkill -9 node")
