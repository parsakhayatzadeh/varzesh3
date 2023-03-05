import React, { useEffect, useState } from 'react'
import data from "../datas/dataNews";

const LastNews = () => {
    const [news, setNews] = useState(data);




    const [internalShow, setInternalShow] = useState(true);
    const [foreignShow, setforeginShow] = useState(true);
    const [videoShow, setVideoShow] = useState(true)





    const internal = document.getElementById("Internal");
    const foreign = document.getElementById("Foreign");
    const video = document.getElementById("video");

    const typeCheck = (item) => {
        const [internal, setInternal] = useState(data.filter((e) => e.type == "newest" && e.version == 'Internal'));
        const [Foreign, setForeign] = useState(data.filter((e) => e.type == 'newest' && e.version == 'Foreign'));
        const [video, setVideo] = useState(data.filter((e) => e.type == "newest" && e.version == "video"))

        const check = (item) => {
            if (item == "newest") {
                document.getElementById('versionContainer').className = "version-container"
            } else {
                document.getElementById('versionContainer').classList.add("hide")
            }
            setNews(data.filter((e) => e.type == item))
        }




        const versionCheck = () => {
            if (check) {
                setNews(data.filter((e) => e.version == "Internal"))
            } else if (check === false) {
                setNews(data)
                const versionCheck = (item) => {
                    if (item == 'Internal') {
                        setNews(internal)

                    } else if (item == "Foreign") {
                        setNews(Foreign)
                    } else if (item == "video") {
                        setNews(video)
                    }

                }
            }

            





            return (
                <div className='item-radius news-box'>
                    <h5 className='font-Beirut'>آخرین اخبار فوتبال</h5>
                    <div className="btntype-container">
                        <button onClick={() => check("newest")} className="btntype font-Beirut">جدید ترین</button>
                        <button onClick={() => check("mostvisited")} className="btntype font-Beirut">پربازدیدترین</button>
                        <button onClick={() => check("controversial")} className="btntype font-Beirut">پربحث ترین </button>
                    </div>
                    <div id='versionContainer' className='version-container'>

                        <button onClick={() => versionCheck("Internal")}>
                            <input name='filter-radio-btn' type={'radio'} id="Internal" />
                            <label htmlFor="Internal">داخلی</label>
                        </button>
                        <button onClick={() => versionCheck("Foreign")}>
                            <input name='filter-radio-btn' type={'radio'} id="Foreign" />
                            <label htmlFor="Foreign">خارجی</label>
                        </button>
                        <button onClick={() => versionCheck('video')}>
                            <input name='filter-radio-btn' type={'radio'} id="video" />
                            <label htmlFor="video">ویدیو</label>
                        </button>



                    </div>

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
    }
}

export default LastNews