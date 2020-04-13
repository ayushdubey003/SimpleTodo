import React,{Component} from 'react';
import './App.css';
import web3 from "./web3";
import {connect} from "react-redux";
import {loadTodos} from "./store/actions/loadTodos";
import {loadAccounts} from "./store/actions/loadAccounts";
import todoList from "./todoList";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        todos: null,
        todosFetched: null
    }
    this.handleClicks = this.handleClicks.bind(this);
    this.remove = this.remove.bind(this);
  }

  async remove(e){
    const id = e.target.id;
    await todoList.methods.removeTodo(id).send({
        from: this.props.account
    });
    await this.props.dispatch(loadAccounts());
  }

  async handleClicks(e){
    const id = e.target.id;
    let todo = this.props.todos;
    if(!todo[parseInt(id)].completed)
        await todoList.methods.completeTodo(id).send({
            from: this.props.account
        });
    else
        await todoList.methods.uncompleteTodo(id).send({
            from: this.props.account
        });
    await this.props.dispatch(loadAccounts());
  }

  async componentDidMount(){
    await this.props.dispatch(loadAccounts());
    let todos = await this.props.dispatch(loadTodos(this.props.account));
    let todosFetched = this.props.todos.map((value,index)=> <li id={index} key={index}><div id={index}><p id={index} onClick={this.handleClicks} style={value.completed?{textDecoration: "line-through"}:{textDecoration:"none"}}>{value.description}</p><p id={index} onClick={this.remove}>X</p></div></li>);
    console.log(todosFetched);
    this.setState({
        todos: todos,
        todosFetched: todosFetched
    });
  }

  render(){
    return  <div>
                <ul>{this.state.todosFetched}</ul>
                <div className="loader" style={this.props.todos.length!=0?{display:"none"}:{display:"block"}}></div>
            </div>
  }
}

function mapStateToProps(state){
  return {
    todos: state.loadTodos.todos,
    account: state.loadAccounts.account
  }
}

export default connect(mapStateToProps,null)(App);