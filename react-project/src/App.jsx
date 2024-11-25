
import  './App.css'
import Addbuttton from "./Component/Todo-App/Addbuttton"
import Home from "./Component/Todo-App/Home"
import Todoitems from './Component/Todo-App/Todoitems'
import React, { useState } from 'react'
import Wellcomemessage from './Component/Wellcomemessage'

const App = () => {


const [todoitems,setTodoitems]=useState([])


const handleonclick=(itemName,itemDueDate)=>{
const newtodoitems=[...todoitems,{ name:itemName,
  duedate:itemDueDate}]
  
  setTodoitems(newtodoitems)

}

const handleDeletebutton=(todoitemsname)=>{
const newtodoitem=todoitems.filter((item)=>item.name !==todoitemsname)
setTodoitems(newtodoitem)

}


  return (
    <center className="todo-container">
      
<Home/>


 <Addbuttton onNewitems={handleonclick} />
  <Wellcomemessage Todoitem= {todoitems} />
<div className='items-container'>
<Todoitems key='todoitems'  todoItems={todoitems} onClick={handleDeletebutton} />
 </div>

     </center>

  )
}

export default App