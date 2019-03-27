import React from 'react';
import Task from './components/TodoComponents/Todo';

const task = [
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
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: task
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='ToDo-wrapper'>
        <h1>{this.props.title}</h1>
        <div className='class-list'>
          {this.state.taskList.map((taskFromMap, index) => (
            <Task key={index} taskProp={taskFromMap} />
          )) }
        </div>
      </div>

    );
  }
}

export default App;
