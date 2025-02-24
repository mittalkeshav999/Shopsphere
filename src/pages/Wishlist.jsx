import React from 'react'
import { Link } from 'react-router-dom'
import "../Compoents/CommonStyle.css"
import Header from '../Compoents/Layout/Header'
import wish from "../Assets/images/wishlist.png"
import Footer from '../Compoents/Layout/Footer'
import { useWishlist } from '../Compoents/Product/WishlistContext'
// import WishlistCard from '../Compoents/Product/WishlistCard'
import { useTranslation } from '../Compoents/Translation/TranslationContext'
import ProductCard from '../Compoents/Product/ProductCard'

export default function Wishlist() {
  const {t}=useTranslation();
  const {wishlist}=useWishlist();
  const wishCard=true;

  return (<>
  <Header/>
  <div className='fs-4 mx-5'><b>{t("My")} {t("Wishlist")}</b> {wishlist.length} {t("items")}</div>
  {wishlist.length===0 ?  <div className='w300 d-flex flex-column mx-auto text-center my-2' >
      <h5>{t("YOUR WISHLIST IS EMPTY")}</h5>
      <p>{t("Add items that you like to your wishlist. Review them anytime and easily move them to bag.")}</p>
      <img src={wish} alt={t("img")}/>
      <button className=' border-1 rounded-1 border-primary bg-white p-2'> <Link className='text-decoration-none text-primary fw-bolder' to="/">{t("CONTINUE SHOPPING")}</Link> </button>
    </div> : null}
      <div className='d-flex flex-wrap m-auto justify-content-center gap-4'>
    {wishlist.map((item) => (
        <div key={item.id}>
       <ProductCard wishCard={wishCard} data={item} />
       <div className='d-flex gap-2 justify-content-center'>
          </div>
        </div>
      ))}
      </div>
      
    <Footer/>


   


    </>
  )
}
