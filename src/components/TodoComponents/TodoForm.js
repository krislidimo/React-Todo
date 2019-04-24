import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return(
			<form className="todo-form">
				<input />
				<button>Add Todo</button>
				<button>Clear Completed</button>
			</form>
		);
	}
}

export default TodoForm;