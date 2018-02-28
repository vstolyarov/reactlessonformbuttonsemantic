import React, { Component } from 'react';
import Singletodo from './Singletodo';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onInputChange = (e) => {
    this.setState({ currentTodo: e.target.value });
  }

  onClick = () => {
    let todosCopy = this.state.todos;
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currenTodo: "" });
  }

  deleteTodo = i => {
    console.log(i);
    let todosCopy = this.state.todos;

    todosCopy.splice(i, 1);

    this.setState({ todos: todosCopy });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let todosCopy = this.state.todos.slice();
      todosCopy.push(this.state.currentTodo);

      this.setState({ todos: todosCopy, currenTodo: "" });
    }
  }
  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
      return (
        <Singletodo todo={e} delete={() => this.deleteTodo(i)} />
      );
    });
    return (
      <div>
        <div id="navigation" className="Blog">
        <nav>
          <ul>
            <li>Browse</li>
            <li>My list</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
       
<div>     
        <input className='ui input' placeholder='Enter todo' value={this.state.currentTodo}
        onChange={this.onInputChange} onKeyPress={this.handleKeyPress} />

      <button className="ui green basic button" onClick={this.onClick}>Add!</button>
      <br />
      {this.state.todos.length === 0 ? "No todos yets" : <ul>{bulletedTodos}</ul>}
</div>
</div>
          );
        }
      }
      
      
      export default App;
