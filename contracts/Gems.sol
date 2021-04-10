pragma solidity >=0.8.3 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Gems is ERC721 {
    address public minter;

    constructor() ERC721("Gems", "GEM") {
        minter = msg.sender;
    }
}
