import React, { useState } from 'react'
import data from "../datas/dataNews";

const LastNews = () => {
    const [news , setNews] = useState(data);
    

    const internal = document.getElementById("Internal");
    const foreign = document.getElementById("Foreign");
    const video = document.getElementById("video");
    const checked = (id) => {
        if (id.classList.contains("checked")) {
            id.classList.remove("checked")
        }else{
            id.classList.add("checked")
        }

       console.log(id);
       console.log(news);
       
       

       
      
      
   }
    

    return (
        <div className='item-radius news-box'>
            <h5 className='font-Beirut'>آخرین اخبار فوتبال</h5>
            <div className="btntype-container">
                <button className="btntype font-Beirut">جدید ترین</button>
                <button className="btntype font-Beirut">پربازدیدترین</button>
                <button className="btntype font-Beirut">پربحث ترین </button>
            </div>
            <div className='version-container'>

                <button onClick={() => checked(internal)}>
                    <input type={'checkbox'} id="Internal" />
                    <label htmlFor="Internal">داخلی</label>
                </button>
                <button onClick={() => checked(foreign)}>
                    <input type={'checkbox'} id="Foreign" />
                    <label htmlFor="Foreign">خارجی</label>
                </button>
                <button onClick={() => checked(video)}>
                    <input type={'checkbox'} id="video" />
                    <label htmlFor="video">ویدیو</label>
                </button>



            </div>

            {news.map((item) =>{ 
                return( 
                    <p>{item.msg}</p>
                )
            })}
            
        </div>
    )
}

export default LastNews