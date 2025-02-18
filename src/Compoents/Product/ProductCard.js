import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useCurrency } from './CurrencyContext'
import { CiHeart } from 'react-icons/ci';

export default function ProductCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {currency,currencyOptions}=useCurrency();
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
<div style={{width:"240px", height: "340px"}} className='d-flex flex-column position-relative p-1 m-2 shadow'>
   <div style={isHovered? {overflow:"hidden"}:{}}><Link key={props.data.id} to={`/productpage/${props.data.id}`} className='text-decoration-none text-black'> <img style={{height:"250px"}} className='w-100' src={isHovered?props.data.images[currentImageIndex]:props?.data?.images[0]} alt='img'/></Link></div>
   <div className="d-flex justify-content-center my-2">
        {isHovered && props.data.images.map((_, i) => (
          <div
            key={i}
            style={{ width: "5px",height: "5px",display: "inline-block",cursor: "pointer"}}
            className={`rounded mx-1 ${currentImageIndex === i ? "bg-danger" : "bg-dark-subtle"}`}
            onClick={() => setCurrentImageIndex(i)}
          />
        ))}
      </div>
      
      
      <div className='mt-auto'>{isHovered && <button><CiHeart/> Wishlist</button>}</div>
      <Link key={props.data.id} to={`/productpage/${props.data.id}`} className='text-decoration-none text-black'> 
    <div>{!isHovered && props?.data?.brand}</div>
    <div>{!isHovered && props?.data?.name}</div>
    <div className='mt-auto'>{isHovered && "Wishlist"}</div>
    <div className='mt-auto'>{isHovered && "Wishlist"}</div>
    <div className='mt-auto'>{isHovered && "Sizes"}</div>
   
    <div className='d-flex flex-row fs-6'> <div className='pe-1'>{currencyOptions[currency].symbol}{(props?.data?.price.discounted *currencyOptions[currency].rate).toFixed(0)} </div><div className='text-decoration-line-through text-secondary pe-1' >{currencyOptions[currency].symbol}{(props?.data?.price.original * currencyOptions[currency].rate).toFixed(0) }</div> <div className='text-danger-emphasis'> {currencyOptions[currency].symbol} {((props?.data?.price.original-props?.data?.price.discounted)* currencyOptions[currency].rate).toFixed(0)} OFF </div> </div>
    </Link>
    </div>
    </div>
  )
}