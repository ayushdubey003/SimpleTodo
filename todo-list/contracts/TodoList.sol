pragma solidity ^0.6.6;

contract TodoList{
    struct Todo {
        string description;
        bool completed;
        bool removed;
    }
    
    mapping(address=>Todo[]) public todos;
    
    function addTodo(string memory desc) public{
        Todo memory todo = Todo({
            description: desc,
            completed: false,
            removed: false
        });
        todos[msg.sender].push(todo);
    }
    
    function completeTodo(uint ind) public{
        require(!todos[msg.sender][ind].removed);
        todos[msg.sender][ind].completed = true;
    }
    
     function uncompleteTodo(uint ind) public{
        require(!todos[msg.sender][ind].removed);
        todos[msg.sender][ind].completed = false;
    }
    
    function getLength() public view returns(uint){
        return todos[msg.sender].length;
    }
    
    function removeTodo(uint ind) public{
        todos[msg.sender][ind].removed = true;
    }
}