import React from 'react'
import { useTranslation } from '../Translation/TranslationContext'
export default function CategoryCard(props) {
  const {t}=useTranslation();

  return (
    <div className='d-flex flex-column bg-secondary m-1 w200'>
    <img className='m-auto p-1 w-100 h250' src={props.value.thumbnail_image} alt={t("img")}/>
    <div className='text-center text-white'>{t(props.value.name)}</div>
    <div className='text-center text-white fw-bolder'>{props.value.discount_range.min_discount} - {props.value.discount_range.max_discount}% {t("OFF")}</div>
    <div className='text-center text-white '>{t("Shop")} {t("Now")}</div>
    </div>
  )
}
