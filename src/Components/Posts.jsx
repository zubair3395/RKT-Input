import React from 'react'
import { useSelector } from 'react-redux'

export default function Posts() {
    const posts= useSelector((state)=> state.post.data)
  return (
    <>
    {
         posts.map((element)=>
         <div className="row">
         <div className="col-md">
             <h3>{element.title}</h3>
             <p>{element.description}</p>
         </div>
     </div>
         )
    }
   
    
    </>
  )
}
