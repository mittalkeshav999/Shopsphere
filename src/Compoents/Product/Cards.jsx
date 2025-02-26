import React from 'react'
import Card from './Card'
import "../CommonStyle.css"
import { useSearch } from './SearchContext';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../Data/Data';


export default function Cards() {
  const navigate =useNavigate();
  const { product } = useSearch();
  const uniqueProducts = product.filter((product, index, self) =>
    index === self.findIndex((p) => p.brand === product.brand)
  );
  

  const handleBrandClick = (brand,id) => {
    const category_object = categories.find((p) => p.id === id);
    const category_name=category_object.name
    navigate(`/categorypage/${category_name}?brands=${brand}`); 
  };

  return (
    <div className='d-flex flex-wrap align-content-center justify-content-center ' >
      {uniqueProducts.map((product) => {
      return  <div
          key={product.id}
          className='cursorPointer'
          onClick={() => handleBrandClick(product.brand,product.category_id)}        >
          <Card data={product} />
        </div>
              })}
    </div>
  )
}
