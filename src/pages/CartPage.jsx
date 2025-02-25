import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Compoents/Layout/Header'
import carts from "../Assets/images/cart.png"
import Footer from '../Compoents/Layout/Footer'
import { useCart } from '../Compoents/Product/CartContext'
import CartCard from '../Compoents/Product/CartCard'
import { useCurrency } from '../Compoents/Product/CurrencyContext'
import CartHead from '../Compoents/Layout/CartHead'
import { FaBookmark } from "react-icons/fa";
import { useTranslation } from '../Compoents/Translation/TranslationContext'
import Button from '../Compoents/Layout/Button'

export default function CartPage() {
  const { t } = useTranslation();
  const { currency, currencyOptions } = useCurrency();
  const { cart } = useCart();
  const totalPrice = Number((cart.reduce((sum, item) => sum + item.price.discounted * item.quantity, 0) * currencyOptions[currency].rate).toFixed(2));
  const totalDiscount = Number((cart.reduce((sum, item) => sum + item.price.original * item.quantity, 0) * currencyOptions[currency].rate).toFixed(2));
  const MRP = Number((totalPrice + totalDiscount).toFixed(2));

  return (<>
    {cart.length === 0 ? <div>
      <Header />
      <div className='w300 d-flex flex-column mx-auto my-1 text-center' >
        <img src={carts} alt={t("img")} />
        <h5>{t("Hey, it feels so light!")}</h5>
        <p>{t("There is nothing in your bag. Let's add some items.")}</p>
        <Link to="/wishlist"><Button className=' border-1 rounded-1 border-danger bg-white text-decoration-none text-danger fw-bolder w-100 py-2'
          text={t("ADD ITEMS FROM WISHLIST")} /></Link>
      </div>
      <Footer />
    </div> :
      <>
        <CartHead />
        <div className='d-flex flex-column flex-md-row row  m-2 p-2 justify-content-around'>
          <div className='col-md-6 col-12'>
            {cart.map((item) => (
              <div key={item.id}> <CartCard item={item} /></div>
            ))}
            <div className='col-12 border border-1 border-dark-subtle m-2 p-2 fw-bolder'><Link className='text-decoration-none text-black' to="/wishlist"><FaBookmark /> {t("Add more from Wishlist")} </Link></div>
          </div>
          <div className='col-md-4 col-12 m-2 p-2 border border-1 border-dark-subtle position-relative'>
            <div className='m-2'>{t("PRICE")} {t("DETAILS")} ({cart.length} {t("items")})</div>
            <div className='d-flex justify-content-between m-2'><div>{t("Total")} {t("MRP")}</div><div>{currencyOptions[currency].symbol}{MRP}</div></div>
            <div className='d-flex justify-content-between m-2'><div>{t("Discount")} {t("on")} {t("MRP")}</div><div>{currencyOptions[currency].symbol}{totalDiscount}</div></div>
            <div className='d-flex justify-content-between m-2'><div>{t("Coupon")} {t("Discount")}</div><div>{t("Apply Coupon")}</div></div>
            <div className='d-flex justify-content-between m-2'><div>{t("Platform")} {t("Fee")}</div><div>{currencyOptions[currency].symbol}20</div></div>
            <div className='d-flex justify-content-between m-2'><div>{t("Shipping")} {t("Fee")}</div><div>{t("FREE")}</div></div>
            <hr />
            <div className='d-flex justify-content-between m-2'><div>{t("Total")} {t("Amount")} </div><div>{currencyOptions[currency].symbol}{totalPrice}</div></div>
            <Link to="/checkout">  <Button btn="danger" text={`${t("Place")} ${t("Order")}`} /></Link>
          </div>
        </div>
      </>}
  </>

  )
}
