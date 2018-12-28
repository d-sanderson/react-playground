import React from 'react'

function TodoItem(props) {
	return (
		<div className="todo-item">
			<input
				type="checkbox"
				checked={props.item.completed}
				onChange={() => props.handleChange(props.item.id)}
			/>
			<p><strong>{props.item.text}</strong></p>
		</div>
	)
}

export default TodoItem