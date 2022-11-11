import './CreateItem.css'

function CreateItem() {
  return (
    <div className="create-item">
        <h2>Create new TODO item</h2>
        <form className='create-item-form'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" placeholder="Description" />

            <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default CreateItem