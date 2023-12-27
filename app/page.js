"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()

    setmainTask([...mainTask, {title, desc}]); // old task then current task adds up 
    settitle("")
    setdesc("")
  };

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  };
  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{             // t- element , i - index
      return(
      <li key={i}className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='font-semibold text-2xl'>{t.title}</h5>
        <h6 className='font-medium text-xl'>{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-600 text-white px-4 py-2 m-2 border-rounded'>Delete</button>
      </li>  
      );
    });
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'> Mohit's Todolist</h1>
    <form onSubmit={submitHandler}>
    <input type ="text" className ='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder="Enter Task Here"
    value={title}
    onChange={(e)=>{
      //console.log(e.target.value)
      settitle(e.target.value)
    }}
    > 
    </input>
    <input type ="text" className ='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder="Enter Description Here"
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}
    > 
    </input>
    <button className='bg-black text-white px-3 py-2 m-5  text-l font-bold rounded'>  Add Task</button>
    </form>
    <hr></hr>
    <div className='p-8 bg-slate-200'>
    <ul>
      {renderTask}
    </ul>
    </div>
    </>
  )
}

export default page

 