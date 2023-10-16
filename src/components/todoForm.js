import React, {useState} from 'react';
function TodoForm(props) {
    const [input, setInput] = useState('');

const handleSubmit = e => {
e.preventDefault();

props.onSubmit({
id: Math.floor(Math.random()*10000),
text: input 
});

};
    
  return (
   <form className="Todo-form" onSubmit={handleSubmit}>
    <input 
    type='text'
     placeholder='Add a Todo'
     value={input} 
   name="text" 
   className='todo-input'
   />
  <button className='Todo-button'>add 
  todo</button>
   </form> 
    
  );
}

export default TodoForm;