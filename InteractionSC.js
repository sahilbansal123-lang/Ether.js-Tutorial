const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
    `https://sepolia.infura.io/v3/2704052c48154c0ea15c57b4d3e05127`
);
const walletAddress = "0x534cc583ea96cbc624b2235fa58cf63c22c60e97";
const walletAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sendEthContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "sendEthUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractnteraction = async () => {
  const walletContract = new ethers.Contract(
    walletAddress,
    walletAbi,
    provider
  );

  const contracName = await walletContract.name();
  console.log("Contract Name:", contracName);


  const num = await walletContract.getValue();
  console.log("Number Value:", String(num));

  const contractBalance = await walletContract.contractBalance();
  const balanceEthContract = await ethers.utils.formatEther(contractBalance);
  console.log("contract Balance:", balanceEthContract);

  const userBalance = await walletContract.accountBalance("0x0E385fabb7C8298957c96afEAdFC6C640Ada58A6")
  const balanceEthUser = await ethers.utils.formatEther(userBalance);
  console.log("User Balance: ", balanceEthUser);

};

contractnteraction();
