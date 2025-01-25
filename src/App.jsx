import { useEffect, useState } from 'react'
import {TodoProvider} from './Context'
import './App.css'

function App() {

  const [todos ,setTodos] = useState([])

  const addtodo=(todo) =>{ 
    setTodos((oldtodos) => [{id: Date.now() , ...todo} , ...oldtodos])
  }

  const updatetodo = (id,todo) => {
    setTodos((oldtodos) => oldtodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deletetodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const togglecomplete =(id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo , completed: !prevTodo.completed}:prevTodo))
  }

  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  return (
    <TodoProvider value={{todos , addtodo , updatetodo , deletetodo , togglecomplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
