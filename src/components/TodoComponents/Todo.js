import React from 'react';

function Task(props) {
    return (
        <div className="App">
            <p>{props.taskProp.task}</p>
        </div>
    );
}

export default Task;