import React, { useEffect, useState } from 'react'
import c1 from "../../Assets/images/c1.png"
import c2 from "../../Assets/images/c2.png"
import c3 from "../../Assets/images/c3.png"
import c4 from "../../Assets/images/c4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'

 
const images = [c1,c2,c3,c4]



export default function Corousel() {
    const [index,setIndex]=useState(0);
    const Left=()=>{
        return setIndex(index==0 ? images.length-1 : index-1)
        }
    const Right=()=>{
        return setIndex((index+1)%images.length)
    }    
    useEffect(()=>{
        const interval= setInterval(()=>{
            Right();
        },3000)
        return ()=>{
            clearInterval(interval);
        }    
    })

  return (
    <div className='d-flex'>

      <button className='m-auto' onClick={Left}><FontAwesomeIcon icon={faLeftLong}/> </button>

      <img className='w' style={{"width":"92%"}} src={images[index]} alt='img'/>
      
      <button className='m-auto' onClick={Right} ><FontAwesomeIcon icon={faRightLong}/> </button>
    </div>
  )
}
