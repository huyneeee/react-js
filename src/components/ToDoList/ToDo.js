import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
const ToDo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    return (
        <div className="todo w-auto mt-5">
            {todos.map((todo, index) =>
                <div className="flex bg-red-200 justify-center px-5 py-3 my-2" key={index}>
                    <div className={todo.status ? 'w-4/5 text-left border-r-2 border-gray-500 flex line-through opacity-50' : 'w-4/5 text-left border-r-2 border-gray-500 flex'}  >
                        <input 
                            type="checkbox" 
                            className="mt-2 mr-3" 
                            key={todo.id} 
                            checked={todo.status?true:false}
                            readOnly
                            onClick={() => completeTodo(todo.id)} 
                            
                        />
                        <input 
                            type="text" 
                            value={todo.text} 
                            key={index} 
                            onChange={(e) => { updateTodo(e.target.value, todo.id) }} 
                            className="bg-transparent focus:outline-none" 
                        />
                      
                    </div>
                    <div className="icons w-1/5 flex justify-center">
                        <AiFillDelete className="text-2xl" onClick={() => removeTodo(todo.id)} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ToDo
