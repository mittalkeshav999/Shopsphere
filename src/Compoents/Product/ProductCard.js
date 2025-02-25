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
import Button from '../Layout/Button';

export default function ProductCard({data,wishCard}) {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { currency, currencyOptions } = useCurrency();
  const [selectedColor,setSelectedColor]=useState(null);
        const [selectedSize,setSelectedSize]=useState(null);
        const {addToCart}=useCart();
  const { addToWishlist, wishlist,removeFromWishlist } = useWishlist();
  const isPresent = wishlist.some(prod => prod.id === data.id);

  useEffect(() => {
    let interval;
    if (isHovered && data.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % data.images.length);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isHovered, data.images.length]);

  return (<>
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      <div className={`d-flex flex-column position-relative m-2 h360 w220 ${isHovered && !wishCard ? "shadow" : ""}`}>
        <div className='overflow-hidden position-relative w-100 h280' >
          <Link key={data.id} to={`/productpage/${data.id}`} className="text-decoration-none text-black">
            <FaTimes onClick={(e)=>{e.preventDefault();removeFromWishlist(data)}} className=' position-absolute end-0 m-2 bg-opacity-50 text-dark-emphasis bg-white border rounded-5' />
            <div className={ !wishCard && `slider translate-${currentImageIndex}`}>
              { data.images.map((img, index) => (
                <img key={index} src={img} alt={t("Image")} className='w220 h280 f_s0'  />
              ))}
            </div>

            {!isHovered && !wishCard && (
              <div
                className={`position-absolute fw-bolder fs7 bottom-0 start-0 mb-2 ms-2 bg-opacity-50 bg-white ${wishCard ? "" : "shadow"} px-2 py-1 rounded d-flex align-items-center`}
              >
                <span className="text-sm font-semibold me-1 ">{data.average_rating}</span>
                <GoStarFill size={12} className="text-success" />
                <span className="text-sm text-gray-600 border-start ms-1 ps-1 border-black">
                   {data.total_reviews}
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Dots Navigation */}
        <div className="d-flex justify-content-center my-1">
          {isHovered && !wishCard &&
            data.images.map((_, i) => (
              <div
                key={i}
                className={`rounded w5 h5 d-inline-block cursorPointer mx-1 ${currentImageIndex === i ? "bg-danger" : "bg-dark-subtle"}`}
                onClick={() => setCurrentImageIndex(i)}
              />
            ))}
        </div>

        <div className="mb-1 mx-2">
          {(isHovered && !wishCard) &&
            <Button onClick={()=>addToWishlist(data)}
                    icon={<FaHeart className={`${isPresent ? "text-success" : "text-secondary"} mx-1`} />}
                    className="bg-white text-decoration-none border border-1 border-dark-subtle rounded-1 w-100 m-auto"
                    text={`${isPresent ? t("Wishlisted") : t("Wishlist")}`} />
          }
        </div>

        <Link key={data.id} to={`/productpage/${data.id}`} className="text-decoration-none text-black">
          <div className="ms-2">{!isHovered && !wishCard && t(data?.brand)}</div>
          <div className="text-truncate ms-2 fontSize8">
            {(!isHovered || wishCard) && t(data?.name)}
          </div>
          <div className="mt-auto ms-2">
            {isHovered && !wishCard && `${t("Sizes")}: ${data.sizes[0].size} - ${data.sizes[data.sizes.length - 1].size}`}
          </div>
          <div className="d-flex flex-row fs-6 ms-2">
            <div className="pe-1 fw-semibold">
              {currencyOptions[currency].symbol}
              {(data?.price.discounted * currencyOptions[currency].rate).toFixed(0)}
            </div>
            <div className="text-decoration-line-through text-secondary px-1 pt-1 fontSize8">
              {currencyOptions[currency].symbol}
              {(data?.price.original * currencyOptions[currency].rate).toFixed(0)}
            </div>
            <div className="text-danger-emphasis pt-1 fs7">
              ({currencyOptions[currency].symbol}
              {((data?.price.original - data?.price.discounted) * currencyOptions[currency].rate).toFixed(0)}
              {t("OFF")})
            </div>
          </div>
        </Link>

       {wishCard && 
      <Button onClick={(e) =>{e.preventDefault(); setIsOpen(true)}}
              text={t("MOVE TO BAG")}
              className='bg-white border border-1 text-danger fw-bolder p-2' />
        }
      </div>
    </div>

         <div className="text-center mt-3">

{isOpen && (
  <div className="modal show d-block" tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
         <img className='w50' src={data.images[0]}  alt={t("productImage")}/>
         <div className='d-flex flex-column'><div className='justify-content-start mx-1'>{t(data.name)}</div><div className='d-flex flex-row px-2 fs-6'> <div className='pe-1 fw-semibold'>{currencyOptions[currency].symbol}{(data?.price.discounted *currencyOptions[currency].rate).toFixed(0)} </div><div className='text-decoration-line-through text-secondary px-1 pt-1 fontSize8' >{currencyOptions[currency].symbol}{(data?.price.original * currencyOptions[currency].rate).toFixed(0) }</div> <div className='text-danger-emphasis pt-1 fs7' > ({currencyOptions[currency].symbol}{((data?.price.original-data?.price.discounted)* currencyOptions[currency].rate).toFixed(0)}{t("OFF")}) </div> </div></div>
          <Button className='btn-close ms-auto' onClick={()=>setIsOpen(false)} />
        </div>

        <div className="modal-body text-center">
          <div className="d-flex flex-column justify-content-center gap-2">
           {data.colors.length>0 && <>
                    <div className='fs-5 fw-bolder'>{t("SELECT")} {t("COLOR")}</div>
                    <div>{data.colors.map((color,index)=>(
                      <Button key={index}
                              onClick={()=> setSelectedColor(color.name)}
                              style={{"background":`${color["hex"]}`}}
                              className={`px-3 py-3 rounded-5 ${selectedColor===color.name ? "border border-3 border-danger" : ""}`}
                               />
                      ))}</div>
                  </>}
                  {data.sizes.length>0 && <><div className='fs-5 m-auto fw-bold'> {t("SELECT")} {t("SIZE")}  </div>
                  <div> {data.sizes.map((size) => 
                           <Button key={size.size}
                           text={t(size["size"])} 
                           disabled={size["available"] === false}
                            onMouseEnter={() => setIsHovered(size.size)}
                            onMouseLeave={() => setIsHovered(null)} 
                            onClick={() => setSelectedSize(size.size)}
                            className={`me-2 rounded-5 bg-white border h50 minW50
                              ${selectedSize === size.size ? " border-danger border-2" : ""}
                              ${isHovered === size.size ? "border-danger " : ""} `}/>
                        )}</div> </>} 
          </div>
        </div>
        <div className="modal-footer">
       
          <Button btn="danger"
                  text={t("Done")}
                  className='w-100'
                  onClick={(!selectedColor || !selectedSize) ?()=>setIsOpen(false):() => {addToCart(data,selectedColor,selectedSize);setIsOpen(false);removeFromWishlist(data)}} />
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
