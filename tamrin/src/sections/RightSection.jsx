import React, { useState } from 'react'
import BigSlider from '../component/BigSlider'
import BigSliderData from "../datas/BigSliderData"

const RightSection = () => {
  const [bigSliderData, setBigSliderData] = useState(BigSliderData)
  return (
    <div className='right-section item-radius'>
      {bigSliderData.map((item, itemIndex) => {
        
        return ( 
        <BigSlider Data={item} {...item} itemIndex={itemIndex}/>
      )
      })}
      <section className='right-section1'></section>
      <section className="right-section2"></section>

    </div>
  )
}

export default RightSection