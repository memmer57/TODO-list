import './TodoItem.css'
import { useState } from 'react'

function TodoItem(props) {
  console.log('test')
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
        <button id="edit">Edit</button>
        <button onClick={() => deleteItem(props.itemIndex)} id="delete">Delete</button>
      </div>
    </div>
  )
}

export default TodoItem