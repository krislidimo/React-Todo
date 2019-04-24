import React from 'react';
import './Todo.css';

const Todo = props => {
	return (
		<li className='task' onClick={() => props.toggleComplete(props.todoItem.id)}
		>{props.todoItem.taskName}</li>
	);
}

export default Todo;