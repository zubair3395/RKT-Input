import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { savePost } from '../Features/PostSlices';
import { nanoid } from '@reduxjs/toolkit';

export default function Inputs() {
    const [title, setTitle] = useState("");
    const [description, setDescription]= useState("")
    
    const dispatch = useDispatch();
    const handlePost = ()=>{
        if(title && description){
            dispatch(savePost({
                id:  nanoid(),
                title: title,
                description: description
               }))
        }
      
       setDescription("")
       setTitle("")
    }
  return (
    <div className='container'>
     <strong>Enter Post Title: </strong> <input value={title} type="text" className='form-control my-3' onChange={(e)=> setTitle(e.target.value)}/>
     <strong>Enter Post Description: </strong> <input value={description} type="text" className='form-control my-3' onChange={(e)=> setDescription(e.target.value)}/>
      <button className='btn btn-outline-info' onClick={handlePost}>Post Save</button>
    </div>
  )
}
