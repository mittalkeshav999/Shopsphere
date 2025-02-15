import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/images/logo.png"
import { useCurrency } from "../Product/CurrencyContext";

export default function CartHead() {
     const { currency, setCurrency, currencyOptions } = useCurrency();
  return (
    <div className='d-flex position-sticky z-1 top-0 bg-white justify-content-between shadow p-3'>
      <div>
        <Link to="/">
          <img style={{ height: "25px" }} src={logo} alt="Logo" />
        </Link>
      </div>
      <div className='d-md-flex d-none'><div>BAG</div>--------<div>ADDRESS</div>--------<div>PAYMENT</div></div>
      <div className='d-flex' ><label >Currency: </label>
          <select className="m-auto form-select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {Object.keys(currencyOptions).map((cur) => (
              <option key={cur} value={cur}>
                {cur} ({currencyOptions[cur].symbol})
              </option>
            ))}
          </select></div>
    </div>
  )
}
