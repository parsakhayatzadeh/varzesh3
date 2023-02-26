import React from 'react'
import LastNews from '../component/LastNews'

const LeftSection = () => {
    return (
        <section className='left-section'>
            <div className='left-section-section1'>
                <img src='././public/4.gif' alt='alibaba' className='item-radius' />
                <img src="././public/5.gif" alt="gotosafar" className='item-radius' />
                <LastNews />
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