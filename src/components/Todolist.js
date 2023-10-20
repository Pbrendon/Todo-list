import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {
    const{Todos, setTodos} = useState ({})

    const addTodo => {
    if(!TodoForm.txt || /^\s*$/.test(todo.text)){
      return
    }
    const newTodos = [todo, ...todos]

    setTodos(newtodos)
    console.log(..todos);
    
    
    
  }
  
    return (
    <div>
<h1>Whats's the Plan for Today ?</h1>
<TodoForm onSubmit={addTodo />
    </div>
  )
}

export default TodoList