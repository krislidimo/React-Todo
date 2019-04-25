// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

export default function TodoList(props) {
	return (
		<div className="todo-list">
			{props.todoData.map( (item) => {
				return <Todo key={item.id} todoItem={item} toggleComplete={props.toggleComplete}/>
			})}
		</div>
	);
}