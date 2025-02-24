import React from 'react'
import Header from '../Compoents/Layout/Header'
import Footer from '../Compoents/Layout/Footer'
import Cards from '../Compoents/Product/Cards'
import Corousel from '../Compoents/Layout/Corousel.js'
import CategorySection from '../Compoents/Product/CategorySection.jsx'


export default function HomePage() { 
  
  return (
    <>
      <Header />
      <Corousel/>
      <Cards/>
      <CategorySection/>
      <Footer/>
    </>
  )
}
