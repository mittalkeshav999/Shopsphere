import React, { useContext } from 'react'
import { AuthContext } from '../Compoents/Product/AuthContext'
import { useCart } from '../Compoents/Product/CartContext';
import { useCurrency } from '../Compoents/Product/CurrencyContext';
import CartHead from '../Compoents/Layout/CartHead';
import { Link } from 'react-router-dom';
import { useTranslation } from '../Compoents/Translation/TranslationContext';
import Button from '../Compoents/Layout/Button';

export default function CheckoutPage() {
  const {t}=useTranslation();
    const {currency,currencyOptions}=useCurrency();
    const { cart } = useCart();
    const {user}= useContext(AuthContext);
    const totalPrice = Number((cart.reduce((sum, item) => sum + item.price.discounted * item.quantity, 0) * currencyOptions[currency].rate).toFixed(2));
    const totalDiscount = Number((cart.reduce((sum, item) => sum + item.price.original * item.quantity, 0) * currencyOptions[currency].rate).toFixed(2));
    const MRP = Number((totalPrice + totalDiscount).toFixed(2));
        
    if(!user) return <div className='text-center'>{t("Please")} <Link to="/register"> {t("Log in")} </Link> {t("First")}</div>
  return (
    <div>
    <CartHead/>
      <div className=' d-flex flex-column flex-md-row'>
      <div className='col-md-6 col-12'>
        <span className='mx-3'>{t("SELECT")} {t("ADDRESS")}</span>
        
       {user.Addresses?.map((address)=>(
        <div className='border border-black m-3 p-3 shadow d-flex flex-row'>
        <input name='address' type='radio' />
        <div className='d-flex flex-column'>
        <div>{t(user.Name)}</div>
        <div>{t(address.BuildingNo)},{t(address.Street)},{t(address.City)},{t(address.State)},</div><div>{t("Pin Code")}: {address.PinCode},</div><div> {t("Mobile")}: {user.Phone}</div>
        </div></div> )
       )}
       </div>
       <div className='col-md-6 col-12 border border-1 border-dark-subtle'>
        <div className='m-2 fw-bolder text-dark-emphasis'>{t("PRICE")} {t("DETAILS")} ({cart.length} {t("items")})</div>                                    
        <div className='d-flex justify-content-between m-2'><div>{t("Total")} {t("MRP")}</div><div>{currencyOptions[currency].symbol}{MRP}</div></div>
        <div className='d-flex justify-content-between m-2'><div>{t("Discount")} {t("on")} {t("MRP")}</div><div className='text-success'>-{currencyOptions[currency].symbol}{totalDiscount}</div></div>
        <div className='d-flex justify-content-between m-2'><div>{t("Coupon")} {t("Discount")}</div><div>{t("Apply")} {t("Coupon")}</div></div>
        <div className='d-flex justify-content-between m-2'><div>{t("Platform")} {t("Fee")}</div><div>{currencyOptions[currency].symbol}20</div></div>
        <div className='d-flex justify-content-between m-2'><div>{t("Shipping")} {t("Fee")}</div><div className='text-success'>{t("FREE")}</div></div>
        <hr/>
        <div className='d-flex justify-content-between m-2'><div>{t("Total")} {t("Amount")} </div><div>{currencyOptions[currency].symbol}{totalPrice}</div></div>
        <Button text={`${t("Place")} ${t("Order")}`} btn='danger'/>
      </div>
      </div>
      <div></div>
    </div>
  )
}
