import React, {useState} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
      setInput(e.target.value);
    };


  const handleSubmit= e =>{
  e.preventDefault();

  props.onSubmit({
  id: Math.floor(Math.random()*10000),
  text: input 
  });

setInput('');
};
    
  return (
   <form className="Todo-Form" onSubmit={handleSubmit}>
    <input 
    type='text'
     placeholder='Add a Todo'
     value={input} 
   name="text" 
   className='todo-input'
   onChange={handleChange}
   />
  <button className='Todo-button'>Add 
  todo</button>
   </form> 
    );
};
export default TodoForm;