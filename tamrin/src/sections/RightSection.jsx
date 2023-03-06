import React, { useState } from 'react'
import BigSlider from '../component/BigSlider'
import LeagueofEuropeanNations from '../component/LeagueofEuropeanNations'
import BigSliderData from "../datas/BigSliderData"
import LeagueBartar from '../datas/LeagueBartar';
import LeagueAzadegan from '../datas/LeagueAzadegan';
import LastNews from '../component/LastNews';

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

          <section className='right-section1'>
            <img src="../../public/25.gif" alt="" className='item-radius' />
          </section>

          <section className="right-section2">
          <LeagueofEuropeanNations data1={LeagueAzadegan}  data2={LeagueBartar}/>

            
          </section>

        </div>



      </div>


    </div>
  )
}

export default RightSection