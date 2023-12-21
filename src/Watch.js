import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import datawatch from './Listwatch';
import Add from './Add';
import Searchwatch from './Searchwatch';


export default function Watch() {
    const [watchs,setwatchs]=useState(datawatch );
    const [filter,setFilter]=useState('');

  const  handelw=(newwatch)=>{
        const updatewatch=[...watchs,{...newwatch ,id:watchs.length+1}]
        setwatchs(updatewatch)   
    }
    const handelFilter=(newFilter)=>{
      setFilter(newFilter)
    }
    const filteredWat=watchs.filter((wat)=>wat.nomw.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    
    

  return (
    
    <div>
      <Searchwatch onsearch={handelFilter}/>
        {filteredWat.map((wt)=>(
           
          <div class="card" style={{width: '18rem'}} key={wt.id}>
          <img src={wt.imagew} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{wt.nomw}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{wt.pricew}</li>
            <li class="list-group-item">{wt.descriptionw}</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div> 
        
       
        )
        )}
        
       <Add onaddw={handelw}/> 
      
    </div>
    
  )
}
