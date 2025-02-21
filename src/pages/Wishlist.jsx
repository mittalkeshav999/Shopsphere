import React from 'react'
import { Link } from 'react-router-dom'
import "./Wishlist.css"
import Header from '../Compoents/Layout/Header'
import wish from "../Assets/images/wishlist.png"
import Footer from '../Compoents/Layout/Footer'
import { useWishlist } from '../Compoents/Product/WishlistContext'
import WishlistCard from '../Compoents/Product/WishlistCard'

export default function Wishlist() {

  const {wishlist}=useWishlist();

  return (<>
  <Header/>
  <div className='fs-4 mx-5'><b>My Wishlist</b> {wishlist.length} items</div>
  {wishlist.length===0 ?  <div className='cart_box' >
      <h5>YOUR WISHLIST IS EMPTY</h5>
      <p>Add items that you like to your wishlist. Review them anytime and easily move them to bag.</p>
      <img src={wish} alt='img'/>
      <button className=' border-1 rounded-1 border-danger bg-white'> <Link className='text-decoration-none text-danger fw-bolder' to="/">CONTINUE SHOPPING</Link> </button>
    </div> : null}
      <div className='d-flex flex-wrap m-auto justify-content-center gap-4'>
    {wishlist.map((item) => (
        <div key={item.id}>
       {/* <Link className='text-decoration-none text-black' to={`/productpage/${item.id}`}>  */}
       <WishlistCard data={item} />
       {/* </Link> */}
       <div className='d-flex gap-2 justify-content-center'>
          </div>
        </div>
        
      ))}
      </div>
      
    <Footer/>


   


    </>
  )
}
