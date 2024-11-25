import { useState } from "react"
import React from 'react'
const Addbuttton = ({onNewitems}) => {


  const [todoname,setTodoname]=useState('')
  const [tododate,setTodoDate]=useState('')


  const handleNamechanger=(e)=>{
    setTodoname(e.target.value)
  }
  const handleDatechanger=(e)=>{
    setTodoDate(e.target.value)
  }

  
  const handleaddbutton=()=>{
    onNewitems(todoname,tododate)
    setTodoDate('');
    setTodoname('');
  }


  return (
    <div>
        <div className="row kg-row">
    <div className="col-6">
      <input type="text" value={todoname} placeholder='Enter do Here' onChange={handleNamechanger}  />
    </div>
    <div className="col-4">
      <input type="date"  value={tododate} onChange={handleDatechanger} />
    </div>
    <div className="col-2">
 <button type="button" className='btn btn-success' onClick={handleaddbutton}>Add</button>
    </div>
  </div>
        
        </div>
  )
}

export default Addbuttton