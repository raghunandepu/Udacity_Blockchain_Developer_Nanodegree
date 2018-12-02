# Project5
Create a decentralized Star Notary application (Dapp)


## Getting Started

These instructions will install requirements and allow you to execute the code.
### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site)[https://nodejs.org/en/]. Most Linux distributions have ready-to-install packages.

### Configuring your project

## Run:
- Go to directory smart_contracts
```
cd smart_contracts
```
- Install requirements (within smart_contracts folder)
```
npm install 
```

## Contract deployment
```
$>truffle migrate --network rinkeby --reset --compile-all 
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/StarNotary.sol...
Compiling openzeppelin-solidity/contracts/introspection/ERC165.sol...
Compiling openzeppelin-solidity/contracts/introspection/IERC165.sol...
Compiling openzeppelin-solidity/contracts/math/SafeMath.sol...
Compiling openzeppelin-solidity/contracts/token/ERC721/ERC721.sol...
Compiling openzeppelin-solidity/contracts/token/ERC721/IERC721.sol...
Compiling openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol...
Compiling openzeppelin-solidity/contracts/utils/Address.sol...
Writing artifacts to ./build/contracts

Using network 'rinkeby'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xdffa67103d3aed95561a717f9fbdcece8d21f52f69c67c34f2c8d177c26b1a15
  Migrations: 0x7d797a9eba749a60416951aac0e2a0313dcc0c14
Saving successful migration to network...
  ... 0x5ff621d586c8e32baacafd2860e53d4957fa8169b96d01266d7d350bf5c1e28d
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying StarNotary...
  ... 0x6ae9df82d85f708924bec5f13001c8a1214e6e4ffac8db8bdb88fa9868bb82c2
  StarNotary: 0xc5aabed7aeb31e67c99988e0ee4f2b3a68c0b0a1
Saving successful migration to network...
  ... 0x35380877e95c27930448a0cc589439709f46d515fb9de31e989f4ebf091ce509
Saving artifacts...

```


## View details on Etherscan
### Contract address 
0x6ae9df82d85f708924bec5f13001c8a1214e6e4ffac8db8bdb88fa9868bb82c2
https://rinkeby.etherscan.io/address/0xc5aabed7aeb31e67c99988e0ee4f2b3a68c0b0a1


### Transaction information
```
TxHash:
0x6ae9df82d85f708924bec5f13001c8a1214e6e4ffac8db8bdb88fa9868bb82c2
TxReceipt Status:
Success
```
