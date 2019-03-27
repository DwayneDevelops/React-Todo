// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            taskList: [
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
            ]
        };
    }

    render() {
        return(
            <div>
                <h1>Todo List: MVP</h1>

                <div className="task-list">
                    {this.state.taskList.map((taskFromMap, index) => (
                        <Task key={index} task={taskFromMap} />
                    ))}
                </div>
                <TodoForm addTask={this.addTask} />
            </div>
        );
    }

    addTask = task => {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    };
}

export default TodoList;