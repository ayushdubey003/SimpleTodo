import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);

window.addEventListener('load', async () => {
    if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Accounts always exposed
    }
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

export default web3;