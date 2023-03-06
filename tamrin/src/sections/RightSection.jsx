import React, { useState } from 'react'
import BigSlider from '../component/BigSlider'
import LeagueofEuropeanNations from '../component/LeagueofEuropeanNations'
import BigSliderData from "../datas/BigSliderData"
import LeagueBartar from '../datas/LeagueBartar';
import LeagueAzadegan from '../datas/LeagueAzadegan';
import LastNews from '../component/LastNews';
import HeadSlider from '../component/HeadSlider';
import Slider3 from '../datas/Slider3';
import Slider from '../component/Slider';
import Leagues from '../component/Leagues';

const RightSection = () => {
  const [bigSliderData, setBigSliderData] = useState(BigSliderData)
 
  return (
    <div className='right-section item-radius'>
      {bigSliderData.map((item, itemIndex) => {

        return (
          <BigSlider Data={item} {...item} itemIndex={itemIndex} />
        )
      })}
      <div className='item-next2'>

        <div className='right-section-box'>



          <section className="right-section2">
          <LeagueofEuropeanNations data1={LeagueAzadegan}  data2={LeagueBartar}/>

               
            

            <Leagues />
          </section>

        </div>



      </div>


    </div>
  )
}

export default RightSection