import React, { useState } from "react";
import './Todo.css';
import { Reviews } from "../components/Reviews";
function Todo() {

const[todo, setTodo] = useState("");
const[todos,setTodos] = useState([])
const[editId,setEditId] = useState(0)
const handleChange = (e) => {
    setTodo(e.target.value)
    //console.log(todo)
}
const handleSubmit = (e) =>{
    e.preventDefault()
if(editId){
    const editTodo = todos.find((i)=> i.id===editId)
    const updatedTodo= todos.map((t)=>t.id ===editTodo.id 
    ? (t={id:t.id,todo})
    :{i:t.id,todo: t.todo});
    setTodos(updatedTodo)
    setEditId(0)
    setTodo("")
    return;
}

   if(todo !==""){
    setTodos([...todos,{id:`${todo}-${Date.now()}`,todo}])
    console.log(todo)
    setTodo("")
   }
};
const deleteHandler = (id) =>{
    const delTodo=todos.filter((to)=> to.id !==id)
    setTodos([...delTodo])

}

const editHandler = (id)=>{
    const editTodo = todos.find((i) => i.id===id)
    setTodo(editTodo.todo)
    setEditId(id)
}
    return (  

        <div className="todo-page">

            <header className="mt-5">
                <div className="container h-100 d-flex
                align-items-center justify-content-center">
                    <h1 className="text-light ">Order</h1>
                </div>
            </header>

            <div className="container text-center">
            <form onSubmit={handleSubmit} action="">
                <input 
                 className='form-control mt-3 ' 
                placeholder="Enter to add a meal" type="text"
                onChange={handleChange}
                value={todo}
                />
                <button className="btn btn-success btn-lg
                mt-2">Add to basket </button>
            </form>
        </div>
        <div>
            {
                todos.map((t)=>{
                    return(
                        <>
                        <div className=" container container-todo bg-light mt-2 mb-5">
                        <p className='todo' key={t.id}>
                            {t.todo}
                        </p>
                            <button 
                            onClick={()=>deleteHandler(t.id)} 
                            className="btn btn-danger mx-2">
                                Delete
                            </button>

                            <button 
                            
                            className="btn btn-success "
                            onClick={()=>editHandler(t.id)}>
                                Edit
                            </button>
                        
                        </div>
                            
                        </>
                    )
                })
            }
        </div>

        <div className="bg-dark text-light py-5">
            <Reviews/>
        </div>
        </div>

        
    );
}

export default Todo;