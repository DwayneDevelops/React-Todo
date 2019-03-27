import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      task="",
    };
  }

  changeHandler = e => {
    this.setState({
      task: e.target.value
    })
  }

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todo: [
        ...this.state.todo,
        {task: this.state.inputText,
        id: Date.now(),
        completed: false}
      ]
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="todo-container">
        <h2>Todo List: MVP</h2>
        <div className="todo-items">
        <p>
          {this.state.taskList}
        </p>
        </div>
      </div>
    );
  }
}

export default App;
