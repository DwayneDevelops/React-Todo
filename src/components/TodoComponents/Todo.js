import React from 'react';

const Todo = props => {
    return(
        <div className='todo'>
            {props.item.task}
        </div>
    )
}

export default Todo;