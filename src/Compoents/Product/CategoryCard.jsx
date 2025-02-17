import React from 'react'
export default function CategoryCard(props) {
  return (
    <div style={{width:"200px"}} className='d-flex flex-column bg-secondary m-1'>
    <img style={{height:"250px",width:"190px"}} className='m-auto p-1' src={props.value.thumbnail_image} alt='img'/>
    <div className='text-center text-white'>{props.value.name}</div>
    <div className='text-center text-white fw-bolder'>{props.value.discount_range.min_discount} - {props.value.discount_range.max_discount}% OFF</div>
    <div className='text-center text-white '>Shop Now</div>
    </div>
  )
}
