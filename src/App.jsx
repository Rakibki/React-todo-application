import {useState} from 'react'

import shortid from 'shortid'

import CreateTodo from './components/createTodo/CreateTodo'
import ShowTodos from './components/showTodos/ShowTodos'

const App = () => {
  const [todos, setTodos] = useState([])
  
  const getTodo = (todo) => {
    const newTodo = {
      id: shortid.generate(),
      value: todo,
      isComplete: false
    }
    setTodos([...todos, newTodo])
  }


 

  return (
    <div>
        <CreateTodo getTodo={getTodo} />
        <ShowTodos todos={todos} />
    </div>
  )
}

export default App