import React, { useState, useEffect } from 'react'
import BigSliderData from "../datas/BigSliderData"

const BigSlider = (Data) => {
    const [data, setdata] = useState(Data);
    const [index, setIndex] = useState(0);
    const [dataIndex, setDataIndex] = useState(Data.itemIndex);
   
   
    let position = "nextSlide";
    if (dataIndex === index) {
        position = "activeSlide"

    }
    if (dataIndex === index - 1 || (index === 0 && dataIndex === data.length)) {
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
        }, 4000)

        return () => clearInterval(slider)
    }, [index])

 
    
     
   




    return (
        <main className={`big-slider ${position}`} >
            <div >

                <section className='section1-bigslider'>
                    <img src={data.img} alt={data.title} className={`big-slider-img ${position}`} />
                </section>
                
                <section className='section2-bigslider'>
                    <p className="font-homa">{data.msg1}</p>
                    <h3 className="font-homa">{data.title}</h3>
                    <p className="font-homa">{data.msg2}</p>
                    <div className='index-btn'>
                        
                    </div>
                    

                </section>
               
                

            </div>
        </main>
    )
}

export default BigSlider