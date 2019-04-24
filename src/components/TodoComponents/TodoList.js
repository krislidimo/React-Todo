// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<ul>
				{this.props.todoData.map( (item) => {
					return <Todo todoItem={item} toggleComplete={this.props.toggleComplete}/>
				})}
			</ul>
		);
	}
}

export default TodoList;