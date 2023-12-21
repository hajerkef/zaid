import React from "react"

export default function Searchwatch({onsearch}) {
    
  return (
    <div className='mb-3'>
  <input type="text" 
   placeholder='search' 
   onChange={(e)=>onsearch(e.target.value)} />
  
</div>
    
  )

  }