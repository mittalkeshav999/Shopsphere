import React, { useState, useEffect, useContext } from "react";
import "../CommonStyle.css"
import Button from "./Button";
import logo from "../../Assets/images/logo.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { categories, products } from "../../Data/Data";
import { LiaTimesSolid } from "react-icons/lia";
import { SlUser } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";
import LanguageSelector from "../Translation/LanguageSelector";
import { useSearch } from "../Product/SearchContext";
import { useCurrency } from "../Product/CurrencyContext";
import { useCart } from "../Product/CartContext";
import { AuthContext } from "../Product/AuthContext";
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "../Translation/TranslationContext";

export default function Header() {
  const { t } = useTranslation(); // Get translation function
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
    <header className="row position-sticky bg-white align-items-center px-3 py-2 shadow top-0 z-2 w-100 m-0">
      <div className="d-flex me-auto col-5 col-sm-2 order-1">
        <Link to="/">
          <img className="h20" src={logo} alt={t("Logo")} />
        </Link>

        <Button onClick={() => setMenuOpen(!menuOpen)}
          className="d-flex border-0 bg-transparent ms-3 align-items-center"
          text={menuOpen ? <LiaTimesSolid /> : <HiMiniBars3 />} />

        <div className={`${menuOpen ? "d-flex flex-column position-absolute bg-white w-100 top-100 start-0 shadow p-3" : "d-none"} align-items-center`}>
          <ul className="d-flex gap-1 gap-md-5 gap-sm-3 list-unstyled p-0 m-0">
            {categories.map((category) => (
              <li key={category.id}>
                <Link className="fw-bolder text-black text-decoration-none fs9" to={`/categorypage/${category.name}`} onClick={() => setMenuOpen(false)}>
                  {t(category.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="d-flex align-items-center text-center col-12 col-sm-5 order-3 order-sm-2">
        <div className="p-1 ps-2 h40 w40 bgSearch">
          <CiSearch />
        </div>
        <input
          type="text"
          placeholder={`${t("Search")} ${t("for")} ${t("Products")} , ${t("Brands")} ${t("and")} ${t("more")}...`}
          className="py-1 px-2 border-0 col-sm-10 col-8 bgSearch h40 outline0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => handleSearch} text={t("Search")} btn={"danger"} />
      </div>

      <div className="d-flex align-items-center gap-2 justify-content-end ms-auto col-5 col-sm-5 order-2 order-sm-3">
        <div className="m-0 d-none d-lg-block"> <LanguageSelector /></div>
        <label className="m-0 d-none d-lg-block">{t("Currency")}:</label>
        <select className="form-select d-none d-lg-block" value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {Object.keys(currencyOptions).map((cur) => (
            <option key={cur} value={cur}>
              {cur} ({currencyOptions[cur].symbol})
            </option>
          ))}
        </select>

        <div className="d-flex flex-column text-center">
          <Link className="text-decoration-none text-black" to={user ? "/profile" : "/register"}>
            <SlUser />
            <div className="fs7 fw-bolder">{user ? t("Profile") : t("Login")}</div>
          </Link>
        </div>

        <div className="d-flex flex-column text-center">
          <Link className="text-decoration-none text-black" to="/wishlist">
            <CiHeart />
            <div className="fs7 fw-bolder">{t("Wishlist")}</div>
          </Link>
        </div>

        <div className="d-flex flex-column text-center position-relative">
          <Link className="text-decoration-none text-black" to="/cartpage">
            <HiOutlineShoppingBag />
            <div className="fs7 fw-bolder">{t("Cart")}</div>
          </Link>
          {cart.length > 0 && <span className="badge bg-danger position-absolute translate-middle">{cart.length}</span>}
        </div>
      </div>
    </header>
  );
}
