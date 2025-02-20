import React, { useState, useEffect, useContext } from "react";
import logo from "../../Assets/images/logo.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { categories, products } from "../../Data/Data";
import { LiaTimesSolid } from "react-icons/lia";
import { SlUser } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";


import { useSearch } from "../Product/SearchContext";
import { useCurrency } from "../Product/CurrencyContext";
import { useCart } from "../Product/CartContext";
import { AuthContext } from "../Product/AuthContext";
import { CiSearch } from "react-icons/ci";


export default function Header() {
  const { user } = useContext(AuthContext);
  const { currency, setCurrency, currencyOptions } = useCurrency();
  const { setProduct } = useSearch();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [menuOpen, setMenuOpen] = useState(false);

  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);

  const searchBtn = (products, search) => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    setProduct(searchBtn(products, search));
  }, [search, setProduct]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (search.trim()) {
      setSearchParams({ search: search });
    } else {
      navigate(searchParams);
    }
  };

  return (
    <header className="d-flex position-sticky bg-white align-items-center px-3 py-2 shadow top-0 z-2">

      <div className="d-flex me-auto">

        <Link to="/">
          <img style={{ height: "20px" }} src={logo} alt="Logo" />
        </Link>
      <button className="d-flex border-0 bg-transparent ms-3 align-items-center" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <LiaTimesSolid /> : <HiMiniBars3 />}
      </button>

      <div className={` ${menuOpen ? "d-flex flex-column position-absolute bg-white w-100 top-100 start-0 shadow p-3" : "d-none"} gap-3 align-items-center`}>
        <ul className="d-flex gap-4 list-unstyled p-0 m-0">
          {categories.map((category) => (
            <li key={category.id}>
              <Link className="fw-bolder text-black text-decoration-none" to={`/categorypage/${category.name}`} onClick={() => setMenuOpen(false)}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
  
      <div className="d-flex align-items-center">
      <div style={{backgroundColor:"#f5f5f6",height:"40px",width:"40px"}} className="p-1 ps-2"><CiSearch /></div>
          <input
            type="text"
            style={{backgroundColor:"#f5f5f6",height:"40px",width:"40vw",outline:"0"}}
            placeholder="Search for Products, Brands and more... "
            className="py-1 px-2 border-0"
            value={search}  
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className=" btn btn-danger px-2 py-1 mx-1" onClick={handleSearch}>
            Search
          </button>
        </div>



        <div className="d-flex align-items-center gap-3 ms-auto">
          <label className="m-0 ">Currency:</label>
          <select className="form-select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {Object.keys(currencyOptions).map((cur) => (
              <option key={cur} value={cur}>
                {cur} ({currencyOptions[cur].symbol})
              </option>
            ))}
          </select>

          <div className="d-flex flex-column text-center">
            <Link className="text-decoration-none text-black" to={user ? "/profile" : "/register"}>
            <SlUser />
              <div style={{fontSize:"12px",fontWeight:"bolder"}}>{user ? "Profile" : "Login"}</div>
            </Link>
          </div>

          <div className="d-flex flex-column text-center">
            <Link className="text-decoration-none text-black" to="/wishlist">
            <CiHeart />
              <div style={{fontSize:"12px",fontWeight:"bolder"}}>Wishlist</div>
            </Link>
          </div>

          <div className="d-flex flex-column text-center position-relative">
            <Link className="text-decoration-none text-black" to="/cartpage">
            <HiOutlineShoppingBag />
              <div style={{fontSize:"12px",fontWeight:"bolder"}}>Cart</div>
            </Link>
            {cart.length > 0 && <span className="badge bg-danger position-absolute translate-middle">{cart.length}</span>}
          </div>
        </div>
    </header>
  );
}
