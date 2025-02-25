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
import Button from '../Compoents/Layout/Button'
import { text } from '@fortawesome/fontawesome-svg-core'


export default function ProductPage() {
  const { t } = useTranslation();
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
        <div className=' top28 w-100 h-100 mx-2 p-2 d-flex z-1 d-none d-md-block flex-wrap position-sticky'>
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
          <div className='w170 d-flex p-1 border border-1 border-dark-subtle'><div className=' d-flex border-end border-dark-subtle border-2 p-1'>{output?.average_rating} <GoStarFill className='mt-1 ms-1' /></div> <div className='p-1 ms-1 d-flex '>{output.total_reviews} <div className='ms-1'> {t("Ratings")}</div></div></div> <hr />
          <div className='fs-4' > <b>{currencyOptions[currency].symbol} {Number((output?.price.original * currencyOptions[currency].rate).toFixed(2))}</b> {t("MRP")} <span className='text-decoration-line-through'>{currencyOptions[currency].symbol} {Number((output?.price.discounted * currencyOptions[currency].rate).toFixed(2))}</span> <span className='text-warning' >({output.price.discount_percentage}% {t("OFF")})</span> </div>
          <div className=' fw-bolder text-success'>{t("inclusive")} {t("of")} {t("all")} {t("taxes")}</div>
          {output.colors.length > 0 && <>
            <div className='fs-5 fw-bolder'>{t("SELECT")} {t("COLOR")}</div>
            <div>{output.colors.map((color, index) => (
              <Button key={index}
                onClick={() => setSelectedColor(color.name)}
                style={{ "background": `${color["hex"]}` }}
                className={`px-3 py-3 rounded-5 ${selectedColor === color.name ? "border border-3 border-danger" : ""}`}
              />
            ))}</div>
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
                {output.sizes.map((size) =>
                  <Button key={size.size}
                    text={t(size["size"])}
                    disabled={size["available"] === false}
                    onMouseEnter={() => setIsHovered(size.size)}
                    onMouseLeave={() => setIsHovered(null)}
                    onClick={() => setSelectedSize(size.size)}
                    className={`me-2 rounded-5 bg-white border h50 minW50
            ${selectedSize === size.size ? " border-danger border-2" : ""}
            ${isHovered === size.size ? "border-danger " : ""} `} />
                )}
              </div>
            </>
          )}

          <div className="action-buttons my-2">
            <Button onClick={(e) => { e.preventDefault(); addToCart(output, selectedColor, selectedSize) }}
              icon={<HiShoppingBag className='mx-1' />}
              btn="danger"
              text={`${t("ADD")} ${t("TO")} ${t("BAG")}`}
              className='px-md-5 px-1 py-2' />
            <Button onClick={() => { addToWishlist(output) }}
              icon={<FaHeart className={` mx-1 ${isPresent ? "text-danger" : "text-secondary"}`} />}
              btn="light"
              text={isPresent ? t("WISHLISTED") : t("WISHLIST")}
              className={` py-2 px-md-3 px-1 ${isPresent ? " text-white bg-secondary " : ""}`}
            />
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
                  <div className=' bg-dark-subtle mt-2 w200 h8'>
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
                <div className='ps-1 bg-success text-white d-flex h20 fs12'>{i["rating"]} <IoStar className='m-1' /></div>
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
          return <ProductCard key={product.id} data={product} />
        })}</div>
      <Footer />

    </div>
  )
}
