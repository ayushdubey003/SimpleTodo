const path = require('path');
const fs = require('fs');
const solc = require('solc');

const todoListPath = path.resolve(__dirname,'contracts','TodoList.sol');
const source = fs.readFileSync(todoListPath,"utf-8");

var input = {
  language: 'Solidity',
  sources: {
    'TodoList.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
module.exports = output.contracts['TodoList.sol']['TodoList'];