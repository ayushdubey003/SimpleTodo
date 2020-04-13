import {LOAD_TODOS} from "../actionTypes";
import todoList from "../../todoList";

export function loadTodos(account){
    return async function(dispatch){
        console.log(todoList);
        let todos=[];
        let i=0;
        for(i=0;;i++){
            try{
                let todo = await todoList.methods.todos(account,i).call();
                if(!todo.removed){
                    todos.push({
                        "description": todo.description,
                        "completed": todo.completed,
                        "removed": todo.removed
                    });
                }
            }
            catch(e){
                break;
            }
        }
        dispatch({
            type: LOAD_TODOS,
            data: todos
        })
    }
}