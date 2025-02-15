import React, { useContext } from 'react'
import { AuthContext } from '../Compoents/Product/AuthContext'
import { useCart } from '../Compoents/Product/CartContext';
import { useCurrency } from '../Compoents/Product/CurrencyContext';
import CartHead from '../Compoents/Layout/CartHead';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
    const {currency,currencyOptions}=useCurrency();
    const { cart } = useCart();
    const {user}= useContext(AuthContext);
    const totalPrice = Number((cart.reduce((sum, item) => sum + item.price.discounted * item.quantity, 0) * currencyOptions[currency].rate).toFixed(2));
    const totalDiscount = Number((cart.reduce((sum, item) => sum + item.price.original * item.quantity, 0) * currencyOptions[currency].rate).toFixed(2));
    const MRP = Number((totalPrice + totalDiscount).toFixed(2));
        
    if(!user) return <div className='text-center'>Please <Link to="/register"> Log </Link>in First</div>
  return (
    <div>
    <CartHead/>
      <div className='w-100 d-flex flex-column flex-md-row'>
      <div className='w-md-50 w-100'>
        <span></span>
        <span></span>
        SELECT ADDRESS
       {user.Addresses?.map((address)=>(
        <div className='border border-black m-3 p-3 shadow d-flex flex-row'>
        <input name='address' type='radio' />
        <div className='d-flex flex-column'>
        <div>{user.Name}</div>
        <div>{address.BuildingNo},{address.Street},{address.City},{address.State},</div><div>Pin Code: {address.PinCode},</div><div> Mobile: {user.Phone}</div>
        </div></div> )
       )}
       </div>
       <div className='w-md-50 w-100  border border-1 my-2 mx-2 border-dark-subtle'>
        <div className='m-2 fw-bolder text-dark-emphasis'>PRICE DETAILS ({cart.length} items)</div>                                    
        <div className='d-flex justify-content-between m-2'><div>Total MRP</div><div>{currencyOptions[currency].symbol}{MRP}</div></div>
        <div className='d-flex justify-content-between m-2'><div>Discount on MRP</div><div className='text-success'>-{currencyOptions[currency].symbol}{totalDiscount}</div></div>
        <div className='d-flex justify-content-between m-2'><div>Coupon Discount</div><div>Apply Coupon</div></div>
        <div className='d-flex justify-content-between m-2'><div>Platform Fee</div><div>{currencyOptions[currency].symbol}20</div></div>
        <div className='d-flex justify-content-between m-2'><div>Shipping Fee</div><div className='text-success'>FREE</div></div>
        <hr/>
        <div className='d-flex justify-content-between m-2'><div>Total Amount </div><div>{currencyOptions[currency].symbol}{totalPrice}</div></div>
        <button className=' f-bolder m-3 btn btn-danger'>Place Order</button>
      </div>
      </div>
      <div></div>
    </div>
  )
}
