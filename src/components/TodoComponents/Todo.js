import React from 'react';
import './Todo.css';

export default function Todo(props) {

	let classNames = "task"
	if (props.todoItem.complete) {
		classNames += " finished"
	}

	return (
		<li 
		className= {classNames} 
		onClick={() => props.toggleComplete(props.todoItem.id)}
		>{props.todoItem.taskName}</li>
	);
}