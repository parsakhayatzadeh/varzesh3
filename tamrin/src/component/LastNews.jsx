import React, { useEffect, useState } from 'react'
import data from "../datas/dataNews";

const LastNews = () => {
    const [news, setNews] = useState(data);
    const [internalShow, setInternalShow] = useState(true);
    const [foreignShow, setforeginShow] = useState(false);
    const [videoShow, setVideoShow] = useState(false)




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

    const versionCheck = () => {
        if (internalShow && foreignShow == false && videoShow == false) {
            setNews(data.filter((e)=> e.version == "Internal"));
            setInternalShow(true);
            setforeginShow(false);
            setVideoShow(false)

        }else if (internalShow==false && foreignShow && videoShow==false){
            setNews(data.filter((e)=> e.version == "Foreign"));
            setInternalShow(false);
            setforeginShow(true);
            setVideoShow(false)

        }else if( internalShow == false && foreignShow==false && videoShow){ 
            setNews(data.filter((e)=> e.version == "video"));
            setInternalShow(false);
            setforeginShow(false);
            setVideoShow(true)

        }else if (internalShow && foreignShow && videoShow==false){ 
            setNews(news.filter((e)=> e.version != "video"));
            setInternalShow(true);
            setforeginShow(true);
            setVideoShow(false)
        }else if(internalShow && foreignShow==false && videoShow){ 
            setNews(data.filter((e)=> e.version == "Foreign"));
            setInternalShow(true);
            setforeginShow(false);
            setVideoShow(true)

        }else if(internalShow == false && foreignShow && videoShow){ 
            setNews(data.filter((e)=> e.version == "Internal"));
            setInternalShow(false);
            setforeginShow(true);
            setVideoShow(true)
        }else if(internalShow&&foreignShow&&videoShow){ 
            setNews(data)
        }
        
    }

    const checked = () => {
       
        versionCheck();



    }




    return (
        <div className='item-radius news-box'>
            <h5 className='font-Beirut'>آخرین اخبار فوتبال</h5>
            <div className="btntype-container">
                <button onClick={() => typeCheck("newest")} className="btntype font-Beirut">جدید ترین</button>
                <button onClick={() => typeCheck("mostvisited")} className="btntype font-Beirut">پربازدیدترین</button>
                <button onClick={() => typeCheck("controversial")} className="btntype font-Beirut">پربحث ترین </button>
            </div>
            <div id='versionContainer' className='version-container'>

                <button >
                    <input type={'checkbox'} id="Internal" onClick={() => checked()} />
                    <label htmlFor="Internal">داخلی</label>
                </button>
                <button >
                    <input type={'checkbox'} id="Foreign" onClick={() => checked()} />
                    <label htmlFor="Foreign">خارجی</label>
                </button>
                <button >
                    <input type={'checkbox'} id="video" onClick={() => checked()} />
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