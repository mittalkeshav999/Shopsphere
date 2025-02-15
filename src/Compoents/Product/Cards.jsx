import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { useSearch } from './SearchContext';


export default function Cards() {
  const{product}=useSearch();

  return (
    <div className='d-flex flex-wrap align-content-center justify-content-center ' >
    {product.map((product)=>{
      return <Link className='text-decoration-none' to={"/productpage/"+ product.id} ><Card  key={product.id} data={product} /></Link>
    })}
    </div>
  )
}
