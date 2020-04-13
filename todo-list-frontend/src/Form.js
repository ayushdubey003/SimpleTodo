import React,{Component} from "react";
import {connect} from "react-redux";
import todoList from "./todoList";
import {loadTodos} from "./store/actions/loadTodos";

class Form extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.state={
            newTodo: ""
        }
    }

    async handleSubmit(e){
        e.preventDefault();
        let newTodo = this.state.newTodo;
        const thash = await todoList.methods.addTodo(newTodo).send({
            from: this.props.account
        });
        this.setState({
            newTodo: ""
        });
        await this.props.dispatch(loadTodos(this.props.account));
    }
    
    handleChanges(e){
        this.setState({
            newTodo: e.target.value
        })
    }

    render(){
        return  <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChanges} value={this.state.newTodo}></input>
                </form>
    }
}

function mapStateToProps(state){
    return {
        account: state.loadAccounts.account
    }
}

export default connect(mapStateToProps,null)(Form);