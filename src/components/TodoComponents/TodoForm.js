import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            task: ""
        };
    }

    handleChange(e) {
        console.dir(e.target.value);  
    }

    render() {
        return (
            <form>
                <input
                    type= "text"
                    placeholder= "...todo"
                    name= "task"
                    value={this.state.task}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        );
    }

}

export default TodoForm;