import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useCurrency } from './CurrencyContext';
import { FaPlus,FaMinus,FaTimes } from "react-icons/fa";

export default function CartCard({item}) {
     const {currency,currencyOptions}=useCurrency();
     const { removeFromCart,incrementQuantity,decrementQuantity } = useCart();
  return (
    <div className='border border-1 border-dark-subtle d-flex w-100 m-2'>
       <div >
       <Link to={`/productpage/${item.id}`} className='text-decoration-none text-black'>  <img className='m-2' style={{"height":"160px", "width":"120px"}} src={item.images[0]} alt='img'/></Link> 
       </div>
       <div>
       
            <div className='fw-bolder'>{item.brand}</div>
            <div>{item.name}</div>
            <div className='text-secondary'>Sold by : ABC </div>
            Quantity: 
            <button
                onClick={() => decrementQuantity(item)}
                className=" border-0 bg-white text-black px-2 py-1 mx-1"
              >
                <FaMinus/>
              </button>
              {item.quantity}
              <button
                onClick={() => incrementQuantity(item)}
                className="border-0 bg-white text-black px-2 py-1 mx-1"
              >
                <FaPlus />

              </button>
           
            <div>Color: {item.selectedColor}</div>
            <div>Size: {item.selectedSize}</div>
            <div className='d-flex flex-row p-1'> <div>{currencyOptions[currency].symbol}{Number((item.price.discounted * currencyOptions[currency].rate * item.quantity).toFixed(2))} </div><div className='text-decoration-line-through text-secondary ps-2' >{currencyOptions[currency].symbol}{Number((item.price.original * currencyOptions[currency].rate * item.quantity).toFixed(2)) }</div> <div className='text-danger-emphasis ps-2'> {currencyOptions[currency].symbol} {Number((item.price.original-item.price.discounted) * currencyOptions[currency].rate * item.quantity)} OFF </div> </div>
            <div>{item.return_policy.policy}</div>
            <div>Deliveryin 2 days</div>
       </div>
       <div className='m-2 ms-auto'><button className='bg-white border-0' onClick={() => removeFromCart(item)}><FaTimes/>  </button></div>
    </div>
  )
}
