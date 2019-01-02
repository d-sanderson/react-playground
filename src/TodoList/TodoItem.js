import React from 'react'

function TodoItem(props) {
	const compStyles= {
		fontStyle: "italic",
		color: "green",
		textDecoration: "line-through"
	}
	return (
		<div className="todo-item">
			<input
				type="checkbox"
				checked={props.item.completed}
				onChange={() => props.handleChange(props.item.id)}
			/>
			<p style={props.item.completed ? compStyles : null}><strong>{props.item.text}</strong></p>
		</div>
	)
}

export default TodoItem