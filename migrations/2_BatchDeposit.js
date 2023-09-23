const DepositContract = artifacts.require("DepositContract");
const BatchDeposit = artifacts.require("BatchDeposit");

// 1 gwei
const initialFee = 1000000000;

module.exports = function (deployer) {
  deployer.deploy(
    BatchDeposit,
    "0x00000000219ab540356cBB839Cbe05303d7705Fa", //mainnet deposit合约地址
    0
  );
  // deployer.deploy(
  //     BatchDeposit,
  //     "0xff50ed3d0ec03ac01d4c79aad74928bff48a7b2b", //goerli deposit合约地址
  //     0
  //   );
  // deployer.deploy(DepositContract).then(function () {
  //   return deployer.deploy(BatchDeposit, DepositContract.address, initialFee);
  // });
};
