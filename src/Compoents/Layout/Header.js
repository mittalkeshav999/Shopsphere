import React, { useState, useEffect, useContext } from "react";
import logo from "../../Assets/images/logo.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { categories, products } from "../../Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faHeart, faPerson, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSearch } from "../Product/SearchContext";
import { useCurrency } from "../Product/CurrencyContext";
import { useCart } from "../Product/CartContext";
import { AuthContext } from "../Product/AuthContext";

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
    <header className="d-flex position-sticky bg-white align-items-center px-3 py-2 shadow top-0 z-1 justify-content-between">

      <div>
        <Link to="/">
          <img style={{ height: "20px" }} src={logo} alt="Logo" />
        </Link>
      </div>
      <button className="d-lg-none border-0 bg-transparent" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
      </button>

      <div className={`d-lg-flex ${menuOpen ? "d-flex flex-column position-absolute bg-white w-100 top-100 start-0 shadow p-3" : "d-none"} gap-3 align-items-center`}>
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

  
      <div className="d-flex flex-wrap align-items-center justify-content-end gap-2">
        <div className="d-flex">
          <input
            type="text"
            placeholder="Search for Products, Brands and more... "
            className="py-1 px-2 border border-black rounded-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-danger text-white border-0 rounded-2 px-2 py-1 mx-1" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <label className="m-0">Currency:</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {Object.keys(currencyOptions).map((cur) => (
              <option key={cur} value={cur}>
                {cur} ({currencyOptions[cur].symbol})
              </option>
            ))}
          </select>

          <div className="d-flex flex-column text-center">
            <Link className="text-decoration-none text-black" to={user ? "/profile" : "/register"}>
              <FontAwesomeIcon icon={faPerson} />
              <div>{user ? "Profile" : "Login"}</div>
            </Link>
          </div>

          <div className="d-flex flex-column text-center">
            <Link className="text-decoration-none text-black" to="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
              <div>Wishlist</div>
            </Link>
          </div>

          <div className="d-flex flex-column text-center position-relative">
            <Link className="text-decoration-none text-black" to="/cartpage">
              <FontAwesomeIcon icon={faBagShopping} />
              <div>Cart</div>
            </Link>
            {cart.length > 0 && <span className="badge bg-danger position-absolute translate-middle">{cart.length}</span>}
          </div>
        </div>
      </div>
    </header>
  );
}
