pragma solidity >=0.8.3 <0.9.0;

contract Gems {
    address public minter;

    constructor() {
        minter = msg.sender;
    }
}
