import React, { useEffect, useState } from 'react'
import c1 from "../../Assets/images/c1.png"
import c2 from "../../Assets/images/c2.png"
import c3 from "../../Assets/images/c3.png"
import c4 from "../../Assets/images/c4.png"
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
 
const images = [c1,c2,c3,c4]



export default function Corousel() {
    const [index,setIndex]=useState(0);
    const Left=()=>{
        return setIndex(index===0 ? images.length-1 : index-1)
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
    <div className="carousel-container text-center">
    <div className='d-flex'>
      <FaArrowLeft className='m-auto' onClick={Left} />
      <img className='w' style={{"width":"92%"}} src={images[index]} alt='carousel'/>
      <FaArrowRight className='m-auto' onClick={Right} />
    </div>
    <div className="d-flex justify-content-center mt-3">
        {images.map((_, i) => (
          <div
            key={i}
            style={{ width: "5px",height: "5px",display: "inline-block",cursor: "pointer"}}
            className={`rounded mx-1 ${index === i ? "bg-dark scale-125" : "bg-dark-subtle"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
