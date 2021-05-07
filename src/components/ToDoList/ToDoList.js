import React, { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
const ToDoList = () => {

    const [todos, setTodos] = useState([
        { id: 123, text: 'Play Soccer' ,status : true},
         { id: 821, text: 'Listen to music',status:false }])
    
    const addTodo = (formValue) => {
    
        if (!formValue) {
            return;
        }
        const newTodos = [formValue, ...todos];
        setTodos(newTodos);
    }

    const updateTodo = (newText,id) => {
        let updateTodo = todos.map(todo=>{
            if(todo.id===id){
                todo.text=newText
            }
            return todo;
        })
        setTodos(updateTodo);
        
    }


    const completeTodo = (id) => {
     
        let updateTodo=todos.map(todo=>{
            if(todo.id===id){
                todo.status=!todo.status;      
            }
            return todo;
        });

        setTodos(updateTodo);

    }
    const removeTodo = (todoId) => {

        const indexFind = todos.findIndex(todo => todo.id === todoId);
        if (indexFind >= 0) {
            const newTodo = [...todos];
            newTodo.splice(indexFind, 1);
            setTodos(newTodo);
        }

    }
    return (
        <div className="flex justify-center items-center">
        <div className="todolist  bg-green-400 px-10 py-4 mt-20">
            <h1 className="text-xl uppercase font-semibold my-3 text-white">What's the Plan for Today?</h1>
            <ToDoForm onSubmit={addTodo} />
            <ToDo 
                todos={todos} 
                completeTodo={completeTodo}    
                removeTodo={removeTodo} 
                updateTodo={updateTodo} 
            />
        </div>
        </div>
    )
}

export default ToDoList
