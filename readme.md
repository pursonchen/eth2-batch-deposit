# Batch Deposit Contract

[![pipeline status](https://gitlab.fish/stakefish/eth2-batch-deposit/badges/master/pipeline.svg)](https://gitlab.fish/stakefish/eth2-batch-deposit/-/commits/master) [![coverage report](https://gitlab.fish/stakefish/eth2-batch-deposit/badges/master/coverage.svg)](https://gitlab.fish/stakefish/eth2-batch-deposit/-/commits/master)

This contract enable to deposit to the ETH2 Deposit Contract multiple times in a single transaction.

## Usage

You can test the contract on both goerli testnet or in your local development environment.

### Integrated ganache-chi

1. Clone
1. `npm install`
1. In a terminal run `npx ganache-cli`
1. In another terminal run `npx truffle deploy`

### Test on your local blockchain

1. Clone the repository
1. Install [Ganache](https://www.trufflesuite.com/ganache) and [Truffle](https://www.trufflesuite.com/truffle)
1. Run ganache and quick start an empty workspace
1. Tun `truffle deploy` to compile & deploy, or just `truffle test` to compile, deploy and test automatically.
<!-- https://docs.avax.network/dapps/developer-toolchains/verify-smart-contracts-with-truffle-verify -->

npm install @truffle/hdwallet-provider truffle-plugin-verify@v0.5.3

需要将proxy paste到command line

``` 以下error需要安装 truffle-plugin-verify@v0.5.3
Cannot read properties of undefined (reading 'address')
   Failed to verify 1 contract(s): BatchDeposit
Verifying contracts on sourcify
```
npx truffle migrate --network goerli 
npx truffle run verify BatchDeposit --network goerli

### Test on Goerli

1. Get some funds from the [faucet](https://faucet.goerli.mudit.blog/)
1. Replace mnemonic in `./scripts/test_goerli.js`
1. Replace fake data with some real eth2 validator informations
1. Check if the smart contract address is correct
1. Run the script with `cd scripts && node test_goerli.js`

## Functional tests

Assertion libraries supported are [chai](https://www.chaijs.com/) assertion library and [truffle-assertions](https://github.com/rkalis/truffle-assertions). Tests are written with [Mocha](https://mochajs.org/).

You can find test under `tests` folder and run all the tests using `truffle test` command

## Code coverage

You can test code coverage by simply running `npm run coverage`, a local blockchain at port 8545 will be automatically provided and shutdown after all the tests are done.

## Deploy

To deploy in production is reccomended to use Remix IDE, expected gas usage is around `492,831`.

## Use older version of solidity

Refer to https://github.com/crytic/solc-select

## Security testing

Refer to https://github.com/crytic/slither

