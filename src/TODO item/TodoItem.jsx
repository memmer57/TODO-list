import './TodoItem.css'

function TodoItem(props) {
  return (
    <div className="todo-item">
      <h2>{props.name}</h2>
      <p>{props.description}</p>

      <div className="todo-buttons">
        <button id="done">Mark done</button>
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
      </div>
    </div>
  )
}

export default TodoItem