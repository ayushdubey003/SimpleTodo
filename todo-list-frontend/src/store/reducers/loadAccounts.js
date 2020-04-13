import {LOAD_ACCOUNTS} from "../actionTypes.js"

const defaultState = {
    account: null
}

export default function loadTodos(state=defaultState,action){
    switch(action.type){
        case LOAD_ACCOUNTS:
            return {
                ...state,
                account: action.data
            }
        default:
            return state;
    }
}