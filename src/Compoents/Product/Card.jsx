import React from 'react'
import p1 from "../../Assets/images/p1.png"
import { useTranslation } from '../Translation/TranslationContext'

export default function Card(props) {
  const {t}=useTranslation();
  return (
    <div style={{width:"180px"}} className='d-flex flex-column m-2 border '>
      <img style={{width:"170px", height: "260px"}} className='p-1 m-auto' src= {props?.data?.images[0]} alt='img'/>
      <img className='my-2 mx-auto position-relative w-75' src={p1} alt={t("img")} />
      <div className='text-black text-center'>{t(props.data.brand)}</div>
      <div className='fw-bolder text-center text-black'>{t("MIN")}. {(props.data.price.discount_percentage)}% {t("OFF")}</div>
    </div>
  )
}
