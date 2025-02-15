import React from 'react'
import { Link } from 'react-router-dom'
import "./Wishlist.css"
import Header from '../Compoents/Layout/Header'
import wish from "../Assets/images/wishlist.png"
import Footer from '../Compoents/Layout/Footer'
import { useWishlist } from '../Compoents/Product/WishlistContext'
import { useCart } from '../Compoents/Product/CartContext'
import ProductCard from '../Compoents/Product/ProductCard'

export default function Wishlist() {
    const { addToCart } = useCart();
  const {wishlist,removeFromWishlist}=useWishlist();
  return (<>
  <Header/>
  {wishlist.length===0 ?  <div className='cart_box' >
      <h5>YOUR WISHLIST IS EMPTY</h5>
      <p>Add items that you like to your wishlist. Review them anytime and easily move them to bag.</p>
      <img src={wish} alt='img'/>
      <button className=' border-1 rounded-1 border-danger bg-white'> <Link className='text-decoration-none text-danger fw-bolder' to="/">CONTINUE SHOPPING</Link> </button>
    </div> : null}
      <div className='d-flex flex-wrap m-auto justify-content-center gap-4'>
    {wishlist.map((item) => (
        <div key={item.id}>
       <Link className='text-decoration-none text-black' to={`/productpage/${item.id}`}> <ProductCard data={item}/></Link><div className='d-flex gap-2 justify-content-center'>
          <button className='bg-white rounded-2' onClick={() => removeFromWishlist(item.id)}>Remove</button>
          <button className='bg-white rounded-2' onClick={()=>{
            addToCart(item);
            removeFromWishlist(item.id);
          } }>Add to cart</button></div>
        </div>
      ))}
      </div>
    <Footer/>
    </>
  )
}
