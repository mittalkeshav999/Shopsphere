import React from 'react'
import p1 from "../../Assets/images/p1.png"

export default function Card(props) {
  return (
    <div style={{width:"180px", height: "340px"}} className='d-flex flex-column justify-content-center align-items-center position-relative m-2 pe-auto border border-2 border-black '>
    
      <img style={{width:"150px", height: "260px"}} className='p-1' src= {props?.data?.images[0]} alt='img'/>
      <img className='my-2 mx-auto position-relative border border-2 border-black w-75' src={p1} alt='img' />
      <div className='text-black text-center'>{props.data.name}</div>
      <div className='fw-bolder text-black'>MIN. {props.data.price.discount_percentage}% OFF</div>
    </div>
  )
}
