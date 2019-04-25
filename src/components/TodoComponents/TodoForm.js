import React from 'react';
import './Todo.css';

export default class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newTask: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.addTodo(this.state.newTask)
	};

	changeText = event => {
		this.setState({
			newTask: event.target.value
		})
	};

	render() {
		return(
			<form className="todo-form">
				<input onChange={this.changeText} />
				<div className="buttons">
					<button className="add-todo" type="submit" onClick={this.handleSubmit} >Add Todo</button>
					<button className="clear-completed" onClick={this.props.clearCompleted} >Clear Completed</button>
				</div>
			</form>
		);
	}
}