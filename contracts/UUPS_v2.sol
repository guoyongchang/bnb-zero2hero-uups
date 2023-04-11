// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./UUPS_v1.sol";

contract UUPS_v2 is UUPS_v1 {
    function increaseKey() external {
        key += 1;
        emit KeyChanged(key);
    }

    function version() external pure returns (uint256) {
        return 2;
    }
}
