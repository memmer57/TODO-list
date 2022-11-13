import './CreateItem.css'
import App from '../App'
import { useState } from 'react'

function CreateItem(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    // increment item count
    if (localStorage.getItem('0') === null) {
      localStorage.setItem('0', 1)
    } else {
      let newKey = parseInt(localStorage.getItem('0')) + 1
      localStorage.setItem('0', newKey)
    }

    let itemCount = localStorage.getItem('0')
    let nameKey = itemCount + 'name'
    let descriptionKey = itemCount + 'description'

    localStorage.setItem(nameKey, name)
    localStorage.setItem(descriptionKey, description)

    props.editPopup(false);
    console.log('submit')
  }

  
  return (
    <div className="create-item">
        <form onSubmit={handleSubmit} className='create-item-form'>
            <button class="close-button" onClick={() => props.editPopup(false)}>X</button>

            <h2>Create new TODO item</h2>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} id="name" name="name" placeholder="Name" />

            <label htmlFor="description">Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} id="description" name="description" placeholder="Description" />

            <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default CreateItem