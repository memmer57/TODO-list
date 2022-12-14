import './TodoItem.css'
import { useState } from 'react'

function TodoItem(props) {
  function deleteItem(key) {
    let nameKey = key + 'name'
    let descriptionKey = key + 'description'
    let indexKey = key + 'index'

    localStorage.removeItem(nameKey)
    localStorage.removeItem(descriptionKey)
    localStorage.removeItem(indexKey)

    props.forceUpdate()
  }

  return (
    <div className="todo-item">
      <h2>{props.name}</h2>
      <p>{props.description}</p>

      <div className="todo-buttons">
        <button onClick={() => deleteItem(props.itemIndex)} id="done">Mark done</button>
      </div>
    </div>
  )
}

export default TodoItem