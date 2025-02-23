import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Compoents/Layout/Header'
import Footer from '../Compoents/Layout/Footer'
import { products } from '../Data/Data'
import { useCart } from '../Compoents/Product/CartContext'
import { useWishlist } from '../Compoents/Product/WishlistContext'
import { Link } from 'react-router-dom'
import ProductCard from '../Compoents/Product/ProductCard'
import { GoStarFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { useCurrency } from '../Compoents/Product/CurrencyContext'
import ProductImageModal from '../Compoents/Product/ProductImageModal'
import { useTranslation } from '../Compoents/Translation/TranslationContext'


export default function ProductPage() {
  const {t} = useTranslation();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { currency, currencyOptions } = useCurrency();
  const { addToCart } = useCart();
  const { addToWishlist, wishlist } = useWishlist();
  const { id } = useParams();
  const output = products.find((x) => x.id === id)
  const reviewColor = ["Green", "Green", "Orange", "Yellow", "Red"];
  const isPresent = wishlist.some(prod => prod.id === output.id)
  const [isHovered, setIsHovered] = useState(false);


  if (output.length === 0) {
    return (<>
      <Header />
      <div>{t("Product")} {t("not")} {t("found")}</div>
      <Footer />
    </>
    )
  }


  return (
    <div>
      <Header />

      <div className="d-flex flex-md-row flex-column">
        <div style={{ top: "28px" }} className='w-100 h-100 mx-2 p-2 d-flex z-1 d-none d-md-block flex-wrap position-sticky'>
          <ProductImageModal prod={output} />
        </div>

        <div id="productCarousel" className="carousel slide d-block d-md-none h-50" data-bs-ride="carousel">
        <div className="carousel-inner">
          {output?.images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={image} className="d-block w-100" alt={`${t("Slide")} ${index}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">{t("Previous")}</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">{t("Next")}</span>
        </button>
      </div>




        <div className='p-4 w-md-50 w-100'>
          <div className='fs-3'><b>{t(output?.brand)}</b></div>
          <div >{t(output?.name)}</div>
          <div style={{ width: "180px" }} className='d-flex p-1 border border-1 border-dark-subtle'><div className=' d-flex border-end border-dark-subtle border-2 p-1'>{output?.average_rating} <GoStarFill className='mt-1 ms-1' /></div> <div className='p-1 ms-1 d-flex '>{output.total_reviews} <div className='ms-1'> {t("Ratings")}</div></div></div> <hr />
          <div className='fs-4' > <b>{currencyOptions[currency].symbol} {Number((output?.price.original * currencyOptions[currency].rate).toFixed(2))}</b> {t("MRP")} <span className='text-decoration-line-through'>{currencyOptions[currency].symbol} {Number((output?.price.discounted * currencyOptions[currency].rate).toFixed(2))}</span> <span className='text-warning' >({output.price.discount_percentage}% {t("OFF")})</span> </div>
          <div className=' fw-bolder text-success'>{t("inclusive")} {t("of")} {t("all")} {t("taxes")}</div>
          {output.colors.length > 0 && <>
            <div className='fs-5 fw-bolder'>{t("SELECT")} {t("COLOR")}</div>
            <div>{output.colors.map((color, index) => (<button key={index} onClick={() => setSelectedColor(color.name)} style={{ "background": `${color["hex"]}`, hover: "color.name" }} className={`p-3 me-2 rounded-5 ${selectedColor === color.name ? "border border-3 border-danger" : <></>}`}></button>))}</div>
          </>}
          {output.sizes.length > 0 && (
  <>
    <div className='d-flex'>
      <div className='fs-5 fw-bold'> {t("SELECT")} {t("SIZE")} </div>
      <div className='mx-4 m-1'>
        <Link className='text-decoration-underline' to='#'>{t("SIZE")} {t("CHART")}</Link>
      </div>
    </div>

    <div>
      {output.sizes.map((size) => (
        <button
          key={size.size}
          disabled={size["available"] === false}
          onMouseEnter={() => setIsHovered(size.size)} // Track hovered size
          onMouseLeave={() => setIsHovered(null)} // Reset when not hovered
          onClick={() => setSelectedSize(size.size)}
          style={{ height: "50px", width: "auto", minWidth: "50px" }}
          className={`me-2 rounded-5 
            ${selectedSize === size.size ? "text-danger border-danger" : ""}
            ${isHovered === size.size ? "border-danger" : ""} bg-white`}
        >
          {t(size["size"])}
        </button>
      ))}
    </div>
  </>
)}

          <div className="action-buttons">
            <button onClick={(e) => {
              e.preventDefault();
              addToCart(output, selectedColor, selectedSize);
            }} className="w-50 m-3 p-2 btn btn-danger"><HiShoppingBag /> {t("ADD")} {t("TO")} {t("BAG")}</button>
            <button onClick={() => {
              addToWishlist(output)
            }} className={`w-25 m-3 p-2  btn btn-light ${isPresent ? " text-white bg-secondary " : ""}`}> <FaHeart className={` ${isPresent ? "text-danger" : "text-secondary"}`} /> {`${isPresent ? t("WISHLISTED") : t("WISHLIST")}`}</button>
          </div>
          <hr />
          <div>
            <div className='fw-bolder mb-3'>{t("DELIVERY")} {t("OPTIONS")} <CiDeliveryTruck /></div>
            <input type='code' placeholder={t("Enter Your Pincode")} />
            <div><b>Policy:</b> {t(output.return_policy["policy"])}</div>
            <div> <b> Condition:</b> {t(output.return_policy["condition"])}</div>

          </div>
          <hr />
          <div>
            <div className='fw-bolder'>{t("PRODUCTS")} {t("DETAILS")}</div>
            <div>{t(output.description)}</div>
          </div>
          <hr />
          <div>
            <div className='fw-bolder'>{t("RATINGS")}</div>
            <div className='d-flex flex-column flex-sm-row mt-4 '>
              <div className='border-2 border-end border-dark-subtle pe-5 justify-content-sm-start text-center me-2'>
                <div className='fs-1'> {output.average_rating}<IoStar className='text-success fs-3 pb-2' /></div>
                <div>{output.total_reviews} {t("Verified")} {t("Buyers")}</div>
              </div>
              <div className='ms-5'>
                {Object.keys(output.rating_breakdown).reverse().map((i, index) => (<div className='d-flex'>
                  <div>{i}<IoStar className='pb-1' /></div>
                  <div className=' bg-dark-su btle mt-2' style={{ width: "200px", height: "8px" }}>
                    <div style={{ height: "8px", backgroundColor: reviewColor[index % reviewColor.length], width: `${(output.rating_breakdown[i] / output.total_reviews) * 100}%` }}></div>
                  </div>
                  <div className='ms-2'>{output.rating_breakdown[i]}</div>

                </div>))}
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className='fw-bolder'>{t("Customer")} {t("Reviews")}</div>

            {output.top_reviews.map((i) => (<>
              <div className='d-flex'>
                <div style={{ "fontSize": "12px" }} className='ps-1 bg-success text-white d-flex h-25'>{i["rating"]} <IoStar className='m-1' /></div>
                <div className='mx-2'>
                  <div><b>{t(i["title"])}</b></div>
                  <div>{t(i["content"])}</div>
                  <div className='fw-lighter'><span className=' border-end border-dark-subtle border-1 me-2 pe-2'>{t(i["reviewer"])}</span><span>{i["date"]}</span></div>
                </div>
              </div>
              <hr />
            </>))}
          </div>
          <div>{t("Product")} {t("Code")}: {output.id}</div>
        </div>
      </div>
      <div className="fw-bolder mx-4 my-2">{t("SIMILAR")} {t("PRODUCTS")}</div>
      <div className='d-flex flex-wrap justify-content-center'>
        {output && products.filter((product) => ((product.category_id === output.category_id) && product.id !== output.id)).slice(0, 7).map((product) => {
          return <ProductCard data={product} />})}</div>
      <Footer />

    </div>
  )
}
