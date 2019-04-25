import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    taskName: "Make my bed",
    id: Date.now(),
    complete: false
  },
  {
    taskName: "Finish homework",
    id: Date.now()+1,
    complete: false
  },
  {
    taskName: "Do the laundry",
    id: Date.now()+2,
    complete: false
  },
  {
    taskName: "Pick up groceries",
    id: Date.now()+3,
    complete: false
  }
]//todoData

export default class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todoData
    };//this.state
  }

  toggleComplete = id => {
    this.setState({
      todoData: this.state.todoData.map( item => {
        if(item.id === id) {
          item.complete = !item.complete;
          return item;
        } else {
          return item;
        }
      })
    });
  };

  addTodo = name => {
    this.setState({
      todoData: [...this.state.todoData, {taskName: name, id: Date.now(), complete: false}]
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter(item => !item.complete)
    });
  };

  render() {
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={this.state.todoData} toggleComplete={this.toggleComplete} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}