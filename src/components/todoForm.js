import React {useState} from 'react'

function todoForm() {
    const {input, setInput} = useState('')
  return (
   <form className="todo-form">
    <input 
    type="text"
     placeholder='add a todo'
     value={input} /
   name='text' 
   className='todo-input'/>
  <button classNmae="todo-button">add todo</button>
   </form> 
    
  )
}

export default todoForm