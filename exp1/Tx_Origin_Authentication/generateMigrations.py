import os

def solve_dir():
    path = "./build/contracts"
    if not os.path.exists(path):
        print("没有当前路径，开始编译")
        ins = ("truffle complie")
        os.system(ins)

    list = []
    dirs = os.listdir(path)
    for item in dirs:
        try:
            item = item[:len(item)-5]
            if item == "Migrations":
                continue
            list.append(item)
            pass
        except:
            print(item + "出现问题")

    m_path = "./migrations/"
    f = open(os.path.join(os.path.abspath(m_path),"2_deploy_contracts.js"),"w+")
    try:
        for l in list:
            f.write("const %s = artifacts.require(\"%s\");\n" % (l,l))
        f.write("module.exports = function(deployer,network,accounts) {\n")
        f.write("deployer.deploy(xxxx,accounts[0]);\n")
        f.write("};\n")
    except:
        print("构造部署文件出现问题")
        pass

    print(list)
    pass

if __name__ == "__main__":
    solve_dir()
    pass