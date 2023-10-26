const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/2704052c48154c0ea15c57b4d3e05127`
);

const querryBlockchain = async () => {
    // const block = await provider.getBlockNumber();
    // console.log("Current Block Number:", block);

    const balance = await provider.getBalance("0x0E385fabb7C8298957c96afEAdFC6C640Ada58A6");
    console.log("Account balance", balance);

    const balanceEthers = ethers.utils.formatEther(balance);
    console.log("Account balance in ether", balanceEthers);

};
querryBlockchain();