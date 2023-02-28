import React, { useEffect, useState } from 'react'
import data from "../datas/dataNews";

const LastNews = () => {
    const [news, setNews] = useState([]);

    const check = (item) => {
        console.log(data.filter((e) => e.type == item));
        setNews(data.filter((e) => e.type == "newest"));
        console.log(news);
    }
    




    return (
        <div className='item-radius news-box'>
            <h5 className='font-Beirut'>آخرین اخبار فوتبال</h5>
            <div className="btntype-container">
                <button onClick={() => check("newest")} className="btntype font-Beirut">جدید ترین</button>
                <button onClick={() => check("mostvisited")} className="btntype font-Beirut">پربازدیدترین</button>
                <button className="btntype font-Beirut">پربحث ترین </button>
            </div>
            <div id='versionContainer' className='version-container'>

                <button >
                    <input type={'checkbox'} id="Internal" />
                    <label htmlFor="Internal">داخلی</label>
                </button>
                <button >
                    <input type={'checkbox'} id="Foreign" />
                    <label htmlFor="Foreign">خارجی</label>
                </button>
                <button >
                    <input type={'checkbox'} id="video" />
                    <label htmlFor="video">ویدیو</label>
                </button>



            </div>

            {news.map((item) => {
                return (
                    <p>{item.msg}</p>
                )
            })}

        </div>
    )
}

export default LastNews