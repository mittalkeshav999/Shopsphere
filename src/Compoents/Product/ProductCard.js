import React from 'react'
import { useCurrency } from './CurrencyContext'

export default function ProductCard(props) {
  const {currency,currencyOptions}=useCurrency();
  return (
    <div>
<div style={{width:"240px", height: "340px"}} className='d-flex flex-column position-relative p-1 m-2 shadow'>
    <img style={{ height: "260px"}} className='w-100' src={props?.data?.images[0]} alt='img'/>
    <div>{props?.data?.brand}</div>
    <div>{props?.data?.name}</div>
    <div className='d-flex flex-row fs-6'> <div className='pe-1'>{currencyOptions[currency].symbol}{(props?.data?.price.discounted *currencyOptions[currency].rate).toFixed(0)} </div><div className='text-decoration-line-through text-secondary pe-1' >{currencyOptions[currency].symbol}{(props?.data?.price.original * currencyOptions[currency].rate).toFixed(0) }</div> <div className='text-danger-emphasis'> {currencyOptions[currency].symbol} {((props?.data?.price.original-props?.data?.price.discounted)* currencyOptions[currency].rate).toFixed(0)} OFF </div> </div>
    </div>
    </div>
  )
}