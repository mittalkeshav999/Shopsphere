import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useCurrency } from './CurrencyContext'
import { CiHeart } from 'react-icons/ci';
import { useWishlist } from './WishlistContext';
import { GoStarFill } from "react-icons/go";


export default function ProductCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {currency,currencyOptions}=useCurrency();
  const {addToWishlist} = useWishlist();
  useEffect(() => {
    let interval;
    if (isHovered && props.data.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex(() => (currentImageIndex + 1) % props.data.images.length);
      }, 1000); 
    }
    return () => clearInterval(interval);
  }, [isHovered, props.data.images.length,currentImageIndex]);
  return (
    <div onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => {
      setIsHovered(false);
      setCurrentImageIndex(0);
    }}>
<div style={{width:"240px", height: "330px"}} className='d-flex flex-column position-relative m-2 shadow '>
   <div style={isHovered? {overflow:"hidden"}:{}}><Link key={props.data.id} to={`/productpage/${props.data.id}`} className='text-decoration-none text-black'> <img style={{height:"250px"}} className='w-100 img-fluid' src={isHovered?props.data.images[currentImageIndex]:props?.data?.images[0]} alt='img'/>
   {!isHovered && <div style={{bottom:"80px",fontSize:"0.7rem"}} className="position-absolute fw-bolder start-0 mb-2 ms-2 bg-opacity-50 bg-white shadow-sm px-2 py-1 rounded d-flex align-items-center">
        <span className="text-sm font-semibold me-1">{props.data.average_rating}</span>
        {/* <Star size={14} className="text-blue-500" fill="currentColor" /> */}
            <GoStarFill size={12} className='text-success' />
        <span className="text-sm text-gray-600  border-start ms-1 ps-1 border-black">{props.data.total_reviews}</span>
      </div>}
   </Link></div>
   <div className="d-flex justify-content-center my-1">
        {isHovered && props.data.images.map((_, i) => (
          <div
            key={i}
            style={{ width: "5px",height: "5px",display: "inline-block",cursor: "pointer"}}
            className={`rounded mx-1 ${currentImageIndex === i ? "bg-danger" : "bg-dark-subtle"}`}
            onClick={() => setCurrentImageIndex(i)}
          />
        ))}
      </div>
      
      
      <div className='mb-1 mx-2'>{isHovered && <button onClick={()=>addToWishlist(props.data)} className='bg-white text-decoration-none border border-1 border-dark-subtle rounded-1 w-100 m-auto '><CiHeart/> Wishlist</button>}</div>
      <Link key={props.data.id} to={`/productpage/${props.data.id}`} className='text-decoration-none text-black'> 
    <div className='ms-2'>{!isHovered && props?.data?.brand}</div>
    <div className='text-truncate ms-2' style={{fontSize:"0.83rem"}}>{!isHovered && props?.data?.name}</div>
    <div className='mt-auto ms-2'>{isHovered && `Sizes : ${props.data.sizes[0].size} - ${props.data.sizes[props.data.sizes.length-1].size}` } </div>
    <div className='d-flex flex-row fs-6 ms-2'> <div className='pe-1 fw-semibold'>{currencyOptions[currency].symbol}{(props?.data?.price.discounted *currencyOptions[currency].rate).toFixed(0)} </div><div className='text-decoration-line-through text-secondary px-1 pt-1' style={{fontSize:"0.8rem"}} >{currencyOptions[currency].symbol}{(props?.data?.price.original * currencyOptions[currency].rate).toFixed(0) }</div> <div className='text-danger-emphasis pt-1' style={{fontSize:"0.75rem"}}> ({currencyOptions[currency].symbol}{((props?.data?.price.original-props?.data?.price.discounted)* currencyOptions[currency].rate).toFixed(0)}OFF) </div> </div>
    </Link>
    </div>
    </div>
  )
}