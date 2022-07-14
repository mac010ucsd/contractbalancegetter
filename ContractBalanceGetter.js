const {ethers} = require('ethers');
const contractAbiJson = require('./contractabi.json');

async function main() {
    // we need a provider
    const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/");

    // a signer (wallet)
    let mywallet = ethers.Wallet.createRandom();
    mywallet = mywallet.connect(provider);

    // a contract, its address, an ABI
    const contractAddress = "0x715696b3aea58920e1f5a4cf161e843405d2d384";
    const contractAbi = contractAbiJson.result;
    const contract = new ethers.Contract(contractAddress, contractAbi, mywallet);

    const balance = await contract.balanceOf("0x1b9dcd80ff80292b516ab5a0bb9fb189a65182c1")
    console.log("this address has %s tokens.", balance.toString());
}

main();