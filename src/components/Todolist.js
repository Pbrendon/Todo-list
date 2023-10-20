import React, {useState} from 'react'
import Todoform from './TodoForm'

function Todolist() {
    const{Todos, setTodos} = useState ({})
  
    return (
    <div>Todolist
<h1>Whats's the Plan for Today </h1>
<TodoForm />
    </div>
  )
}

export default Todolist