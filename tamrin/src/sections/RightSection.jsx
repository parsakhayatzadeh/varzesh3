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
import League from '../datas/League';
import PersionLeagues from '../datas/PersionLeagues';

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
            <LeagueofEuropeanNations data1={LeagueAzadegan} data2={LeagueBartar} />

            <div className='slider'>
              <HeadSlider />
              {Slider3.map((item, Itemindex) => {
                console.log(item);
                return (
                  <div>
                    <Slider item={item} {...item} Itemindex={Itemindex} />
                  </div>

                )
              })}
            </div>




          </section>



          <section className='right-section1'>
            <img src="../../public/25.gif" alt="" className='item-radius' />

            <Leagues data={PersionLeagues} name="جدول لیگ های ایران" />
            <img src={"../../public/31.gif"} alt=""  className='item-radius'/>

          </section>

        </div>



      </div>


    </div>
  )
}

export default RightSection