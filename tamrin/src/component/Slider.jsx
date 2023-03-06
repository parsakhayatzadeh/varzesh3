import React, { useState, useEffect } from 'react'
import Slider1 from '../datas/Slider1';

const Slider = (item) => {
    const [data, setData] = useState(item);
    const [index, setIndex] = useState(0);




    
    let position = "nextSlide";
    if (item.Itemindex === index) {
        position = "activeSlide"

    }
    if (item.Itemindex === index - 1 || (index === 0 && item.Itemindex === data.length)) {
        position = "lastSlide"
    }
    useEffect(() => {
        const lastIndex = 3;
       
        
        if (index > lastIndex) {
          setIndex(0)
          ;
        }
      }, [index, data])
    
      useEffect(() => {
        const slider = setInterval(() => {
          setIndex(index + 1)
        }, 3000)
    
        return () => clearInterval(slider)
      }, [index])
    return (
        <div className='slider'>

            <section className={'slider1 item-radius'} onClick={() => setIndex(index + 1)} >
                <article className={position}>
                    <img src={item.img} alt={item.esm} className="slider-img" />


                    <div className='slider-footer'>
                        <p>{item.esm}</p>


                    </div>
                </article>

            </section>
        </div>
    )
}

export default Slider