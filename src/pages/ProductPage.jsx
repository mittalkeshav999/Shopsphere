import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Compoents/Layout/Header'
import Footer from '../Compoents/Layout/Footer'
import { products } from '../Data/Data'
import { useCart } from '../Compoents/Product/CartContext'
import { useWishlist } from '../Compoents/Product/WishlistContext'
import { Link } from 'react-router-dom'
import ProductCard from '../Compoents/Product/ProductCard'
import { GoStarFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { SlHeart } from "react-icons/sl";
import { IoStar } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { useCurrency } from '../Compoents/Product/CurrencyContext'
// import Wishlist from './Wishlist'



export default function ProductPage() {
  
  const [selectedColor,setSelectedColor]=useState(null);
  const [selectedSize,setSelectedSize]=useState(null);
  const {currency,currencyOptions }=useCurrency();
  const {addToCart,cartPopup } = useCart();
  const {addToWishlist,wishPopup}=useWishlist();
  const { id }=useParams();
  const output = products.filter((x) => x.id===id)
  const reviewColor=["Green","Green","Orange","Yellow","Red"];



  return (
    <div>
    <Header/>
    <div className="d-flex flex-md-row flex-column">
      <div className='w-md-50 w-100 h-100 mx-2 p-2 d-flex flex-wrap'>
      {
        output[0].images.map((img)=>(
          <img  className='w-50 p-2' src={img} alt='img' />) 
        )
      }
     
      </div>
      <div className='p-4 w-md-50 w-100'>
        <div className='fs-3'><b>{output[0]?.brand}</b></div>
        <div >{output[0]?.name}</div>
        <div style={{width:"180px"}}className='d-flex p-1 border border-1 border-dark-subtle'><div className=' d-flex border-end border-dark-subtle border-2 p-1'>{output[0]?.average_rating} <GoStarFill className='mt-1 ms-1' /></div> <div className='p-1 ms-1 d-flex '>{output[0].total_reviews} <div className='ms-1'> Ratings</div></div></div> <hr/>
        <div className='fs-4' > <b>{currencyOptions[currency].symbol} {Number((output[0]?.price.original * currencyOptions[currency].rate).toFixed(2))}</b> MRP <span className='text-decoration-line-through'>{currencyOptions[currency].symbol} {Number((output[0]?.price.discounted * currencyOptions[currency].rate).toFixed(2))}</span> <span className='text-warning' >({output[0].price.discount_percentage}% OFF)</span> </div>
        <div className=' fw-bolder text-success'>inclusive of all taxes</div>
         {output[0].colors.length>0 && <>
          <div className='fs-5 fw-bolder'>SELECT COLOR</div>
          <div>{output[0].colors.map((color,index)=>(<button key={index} onClick={()=> setSelectedColor(color.name)} style={{"background":`${color["hex"]}`,hover:"color.name"}}  className={`p-3 me-2 rounded-5 ${selectedColor===color.name ? "border border-3 border-danger" :<></>}`}></button>))}</div>
        </>}
        {output[0].sizes.length>0 && <><div className='d-flex'><div className='fs-5 fw-bold'> SELECT SIZE  </div> <div className='mx-4 m-1'> <Link className='text-decoration-underlinetion-' to='/'>SIZE CHART </Link></div></div>
        <div>{output[0].sizes.map((size)=>(<button disabled={size["available"]===false} onClick={()=> setSelectedSize(size.size)} style={{height:"50px",width:"auto",minWidth:"50px"}} className={`me-2 rounded-5 
         ${selectedSize === size.size ? "text-white bg-danger" : " bg-white"}`}>{size["size"]}</button>))}</div> </>}
     
        <div className="action-buttons">
        <button onClick={()=>{
          addToCart(output[0],selectedColor,selectedSize);
        }} className="w-50 m-3 p-2 text-white bg-danger rounded-2"><HiShoppingBag /> ADD TO BAG</button>
        <button onClick={()=>{
          addToWishlist(output[0])
        }} className="w-25 m-3 p-2 text-balck rounded-2"> <SlHeart /> WISHLIST</button>
      </div>
      <hr/>
      <div>
      <div className='fw-bolder mb-3'>DELIVERY OPTIONS <CiDeliveryTruck/></div>
      <input type='code' placeholder='Enter Your Pincode'/>
     <div><b>Policy:</b> {output[0].return_policy["policy"]}</div>
     <div> <b> Condition:</b> {output[0].return_policy["condition"]}</div>

      </div>
      <hr/>
      <div>
        <div className='fw-bolder'>PRODUCTS DETAILS</div>
        <div>{output[0].description}</div>
      </div>
      <hr/>
      <div>
        <div className='fw-bolder'>RATINGS</div>
        <div className='d-flex flex-column flex-sm-row mt-4 '>
          <div className='border-2 border-end border-dark-subtle pe-5 justify-content-sm-start text-center me-2'>
         <div className='fs-1'> {output[0].average_rating}<IoStar className='text-success fs-3 pb-2' /></div>
         <div>{output[0].total_reviews} Verified Buyers</div>
          </div>
          <div className='ms-5'>
          {Object.keys(output[0].rating_breakdown).reverse().map((i,index)=>(<div className='d-flex'>
          <div>{i}<IoStar className='pb-1' /></div>
          <div className=' bg-dark-su btle mt-2' style={{width:"200px", height:"8px"}}>
            <div style={{height:"8px",backgroundColor:reviewColor[index % reviewColor.length],width:`${(output[0].rating_breakdown[i]/output[0].total_reviews)*100}%`}}></div>
          </div>
          <div className='ms-2'>{output[0].rating_breakdown[i]}</div>
           
          </div>))}
          </div>
        </div>
      </div>
      <hr/>
      <div>
      <div className='fw-bolder'>Customer Reviews</div>
    
      {output[0].top_reviews.map((i)=>(<>
      <div className='d-flex'>
        <div style={{"fontSize":"12px"}} className='ps-1 bg-success text-white d-flex h-25'>{i["rating"]} <IoStar className='m-1'/></div>
        <div className='mx-2'>
            <div><b>{i["title"]}</b></div>
            <div>{i["content"]}</div>
            <div className='fw-lighter'><span className=' border-end border-dark-subtle border-1 me-2 pe-2'>{i["reviewer"]}</span><span>{i["date"]}</span></div>
        </div>
      </div>
      <hr/>
      </>))}
      </div>
      <div>Product Code: {output[0].id}</div>
      </div>
      </div>
      <div className="fw-bolder mx-4 my-2">SIMILAR PRODUCTS</div>
      <div className='d-flex flex-wrap justify-content-center'>
      {products.filter((product)=> ((product.category_id === output[0].category_id)&& product.id!==output[0].id)).slice(0,7).map((product)=>{
        return <Link className='text-decoration-none text-black' to={"/productpage/"+ product.id} ><ProductCard  key={product.id} data={product} /></Link>
      })}</div>
      <Footer/>
      {cartPopup && (
        <div className="modal fade show custom-popup" style={{ display: "block", paddingRight: "170px" }} role="dialog">
          <div className="modal-dialog modal-content text-center">
          <p> {output[0].name} updated in bag</p>
          </div>
        </div>
      )}
      {wishPopup && (
        <div className="modal fade show custom-popup" style={{ display: "block", paddingRight: "170px" }} role="dialog">
          <div className="modal-dialog modal-content text-center">
          <p> {output[0].name} updated in Wishlist</p>
          </div>
        </div>
      )}

    </div>
  )
}
