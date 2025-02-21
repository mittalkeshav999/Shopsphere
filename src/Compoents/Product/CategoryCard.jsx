import React from 'react'
import { useTranslation } from '../Translation/TranslationContext'
export default function CategoryCard(props) {
  const {t}=useTranslation();
  // console.log(`Missing words: ${countMissingTranslations()}`);
  return (
    <div style={{width:"200px"}} className='d-flex flex-column bg-secondary m-1'>
    <img style={{height:"250px",width:"190px"}} className='m-auto p-1' src={props.value.thumbnail_image} alt={t("img")}/>
    <div className='text-center text-white'>{t(props.value.name)}</div>
    <div className='text-center text-white fw-bolder'>{props.value.discount_range.min_discount} - {props.value.discount_range.max_discount}% {t("OFF")}</div>
    <div className='text-center text-white '>{t("Shop")} {t("Now")}</div>
    </div>
  )
}
