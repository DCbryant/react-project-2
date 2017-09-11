import React, { Component } from 'react';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import * as localStore from './localStore'
import 'normalize.css'
import './App.css'
import './reset.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      newTodo:'',
      todoList:localStore.load('todoList') || []
    }
  }

  addTodo(e){
    this.state.todoList.push({
      id:idMaker(),
      title:e.target.value,
      status:null,
      deleted:false
    })

    this.setState({
      newTodo:'',
      todoList:this.state.todoList
    })
    localStore.save('todoList',this.state.todoList)
  }

  delete(e,todo){
    todo.deleted = true
    this.setState(this.state)
    localStore.save('todoList',this.state.todoList)
  }

  toggle(e,todo){
    // 为什么这里传入的todo是那个对象
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state) 
    localStore.save('todoList',this.state.todoList)
  }

  changeTitle(e){
    this.setState({
      newTodo:e.target.value,
      todoList:this.state.todoList
    })
    localStore.save('todoList',this.state.todoList)
  }
  
  render(){
    let todos = this.state.todoList
    .filter((item) => !item.deleted)
    .map((item,index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} 
            onToggle={this.toggle.bind(this)}
            onDelete={this.delete.bind(this)} 
        />
        </li>
      )
    })
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput 
            content={this.state.newTodo}
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)}
          />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
    )  
  }

  
  
}

export default App;

let id = 0
function idMaker(){
  id += 1
  return id
}
