pragma solidity >=0.8.3 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Gems is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter public tokenIds;
    address public minter;

    struct Attributes {
        string weight;
        string cut;
        string gemType;
        string clarity;
    }
    mapping(uint => Attributes) public gemAttributes;

    constructor() ERC721("Gems", "GEM") {
        minter = msg.sender;
    }

    function mint(string memory weight, string memory cut, string memory gemType, string memory clarity) public returns (uint256) {
        require(msg.sender == minter, "Only the contract owner can mint new gems");
        tokenIds.increment();

        uint256 newItemId = tokenIds.current();
        _safeMint(minter, newItemId);
        gemAttributes[newItemId] = Attributes(weight, cut, gemType, clarity);

        return newItemId;
    }
}
