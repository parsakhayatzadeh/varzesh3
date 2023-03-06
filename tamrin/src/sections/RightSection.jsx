import React, { useState } from 'react'
import BigSlider from '../component/BigSlider'
import LeagueofEuropeanNations from '../component/LeagueofEuropeanNations'
import BigSliderData from "../datas/BigSliderData"
import LeagueBartar from '../datas/LeagueBartar';
import LeagueAzadegan from '../datas/LeagueAzadegan';
import LastNews from '../component/LastNews';
import Slider from 'react-slick';
import Slider1 from '../datas/Slider1';
import HeadSlider from '../component/HeadSlider';
import Slider2 from '../datas/SLider2';

const RightSection = () => {
  const [bigSliderData, setBigSliderData] = useState(BigSliderData)
  const [ parsa , setParsa] = useState(Slider2); 
  console.log(parsa);

  return (
    <div className='right-section item-radius'>
      {bigSliderData.map((item, itemIndex) => {

        return (
          <BigSlider Data={item} {...item} itemIndex={itemIndex} />
        )
      })}
      <div className='item-next2'>

        <div className='right-section-box'>

          <section className='right-section1'>
            <img src="../../public/25.gif" alt="" className='item-radius' />
          </section>

          <section className="right-section2">
            <LeagueofEuropeanNations data1={LeagueAzadegan} data2={LeagueBartar} />


          </section>

        </div>

      </div>


    </div>
  )
}

export default RightSection