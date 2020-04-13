const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

const provider = new HDWalletProvider(
    "Get your mnemonic from metamask",
    "Register and put your rinkeby address here"
);

const web3 = new Web3(provider);
const {abi,evm} = require("./compile");
console.log(JSON.stringify(abi));

const bytecode = evm.bytecode.object;
let account;
let todoList;

async function getAccountDetails(){
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
    todoList = await new web3.eth.Contract(abi).
                    deploy({
                        data: "0x"+bytecode
                    }).
                    send({
                        from: account,
                        gas: '1000000'
                    });
    console.log(todoList.options.address);
}

getAccountDetails();