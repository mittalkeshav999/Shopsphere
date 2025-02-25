import React from 'react'
import CategoryCard from './CategoryCard'
import { categories } from '../../Data/Data'
import { Link } from 'react-router-dom'
import { useTranslation } from '../Translation/TranslationContext'

export default function CategoryCards() {
  const { t } = useTranslation();
  return (<>
    <div className='fw-bold text-secondary text-center fs-1'>{t("SHOP")} {t("BY")} {t("CATEGORY")}</div>
    <div className=' d-flex w-100 flex-wrap justify-content-center'>
      {categories.map((categories) => {
        return <div> <Link className='text-decoration-none' to={"/categorypage/" + categories.name}><CategoryCard key={categories.id} value={categories} /></Link></div>
      })}
    </div>
  </>
  )
}
