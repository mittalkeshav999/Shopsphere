import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { categories } from '../Data/Data';
import ProductCard from '../Compoents/Product/ProductCard';
import Header from '../Compoents/Layout/Header';
import Footer from '../Compoents/Layout/Footer';
import { useSearch } from '../Compoents/Product/SearchContext';
import Sidebar from '../Compoents/Layout/Sidebar';

export default function CategoryPage() {

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { product } = useSearch();
  const { name } = useParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const noOfRow = parseInt(searchParams.get("rows")) || 2;
  const discount = searchParams.get("discount");
  const pageSize = (noOfRow * 4);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

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
    const newParams = { page: currentPage, rows: noOfRow };
    if (filters.colors.length) newParams.colors = filters.colors.join(",");
    if (filters.brands.length) newParams.brands = filters.brands.join(",");
    if (filters.sortBy) newParams.sortBy = filters.sortBy;
    if (filters.priceRange) newParams.priceRange = filters.priceRange;
    if(filters.discount) newParams.discount=filters.discount;
    setSearchParams(newParams);
  }, [filters, setSearchParams,discount, currentPage, noOfRow]);

  const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);

  const filteredProducts = categoryProducts.filter((product) => ((product.price.discounted > minPrice) && (product.price.discounted < maxPrice)&& (!filters.discount || product.price.discount_percentage >= parseInt(filters.discount)))).filter((product) =>
    (filters.colors.length ? filters.colors.some(color => product.colors.map((p) => p.name).includes(color)) : true) &&
    (filters.brands.length ? filters.brands.includes(product.brand) : true)
  );
  const noOfPages = Math.ceil(filteredProducts.length / pageSize);

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

  return (
    <>
      <Header />
      <div className='d-flex'>
        <div className='d-none d-md-block'>
          <Sidebar categoryProducts={categoryProducts} filters={filters} handleColorChange={handleColorChange} handleBrandChange={handleBrandChange} handleDiscountChange={handleDiscountChange} handlePriceChange={handlePriceChange} priceRange={[minPrice,maxPrice]} />
        </div>
        <div className='mx-auto'>
          <div className="text-center fw-bold">You are viewing: {name}</div>
          <div className="filters d-flex justify-content-end mx-4">
            <div className='mx-2 my-auto'>Sort by: </div>
            <select className='form-select' style={{width:"200px"}} value={filters.sortBy} onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}>
              <option value="">None</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="stock-asc">Stock: Low to High</option>
              <option value="stock-desc">Stock: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="rating-desc">Rating: High to Low</option>
            </select>
          </div>

          {(noOfRow <= 0) ? (<div className='d-flex flex-wrap m-auto justify-content-center'>
            {sortedProducts.slice(start, end).map((product) => (
              <Link key={product.id} to={`/productpage/${product.id}`} className='text-decoration-none text-black'>
                <ProductCard data={product} />
              </Link>
            ))}
          </div>) : (<>
            <div className='d-flex flex-wrap m-auto justify-content-center'>
              {sortedProducts.slice(start, end).map((product) => (
                <Link key={product.id} to={`/productpage/${product.id}`} className='text-decoration-none text-black'>
                  <ProductCard data={product} />
                </Link>
              ))}
            </div>
            <div className='d-flex justify-content-center p-2'>
              <button disabled={currentPage === 1} onClick={goToFirstPage} className='text-decoration-none border-0 bg-white'>
                <FaAngleDoubleLeft /> First
              </button>
              <button disabled={currentPage === 1} onClick={prevPage}><FaAngleLeft /> Previous</button>
              <div>Page {currentPage} of {noOfPages}</div>
              <button disabled={currentPage === noOfPages} onClick={nextPage}>Next <FaAngleRight /></button>
            </div></>)}

        </div>
      </div>
      <Footer />
    </>
  );
}
