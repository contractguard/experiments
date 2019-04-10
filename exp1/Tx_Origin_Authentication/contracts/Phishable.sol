pragma solidity ^0.4.25;

contract Phishable {
    address public owner;

    constructor (address _owner) {
        owner = _owner;
    }

    function() public payable {} // collect ether

    function withdrawAll(address _recipient) public {
        if (tx.origin == msg.sender) {
            uint a = 111;
        }
        require(tx.origin == owner);
        _recipient.transfer(this.balance);
    }
}