import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useCurrency } from './CurrencyContext';
import { FaPlus,FaMinus,FaTimes } from "react-icons/fa";
import { useTranslation } from '../Translation/TranslationContext';

export default function CartCard({item}) {
  const{t}=useTranslation();
     const {currency,currencyOptions}=useCurrency();
     const { removeFromCart,incrementQuantity,decrementQuantity } = useCart();
  return (
    <div className='border border-1 border-dark-subtle d-flex w-100 m-2'>
       <div >
       <Link to={`/productpage/${item.id}`} className='text-decoration-none text-black'>  <img className='m-2 h160 w120' src={item.images[0]} alt={t("img")}/></Link> 
       </div>
       <div>
       
            <div className='fw-bolder'>{t(item.brand)}</div>
            <div>{t(item.name)}</div>
            {t("Quantity")}: 
            <button
                onClick={() => decrementQuantity(item)}
                className=" border-0 bg-white text-black px-2 py-1 mx-1"
              >
                <FaMinus/>
              </button>
              {item.quantity}
              <button
                onClick={() => incrementQuantity(item)}
                className="border-0 bg-white text-black px-2 py-1 mx-1"
              >
                <FaPlus />

              </button>
           
            <div>{t("Color")}: {t(item.selectedColor)}</div>
            <div>{t("Size")}: {t(item.selectedSize)}</div>
            <div  className='d-flex flex-row p-1 fs9'> <div>{currencyOptions[currency].symbol}{Number((item.price.discounted * currencyOptions[currency].rate * item.quantity).toFixed(2))} </div><div className='text-decoration-line-through text-secondary ps-2' >{currencyOptions[currency].symbol}{Number((item.price.original * currencyOptions[currency].rate * item.quantity).toFixed(2)) }</div> <div className='text-danger-emphasis ps-2 d-sm-block d-none'> {currencyOptions[currency].symbol} {Number((item.price.original-item.price.discounted) * currencyOptions[currency].rate * item.quantity)} {t("OFF")} </div> </div>
            <div>{t(item.return_policy.policy)}</div>
            <div>{t("Delivery")} {t("in")} 2 {t("days")}</div>
       </div>
       <div className='m-2 ms-auto'><button className='bg-white border-0' onClick={() => removeFromCart(item)}><FaTimes/>  </button></div>
    </div>
  )
}
