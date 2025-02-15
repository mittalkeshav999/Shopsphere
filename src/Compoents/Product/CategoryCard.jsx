import React from 'react'
export default function CategoryCard(props) {
  return (
    <div style={{height:"300px",width:"200px"}} className='bg-secondary position-relative m-1'>
    <div>
        <img style={{height:"200px",width:"183px"}} className='overflow-hidden justify-content-center align-items-center m-2' src={props.value.thumbnail_image} alt='img'/>
    </div>
    <div className='text-center text-white'>{props.value.name}</div>
    <div className='text-center text-white fw-bolder'>{props.value.discount_range.min_discount} - {props.value.discount_range.max_discount}% OFF</div>
    <div className='text-center text-white '>Shop Now</div>
    </div>
  )
}
