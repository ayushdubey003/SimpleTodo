import React,{Component} from 'react';
import './App.css';
import web3 from "./web3";
import {connect} from "react-redux";
import {loadTodos} from "./store/actions/loadTodos";
import {loadAccounts} from "./store/actions/loadAccounts";
import Heading from "./Heading";
import Form from "./Form";
import Todo from "./Todo";

export default function render(){
  return  <div className="todoList">
            <Heading></Heading>
            <Form></Form>
            <Todo></Todo>
          </div>
}