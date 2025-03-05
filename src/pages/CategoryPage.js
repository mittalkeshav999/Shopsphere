import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import { categories } from '../Data/Data';
import ProductCard from '../Compoents/Product/ProductCard';
import Header from '../Compoents/Layout/Header';
import Footer from '../Compoents/Layout/Footer';
import { useSearch } from '../Compoents/Product/SearchContext';
import Sidebar from '../Compoents/Layout/Sidebar';
import { useTranslation } from '../Compoents/Translation/TranslationContext';
import "../Compoents/CommonStyle.css"
// import Button from '../Compoents/Layout/Button';

export default function CategoryPage() {
 const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { product } = useSearch();
  const { name } = useParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const noOfRow = parseInt(searchParams.get("rows")) || 7;
  const discount = searchParams.get("discount");
  const start = (currentPage - 1) * noOfRow;
  const end = start + noOfRow;

  const category = categories.find((x) => x.name === name);
  const categoryProducts = product.filter((p) => p.category_id === category?.id) || [];
  const handlePriceChange = (newRange) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: `${newRange[0]}-${newRange[1]}`,
    }));
  };

  const initialFilters = {
    colors: searchParams.get("colors")?.split(',') || [],
    brands: searchParams.get("brands")?.split(',') || [],
    sortBy: searchParams.get("sortBy") || "",
    priceRange: searchParams.get("priceRange") || "0-Infinity",
    discount: searchParams.get("discount") || "",
  };
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    const currentParams = Object.fromEntries(searchParams.entries());
    const newParams = { ...currentParams, page: currentPage, rows: noOfRow };
    if (filters.colors.length) newParams.colors = filters.colors.join(",");
    if (filters.brands.length) newParams.brands = filters.brands.join(",");
    if (filters.sortBy) newParams.sortBy = filters.sortBy;
    if (filters.priceRange) newParams.priceRange = filters.priceRange;
    if (filters.discount) newParams.discount = filters.discount;
    setSearchParams(newParams);
  }, [filters, searchParams, setSearchParams, discount, currentPage, noOfRow]);
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);

  const filteredProducts = categoryProducts.filter((product) => ((product.price.discounted > minPrice) && (product.price.discounted < maxPrice) && (!filters.discount || product.price.discount_percentage >= parseInt(filters.discount)))).filter((product) =>
    (filters.colors.length ? filters.colors.some(color => product.colors.map((p) => p.name).includes(color)) : true) &&
    (filters.brands.length ? filters.brands.includes(product.brand) : true)
  );
  const noOfPages = Math.ceil(filteredProducts.length / noOfRow);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sortBy === "price-asc") return a.price.discounted - b.price.discounted;
    if (filters.sortBy === "price-desc") return b.price.discounted - a.price.discounted;
    if (filters.sortBy === "stock-asc") return a.availability.stock_quantity - b.availability.stock_quantity;
    if (filters.sortBy === "stock-desc") return b.availability.stock_quantity - a.availability.stock_quantity;
    if (filters.sortBy === "rating-asc") return a.average_rating - b.average_rating;
    if (filters.sortBy === "rating-desc") return b.average_rating - a.average_rating;
    return 0;
  });

  const handleColorChange = (color) => {
    setFilters((prevFilters) => {
      const updatedColors = prevFilters.colors.includes(color)
        ? prevFilters.colors.filter((c) => c !== color)
        : [...prevFilters.colors, color];
      return { ...prevFilters, colors: updatedColors };
    });
  };
  const handleBrandChange = (brand) => {
    setFilters((prevFilters) => {
      const updatedBrands = prevFilters.brands.includes(brand)
        ? prevFilters.brands.filter((b) => b !== brand)
        : [...prevFilters.brands, brand];
      return { ...prevFilters, brands: updatedBrands };
    });

  };
  const handleDiscountChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      discount: e.target.value,
    }));
  };
  
  const updatePagination = (page, rows) => {
    navigate(`?page=${page}&rows=${rows}`);
  };
  const goToFirstPage = () => updatePagination(1, noOfRow);
  const prevPage = () => updatePagination(currentPage - 1, noOfRow);
  const nextPage = () => updatePagination(currentPage + 1, noOfRow);

  const removeAllFilters = () => {
    setFilters({
      colors: [],
      brands: [],
      sortBy: "",
      priceRange: "0-Infinity",
      discount: "",
    });
  }
  return (
    <>
      <Header />
      <div className='d-flex'>
        <div className='d-none d-md-block'>
          <Sidebar categoryProducts={categoryProducts} filters={filters} handleColorChange={handleColorChange} handleBrandChange={handleBrandChange} handleDiscountChange={handleDiscountChange} handlePriceChange={handlePriceChange} priceRange={[minPrice, maxPrice]} removeAllFilters={removeAllFilters} />
        </div>
        <div className='mx-auto'>
          <div className="text-center fw-bold">{t("You are viewing")}: {t(name)}</div>
          <div className='d-flex my-2'>
            <div className='ms-5'>{filters.brands.map((brand) =>
              <span className='fontSize8 border mx-1 rounded-5 px-2 py-1 align-items-center text-dark-emphasis'>{t(brand)} <FaTimes className='cursorPointer' onClick={() => handleBrandChange(brand)} /></span>
            )}</div>
            <div className='ms-5'>{filters.colors.map((color) =>
              <span className="fontSize8 border mx-1 rounded-5 px-2 py-1 align-items-center text-dark-emphasis">{t(color)} <FaTimes className='cursorPointer' onClick={() => handleColorChange(color)} /></span>
            )}</div>
            <div className='ms-5'>
              {/* <span className='border mx-1 rounded-5 px-2 py-1 align-items-center'>{filters.discount}  <FaTimes onClick={setFilters(() => {filters.discount: e.target.value })} /></span> */}
              {filters.discount && filters.discount > 0 && (
                <span className="fontSize8 border mx-1 rounded-5 px-2 py-1 d-flex align-items-center text-dark-emphasis">
                  {filters.discount}% {t("And")} {t("Above")}
                  <FaTimes className='cursorPointer' onClick={() => setFilters(prev => ({ ...prev, discount: '' }))} />
                </span>
              )}
            </div>
          </div>
          <div className="filters d-flex justify-content-end mx-4">
            <div className='mx-2 my-auto'>{t("Sort by")}: </div>
            <select className='form-select w200' value={filters.sortBy} onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}>
              <option value="">{t("Recommended")}</option>
              <option value="price-asc">{t("Price: Low to High")}</option>
              <option value="price-desc">{t("Price: High to Low")}</option>
              <option value="stock-asc">{t("Stock: Low to High")}</option>
              <option value="stock-desc">{t("Stock: High to Low")}</option>
              <option value="rating-asc">{t("Rating: Low to High")}</option>
              <option value="rating-desc">{t("Rating: High to Low")}</option>
            </select>
          </div>

          <div className='d-flex flex-wrap m-auto justify-content-center'>
            {sortedProducts.slice(start, end).map((product) => (<>
              <ProductCard data={product} />
            </>
            ))}
          </div>

          {!(noOfRow <= 0) &&
            <div className='d-flex justify-content-center p-2'>
              <button disabled={currentPage === 1} onClick={goToFirstPage} className={`border-0 bg-white fw-bolder ${currentPage === 1 ? "text-dark-emphasis" : "text-dark"}`} >
                <FaAngleDoubleLeft /> {t("Page")} 1
              </button>
              <button disabled={currentPage === 1} className={`bg-white m-2 rounded-2 px-3 py-2 fw-bolder  ${currentPage === 1 ? "text-dark-emphasis, border" : "text-dark,border-dark-subtle"} `} onClick={prevPage}><FaAngleLeft /> {t("Previous")}</button>
              <div className='text-dark-emphasis mx-5 my-auto'>{t("Page")} {currentPage} {t("of")} {noOfPages}</div>
              <button disabled={currentPage === noOfPages} className={`next bg-white m-2 rounded-2 px-3 py-2 fw-bolder  ${currentPage === noOfPages ? "text-dark-emphasis, border" : "text-dark,border-dark-subtle"} `} onClick={nextPage}>{t("Next")} <FaAngleRight /></button>
            </div>}

        </div>
      </div>
      <Footer />
    </>
  );
}
