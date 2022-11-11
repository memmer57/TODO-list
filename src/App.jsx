import reactLogo from './assets/react.svg'
import './App.css'
import TodoItem from './TODO item/TodoItem'
import CreateItem from './TODO_create_item/CreateItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <h2>React TODO list</h2>
        <button>Create new item</button>
      </header>

      <TodoItem name="Vyklidit mycku" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque pretium lectus id turpis. Quisque porta. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus." />
      <TodoItem name="Vynest kos" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque pretium lectus id turpis. Quisque porta. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus." />
      <TodoItem name="Udelat ukol na matiku" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque pretium lectus id turpis. Quisque porta. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus." />
    </div>
  )
}

export default App
