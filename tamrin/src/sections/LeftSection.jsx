import React, { useState } from 'react'
import ForeignLeague from '../component/ForeignLeague'
import HeadSlider from '../component/HeadSlider'
import LastNews from '../component/LastNews'
import LeagueofEuropeanNations from '../component/LeagueofEuropeanNations'
import Leagues from '../component/Leagues'
import Slider from '../component/Slider'
import Slider1 from '../datas/Slider1';
import Slider2 from '../datas/SLider2'
import League from '../datas/League'
import EuropeanNationsAgruop from '../datas/EuropeanNationsAgruop ';
import EuropeanNationsBgruop from '../datas/EuropeanNationsBgruop'



const LeftSection = () => {
    const [slider1, SetSlider1] = useState(Slider1);
    console.log(League);


   


    return (
        <section className='left-section'>
            <div className='left-section-section1'>
                <img src='././public/4.gif' alt='alibaba' className='item-radius' />
                <img src="././public/5.gif" alt="gotosafar" className='item-radius' />
                <LastNews />
                <img src="././public/12.gif" alt="safar" className='item-radius' />
                <ForeignLeague />
                <div className='slider'>
                    <HeadSlider />
                    {Slider1.map((item, Itemindex) => {

                        return (
                            <div>
                                <Slider item={item} {...item} Itemindex={Itemindex} />

                            </div>

                        )
                    })}
                </div>

                <div className='item-next'>
                    <LeagueofEuropeanNations data1={EuropeanNationsAgruop}  data2={EuropeanNationsBgruop}/>

                </div>
                <div>
                    <HeadSlider />
                    {Slider2.map((item, Itemindex) => {

                        return (
                            <div>
                                <Slider item={item} {...item} Itemindex={Itemindex} />
                            </div>
                        )
                    })}
                </div>
                <div className='item-next'>
                    <Leagues  data={League} name="جدول لیگ های خارجی"/>

                </div>




            </div>
            <div className='left-section-section2'>
                <img src='././public/3.gif' alt='afranet' className='item-radius' />
                <img src="././public/6.gif" alt="iransel" className='item-radius' />
                <img src="././public/7.gif" alt="safir" className='item-radius' />
                <img src="././public/8.gif" alt="ofogh" className='item-radius' />
                <img src="././public/9.gif" alt="KWC" className='item-radius' />
                <img src="././public/10.gif" alt="voipi" className='item-radius' />
                <img src="././public/11.gif" alt="samsong" className='item-radius' />


            </div>

        </section>
    )
}

export default LeftSection