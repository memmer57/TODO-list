import reactLogo from './assets/react.svg'
import './App.css'
import TodoItem from './TODO item/TodoItem'
import CreateItem from './TODO_create_item/CreateItem'
import { useState } from 'react'

function App() {
  const [popupVisibility, setPopupVisibility] = useState(false)
  const editPopupVisibility = (e) => {
    setPopupVisibility(e)
  }

  let itemCount = parseInt(localStorage.getItem('0'))
  let itemName = []
  let itemDescription = []

  for (let i = 1; i <= itemCount; i++) {
    let nameKey = i + 'name'
    let descriptionKey = i + 'description'

    itemName.push(localStorage.getItem(nameKey))
    itemDescription.push(localStorage.getItem(descriptionKey))
  }

  console.log(itemName)
  console.log(itemDescription)


  const itemList = itemName.map((name, index) => {
    return <TodoItem name={name} description={itemDescription[index]} key={index} />
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <h2>React TODO list</h2>

        <button onClick={() => setPopupVisibility(!popupVisibility)}>Create new item</button>
        
      </header>

      {popupVisibility && <CreateItem editPopup={editPopupVisibility}/>}

      {itemList}

    </div>
  )
}

export default App
