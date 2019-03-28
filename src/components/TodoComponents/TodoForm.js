import React from 'react';

const TodoForm = props => {
    return(
        <form>
            <input
            type='text'
            name='todo'
            placeholder='...todo'
             />
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>

    )
}

export default TodoForm;