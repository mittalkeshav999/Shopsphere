import React from 'react'
import { Link } from 'react-router-dom'
import "./Wishlist.css"
import Header from '../Compoents/Layout/Header'
import carts from "../Assets/images/cart.png"
import Footer from '../Compoents/Layout/Footer'
import { useCart } from '../Compoents/Product/CartContext'
import CartCard from '../Compoents/Product/CartCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useCurrency } from '../Compoents/Product/CurrencyContext'
import CartHead from '../Compoents/Layout/CartHead'


export default function CartPage() {
  const {currency,currencyOptions}=useCurrency();
  const { cart } = useCart();
  const totalPrice = Number((cart.reduce((sum, item) => sum + item.price.discounted * item.quantity, 0) * currencyOptions[currency].rate).toFixed(2));
  const totalDiscount = Number((cart.reduce((sum, item) => sum + item.price.original * item.quantity, 0) * currencyOptions[currency].rate).toFixed(2));
  const MRP = Number((totalPrice + totalDiscount).toFixed(2));


  return (<>

{cart.length === 0 ? <div>
      <Header/>
    <div className='cart_box' >
    <img src={carts} alt='img'/>
      <h5>Hey, it feels so light!</h5>
      <p>There is nothing in your bag.Let's add some items.</p>
      
      <button className='border border-1 rounded-1 border-danger bg-white w-100' > <Link className='text-decoration-none fw-bolder text-danger' to="/wishlist">ADD ITEMS FROM WISHLIST</Link> </button>
    </div>
    <Footer/>
    </div> : null}
<CartHead/>
    <div className='d-flex flex-column flex-md-row m-2 p-2'>
    <div className='w-md-50 w-100 mx-2'>
    {cart.map((item) => (
        <div key={item.id}> <CartCard item={item} /></div>
      ))}
      <div className='border border-1 border-dark-subtle my-2 mx-2 p-2 w-100 fw-bolder'><Link className='text-decoration-none text-black' to="/wishlist"><FontAwesomeIcon icon={faBookmark} /> Add more from Wishlist </Link></div>
      </div>
      <div className='w-md-50 w-100 mx-3 border border-1 border-dark-subtle position-relative'>
        <div className='m-2'>PRICE DETAILS ({cart.length} items)</div>                                    
        <div className='d-flex justify-content-between m-2'><div>Total MRP</div><div>{currencyOptions[currency].symbol}{MRP}</div></div>
        <div className='d-flex justify-content-between m-2'><div>discount on MRP</div><div>{currencyOptions[currency].symbol}{totalDiscount}</div></div>
        <div className='d-flex justify-content-between m-2'><div>Coupon Discount</div><div>Apply Coupon</div></div>
        <div className='d-flex justify-content-between m-2'><div>Platform Fee</div><div>{currencyOptions[currency].symbol}20</div></div>
        <div className='d-flex justify-content-between m-2'><div>Shipping Fee</div><div>FREE</div></div>
        <hr/>
        <div className='d-flex justify-content-between m-2'><div>Total Amount </div><div>{currencyOptions[currency].symbol}{totalPrice}</div></div>
        <button className=' f-bolder m-3 btn btn-danger'><Link className='text-decoration-none text-white' to="/checkout">Place Order</Link></button>
      </div>
      </div>
    </>
  ) 
}
