import React from 'react'
import CategoryCard from './CategoryCard'
import { categories } from '../../Data/Data'
import { Link } from 'react-router-dom'

export default function CategoryCards() {
  return (<>
  <div className='fw-bold text-secondary text-center fs-1'>SHOP BY CATEGORY</div>
    <div className=' d-flex w-100 flex-wrap justify-content-center'>
    {categories.map((categories)=>{
      return  <div> <Link className='text-decoration-none' to={"/categorypage/"+categories.name}><CategoryCard key={categories.id} value={categories}/></Link></div>
    })}
    </div>
    </>
  )
}
