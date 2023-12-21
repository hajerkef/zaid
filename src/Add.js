import React, { useState } from 'react'
import Swal from 'sweetalert2'

import datawatch from './Listwatch'


export default function Add({onaddw}) {
    const [newWatch,setNewWatch]=useState(
        {
            id:'',
            nomw:'',
            pricew:'',
            descriptionw:'',
            imagew:'',
        }
    )
    const pbwat=()=>{
        if(newWatch.nomw==''||newWatch.pricew==''||newWatch.descriptionw==''||newWatch.imagew==''){
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
        onaddw(newWatch)
        setNewWatch({
            
                id:'',
                nomw:'',
                pricew:'',
                descriptionw:'',
                imagew:'',
            
    })

    }
  


    


    



  return (
    <div>
      <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"value={newWatch.nomw} onChange={(e)=>setNewWatch({...newWatch, nomw: e.target.value})}></textarea>
  <label for="floatingTextarea">namewatch</label>
</div>
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={newWatch.pricew} onChange={(e)=>setNewWatch({...newWatch, pricew: e.target.value})}></textarea>
  <label for="floatingTextarea">pricewatch</label>
</div>
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={newWatch.descriptionw} onChange={(e)=>setNewWatch({...newWatch, descriptionw: e.target.value})}></textarea>
  <label for="floatingTextarea">descriptionwatch</label>
</div>
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"value={newWatch.imagew} onChange={(e)=>setNewWatch({...newWatch, imagew: e.target.value})}></textarea>
  <label for="floatingTextarea">imagewat</label>
</div>
<button type="button" class="btn" onClick={pbwat}>addwatch</button>
    </div>
    
  )
}
