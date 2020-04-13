import {LOAD_TODOS} from "../actionTypes.js"

const defaultState = {
    todos:  []
}

export default function loadTodos(state=defaultState,action){
    switch(action.type){
        case LOAD_TODOS:
            return {
                ...state,
                todos: action.data
            }
        default:
            return state;
    }
}