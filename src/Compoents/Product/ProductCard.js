import React, { useState, useEffect } from 'react';
import "../CommonStyle.css"
import { Link } from 'react-router-dom';
import { useCurrency } from './CurrencyContext';
import { FaTimes } from 'react-icons/fa';
import { useCart } from './CartContext';
import { FaHeart } from 'react-icons/fa';
import { useWishlist } from './WishlistContext';
import { GoStarFill } from "react-icons/go";
import { useTranslation } from '../Translation/TranslationContext';

export default function ProductCard(props) {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { currency, currencyOptions } = useCurrency();
  const [selectedColor,setSelectedColor]=useState(null);
        const [selectedSize,setSelectedSize]=useState(null);
        const {addToCart}=useCart();
  const { addToWishlist, wishlist,removeFromWishlist } = useWishlist();
  const isPresent = wishlist.some(prod => prod.id === props.data.id);

  useEffect(() => {
    let interval;
    if (isHovered && props.data.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % props.data.images.length);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isHovered, props.data.images.length]);

  return (<>
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      <div
        style={{ width: "220px", height: "360px" }}
        className={`d-flex flex-column position-relative m-2 ${isHovered && !props.wishCard ? "shadow" : ""}`}
      >
        <div style={{ overflow: "hidden", position: "relative", width: "100%", height: "280px" }}>
          <Link key={props.data.id} to={`/productpage/${props.data.id}`} className="text-decoration-none text-black">
            <FaTimes onClick={(e)=>{e.preventDefault();removeFromWishlist(props.data)}} className=' position-absolute end-0 m-2 bg-opacity-50 text-dark-emphasis bg-white border rounded-5' />
            <div className={ !props.wishCard && `slider translate-${currentImageIndex}`}
              // style={{
              //   display: "flex",
              //   transition: "transform 0.3s ease-in-out",
              //   transform: `translateX(-${currentImageIndex * 100}%)`,
              //   width: "100%",
              // }}
            >
              { props.data.images.map((img, index) => (
                <img key={index} src={img} alt={t("Image")} style={{ width: "220px", height: "280px", flexShrink: 0 }} />
              ))}
            </div>

            {!isHovered && !props.wishCard && (
              <div
                style={{ fontSize: "0.7rem" }}
                className={`position-absolute fw-bolder bottom-0 start-0 mb-2 ms-2 bg-opacity-50 bg-white ${props.wishCard ? "" : "shadow"} px-2 py-1 rounded d-flex align-items-center`}
              >
                <span className="text-sm font-semibold me-1">{props.data.average_rating}</span>
                <GoStarFill size={12} className="text-success" />
                <span className="text-sm text-gray-600 border-start ms-1 ps-1 border-black">
                   {props.data.total_reviews}
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Dots Navigation */}
        <div className="d-flex justify-content-center my-1">
          {isHovered && !props.wishCard &&
            props.data.images.map((_, i) => (
              <div
                key={i}
                style={{ width: "5px", height: "5px", display: "inline-block", cursor: "pointer" }}
                className={`rounded mx-1 ${currentImageIndex === i ? "bg-danger" : "bg-dark-subtle"}`}
                onClick={() => setCurrentImageIndex(i)}
              />
            ))}
        </div>

        <div className="mb-1 mx-2">
          {isHovered && !props.wishCard && (
            <button
              onClick={() => addToWishlist(props.data)}
              className="bg-white text-decoration-none border border-1 border-dark-subtle rounded-1 w-100 m-auto"
            >
              <FaHeart className={isPresent ? "text-success" : "text-secondary"} />
              {`${isPresent ? t("Wishlisted") : t("Wishlist")}`}
            </button>
          )}
        </div>

        <Link key={props.data.id} to={`/productpage/${props.data.id}`} className="text-decoration-none text-black">
          <div className="ms-2">{!isHovered && !props.wishCard && t(props?.data?.brand)}</div>
          <div className="text-truncate ms-2" style={{ fontSize: "0.83rem" }}>
            {(!isHovered || props.wishCard) && t(props?.data?.name)}
          </div>
          <div className="mt-auto ms-2">
            {isHovered && !props.wishCard && `${t("Sizes")}: ${props.data.sizes[0].size} - ${props.data.sizes[props.data.sizes.length - 1].size}`}
          </div>
          <div className="d-flex flex-row fs-6 ms-2">
            <div className="pe-1 fw-semibold">
              {currencyOptions[currency].symbol}
              {(props?.data?.price.discounted * currencyOptions[currency].rate).toFixed(0)}
            </div>
            <div className="text-decoration-line-through text-secondary px-1 pt-1" style={{ fontSize: "0.8rem" }}>
              {currencyOptions[currency].symbol}
              {(props?.data?.price.original * currencyOptions[currency].rate).toFixed(0)}
            </div>
            <div className="text-danger-emphasis pt-1" style={{ fontSize: "0.75rem" }}>
              ({currencyOptions[currency].symbol}
              {((props?.data?.price.original - props?.data?.price.discounted) * currencyOptions[currency].rate).toFixed(0)}
              {t("OFF")})
            </div>
          </div>
        </Link>
       {props.wishCard && <button className='bg-white border text-danger fw-bolder p-2' onClick={(e) =>{e.preventDefault(); 
        setIsOpen(true)
        }}>{t("MOVE TO BAG")} </button>}
      </div>
    </div>

         <div className="text-center mt-3">

{isOpen && (
  <div className="modal show d-block" tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
         <img style={{width:"50px"}} src={props.data.images[0]}  alt={t("productImage")}/>
         <div className='d-flex flex-column'><div className='justify-content-start mx-1'>{t(props.data.name)}</div><div className='d-flex flex-row px-2 fs-6'> <div className='pe-1 fw-semibold'>{currencyOptions[currency].symbol}{(props?.data?.price.discounted *currencyOptions[currency].rate).toFixed(0)} </div><div className='text-decoration-line-through text-secondary px-1 pt-1' style={{fontSize:"0.8rem"}} >{currencyOptions[currency].symbol}{(props?.data?.price.original * currencyOptions[currency].rate).toFixed(0) }</div> <div className='text-danger-emphasis pt-1' style={{fontSize:"0.75rem"}}> ({currencyOptions[currency].symbol}{((props?.data?.price.original-props?.data?.price.discounted)* currencyOptions[currency].rate).toFixed(0)}{t("OFF")}) </div> </div></div>
          <button type="button" className="btn-close" onClick={() => setIsOpen(false)}></button>
        </div>

        <div className="modal-body text-center">
          <div className="d-flex flex-column justify-content-center gap-2">

           {props.data.colors.length>0 && <>
                    <div className='fs-5 fw-bolder'>{t("SELECT")} {t("COLOR")}</div>
                    <div>{props.data.colors.map((color,index)=>(<button key={index} onClick={()=> setSelectedColor(color.name)} style={{"background":`${color["hex"]}`,hover:"color.name"}}  className={`p-3 me-2 rounded-5 ${selectedColor===color.name ? "border border-3 border-danger" :<></>}`}></button>))}</div>
                  </>}
                  {props.data.sizes.length>0 && <><div className='fs-5 m-auto fw-bold'> {t("SELECT")} {t("SIZE")}  </div>
                  <div>{props.data.sizes.map((size)=>(<button  key={size.size}
          disabled={size["available"] === false}
          onMouseEnter={() => setIsHovered(size.size)} 
          onMouseLeave={() => setIsHovered(null)}
          onClick={() => setSelectedSize(size.size)}
          style={{ height: "50px", width: "auto", minWidth: "50px" }}
          className={`me-2 rounded-5 
            ${selectedSize === size.size ? "text-danger border-danger" : ""}
            ${isHovered === size.size ? "border-danger" : ""} bg-white`}>{t(size["size"])}</button>))}</div> </>} 
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-danger w-100" onClick={(!selectedColor || !selectedSize) ?()=>setIsOpen(false):() => {addToCart(props.data,selectedColor,selectedSize);setIsOpen(false);removeFromWishlist(props.data)}}>
            {t("Done")}
          </button>
        </div>
      </div>
    </div>
  </div>
)}
{isOpen && <div className="modal-backdrop fade show" onClick={() => setIsOpen(false)}></div>}
</div>

</>
  );
}
