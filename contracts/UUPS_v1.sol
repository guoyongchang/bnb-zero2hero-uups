// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract UUPS_v1 is Initializable, OwnableUpgradeable, UUPSUpgradeable {
    uint256 public key;
    event KeyChanged(uint256 key);

    function initialize(uint256 _key) public initializer {
        key = _key;
        __Ownable_init();
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal virtual override {
        require(_msgSender() == owner(), "Unauthorized access");
        console.log("_authorizeUpgrade executed for admin:", _msgSender());
        console.log("New implementation address:", newImplementation);
    }

    function decreaseKey() external {
        require(key > 1, "can decrease key");
        key = key - 1;
        emit KeyChanged(key);
    }
}
