import React from 'react'
import { Link } from 'react-router-dom';
import { useCurrency } from './CurrencyContext'
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';

export default function WishlistCard(props) {
  const {currency,currencyOptions}=useCurrency();
  const { addToCart } = useCart();
  const {removeFromWishlist}= useWishlist();
  

  return (
    <div>
<div style={{width:"240px", height: "340px"}} className='d-flex flex-column position-relative m-2 shadow'>
<Link key={props.data.id} to={`/productpage/${props.data.id}`} className='text-decoration-none text-black'> <img style={{height:"260px"}} className='w-100' src={props?.data?.images[0]} alt='img'/>
   <div className="d-flex justify-content-center my-2">
      </div> 
    <div className='text-truncate' style={{fontSize:"0.83rem"}}>{props?.data?.name}</div>
    <div className='d-flex flex-row fs-6'> <div className='pe-1 fw-semibold'>{currencyOptions[currency].symbol}{(props?.data?.price.discounted *currencyOptions[currency].rate).toFixed(0)} </div><div className='text-decoration-line-through text-secondary px-1 pt-1' style={{fontSize:"0.8rem"}} >{currencyOptions[currency].symbol}{(props?.data?.price.original * currencyOptions[currency].rate).toFixed(0) }</div> <div className='text-danger-emphasis pt-1' style={{fontSize:"0.75rem"}}> ({currencyOptions[currency].symbol}{((props?.data?.price.original-props?.data?.price.discounted)* currencyOptions[currency].rate).toFixed(0)}OFF) </div> </div>
    </Link>
    <button className='bg-white rounded-2' onClick={() => removeFromWishlist(props.data.id)}>Remove</button>
          <button className='bg-white rounded-2' onClick={()=>{
            addToCart(props.data);
            removeFromWishlist(props.data.id);
          } }>Add to cart</button>
    </div>
    </div>
  )
}