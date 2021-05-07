import React,{useState} from 'react'

const ToDoForm = ({onSubmit}) => {
    const [ input, setInput] = useState('');

    const handleChange = (e)=>{
        setInput(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formValue = {
            id:Math.floor(Math.random()*1000),
            text:input,
            status: false
        }
        onSubmit(formValue);
        
        setInput('');

    }
    return (
       <form className="todo-form" onSubmit={handleSubmit}>
           <input type="text" placeholder="Add to do" value={input} name="text" className="todo-input border border-gray-900 px-3 py-2" onChange={handleChange} />
           <button className="add-todo px-5 py-2 bg-black text-white">Add</button>
       </form>
    )
}

export default ToDoForm
