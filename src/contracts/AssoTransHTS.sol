// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;
pragma experimental ABIEncoderV2;

import "./hip-206/HederaTokenService.sol";
import "./hip-206/HederaResponseCodes.sol";

contract AssoTransHTS is HederaTokenService {

    address tokenAddress;

    constructor(address _tokenAddress) {
        tokenAddress = _tokenAddress;
    }

    function tokenAssoTrans(int64 _amount) external returns (bool) {        
        int response1 = HederaTokenService.associateToken(address(this), tokenAddress);
        require(response1 == HederaResponseCodes.SUCCESS, "Token association failed");

        int response2 = HederaTokenService.transferToken(tokenAddress, msg.sender, address(this), _amount);
        require(response2 == HederaResponseCodes.SUCCESS, "Token transfer failed");

        return true;
    }
}