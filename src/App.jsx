import AddButton from "./components/AddButton"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import "./style.css"


function App() {
  

  return (
    <>
      <div className='todo-container'>
        <Header />
        <TodoItem text="Eat" />
        <TodoItem text="Code" />
        <TodoItem text="Sleep" />
        <TodoItem text="Play Cricket" />
        <TodoItem text="No Reels" />
        <TodoItem text="No Music" />
        <TodoItem text="More Code" />
        
        <AddButton />
      </div>
    </>
  )
}

export default App
