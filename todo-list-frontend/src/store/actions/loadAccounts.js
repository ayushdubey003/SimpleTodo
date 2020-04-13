import {LOAD_ACCOUNTS} from "../actionTypes";
import web3 from "../../web3";

export function loadAccounts(){
    return async function(dispatch){
        const accounts = await web3.eth.getAccounts();
        dispatch({
            type: LOAD_ACCOUNTS,
            data: accounts[0]
        })
    }
}