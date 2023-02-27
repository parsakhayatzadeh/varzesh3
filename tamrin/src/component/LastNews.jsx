import React, { useEffect, useState } from 'react'
import data from "../datas/dataNews";

const LastNews = () => {
    const [news, setNews] = useState(data);





    const internal = document.getElementById("Internal");
    const foreign = document.getElementById("Foreign");
    const video = document.getElementById("video");

    const typeCheck = (item) => {
        if (item == "newest") {
            document.getElementById("versionContainer").className = "version-container"


        } else {
            document.getElementById("versionContainer").classList.add("hide")
        }
        setNews(data.filter((e) => e.type == item))



    }







    return (
        <div className='item-radius news-box'>
            <h5 className='font-Beirut'>آخرین اخبار فوتبال</h5>
            <div className="btntype-container">
                <button onClick={() => typeCheck("newest")} className="btntype font-Beirut">جدید ترین</button>
                <button onClick={() => typeCheck("mostvisited")} className="btntype font-Beirut">پربازدیدترین</button>
                <button onClick={() => typeCheck("controversial")} className="btntype font-Beirut">پربحث ترین </button>
            </div>
            <form id='versionContainer' className='version-container'>



                <button>
                    <input type={'radio'} id="Internal" name='parsa' onClick={() => setNews(data.filter((e) => e.version == "Internal"))} />
                    <label htmlFor="Internal">داخلی</label>
                </button>



                <button>
                    <input type={'radio'} id="Foreign" name='parsa' onClick={() => setNews(data.filter((e) => e.version == "Foreign"))} />
                    <label htmlFor="Foreign">خارجی</label>
                </button>

                
                <button>
                <input type={'radio'} id="video" name='parsa' onClick={() => setNews(data.filter((e) => e.version == "video"))} />
                <label htmlFor="video">ویدیو</label>
                </button>



            </form>

            <div className='item'>
                {news.map((item) => {
                    return (
                        <p>{item.msg}</p>
                    )
                })}
            </div>

        </div>
    )
}

export default LastNews