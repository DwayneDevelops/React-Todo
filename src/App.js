import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Header from './components/TodoComponents/Header';

class App extends React.Component {
  constructor() {
   super();
    this.state = {
      todos: [
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
      todo:'',
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, id: Date.now(), completed: false };
    this.setState({ 
      todos: [...this.state.todos, newTodo],
      todo:'',
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !this.state.completed);
    this.setState({ todos });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <TodoForm />
      </div>
    );
  }
}

export default App;
