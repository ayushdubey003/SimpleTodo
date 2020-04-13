import {combineReducers} from "redux"; 
import loadTodos from "./loadTodos";
import loadAccounts from "./loadAccounts";

const rootReducer = combineReducers({
    loadTodos,
    loadAccounts,
});

export default rootReducer;