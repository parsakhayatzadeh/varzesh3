import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaUserAlt } from "react-icons/fa"

const Header = () => {
    const [time, setTime] = useState();
    const getTime = () => {
        var hour = new Date().getHours();
        var min = new Date().getMinutes();

        hour = (hour < 10) ? `0${hour}` : hour;
        min = (min < 10) ? `0${min}` : min;
        setTime(`${hour}-${min}`);
        setTimeout(getTime, 1000);

    }
    useEffect(() => {
        getTime()
    }, [time])

    const date = new Date();
    const option = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"

    }
    
    return (
        <main>
            <section className='section-1 allPadding'>


                <div className='menu2-nav'>
                    <p className="fontfaraz">ورود</p>
                    <FaUserAlt className='icons' />
                    <div className='line'></div>
                    <p className="fontfaraz ">جستجو</p>
                    <FaSearch className='icons' />
                    <div className='line'></div>
                    <p className='font-faraz'>{time}</p>
                    <p className='calender'>{date.toLocaleDateString("fa-IR", option)}  </p>







                </div>
                <div className='menu1-nav'>
                    <a href="https://www.varzesh3.com/#:~:text=%D8%AB%D8%A8%D8%AA%20%D9%86%D8%B8%D8%B1-,%D8%AA%D8%A8%D9%84%DB%8C%D8%BA%D8%A7%D8%AA,-%D8%AF%D9%88%D8%B4%D9%86%D8%A8%D9%87%201%20%D8%A7%D8%B3%D9%81%D9%86%D8%AF">
                        تبلیغات

                    </a>
                    <a href="https://www.varzesh3.com/#:~:text=%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4%20%D9%85%D8%B1%D8%AF%D9%85%DB%8C-,%D8%AB%D8%A8%D8%AA%20%D9%86%D8%B8%D8%B1,-%D8%AA%D8%A8%D9%84%DB%8C%D8%BA%D8%A7%D8%AA">
                        ثبت نظر
                    </a>
                    <a href="https://www.varzesh3.com/#:~:text=%D9%BE%D8%AE%D8%B4%20%D8%B2%D9%86%D8%AF%D9%87-,%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4%20%D9%85%D8%B1%D8%AF%D9%85%DB%8C,-%D8%AB%D8%A8%D8%AA%20%D9%86%D8%B8%D8%B1">
                        گزارش مردمی
                    </a>
                    <a href="https://www.varzesh3.com/#:~:text=%D9%88%DB%8C%D8%AF%DB%8C%D9%88-,%D9%BE%D8%AE%D8%B4%20%D8%B2%D9%86%D8%AF%D9%87,-%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4%20%D9%85%D8%B1%D8%AF%D9%85%DB%8C">
                        پخش زنده
                    </a>
                    <a href="https://www.varzesh3.com/#:~:text=%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4%20%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%DB%8C-,%D9%88%DB%8C%D8%AF%DB%8C%D9%88,-%D9%BE%D8%AE%D8%B4%20%D8%B2%D9%86%D8%AF%D9%87">
                        ویدیو
                    </a>
                    <a href="https://www.varzesh3.com/#:~:text=%D8%A2%D8%B1%D8%B4%DB%8C%D9%88%20%D8%AE%D8%A8%D8%B1-,%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4%20%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%DB%8C,-%D9%88%DB%8C%D8%AF%DB%8C%D9%88">
                        گزارش تصویری
                    </a>
                    <a href="https://www.varzesh3.com/#:~:text=%D9%BE%DB%8C%D8%B4%20%D8%A8%DB%8C%D9%86%DB%8C-,%D8%A2%D8%B1%D8%B4%DB%8C%D9%88%20%D8%AE%D8%A8%D8%B1,-%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4%20%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%DB%8C">
                        آرشیو خبر
                    </a>
                    <a href="https://www.varzesh3.com/#:~:text=%D9%BE%DB%8C%D8%B4%20%D8%A8%DB%8C%D9%86%DB%8C,-%D8%A2%D8%B1%D8%B4%DB%8C%D9%88%20%D8%AE%D8%A8%D8%B1">
                        پیش بینی
                    </a>


                </div>
            </section>

            <section className='section-2 allPadding'>
                <img src='././public/1.png' alt='varsesh3' className='logo'/>
                <div className='navbar '>
                    <a className='fontfaraz'  href='https://www.varzesh3.com/'> 
                         صفحه اصلی
                    </a>
                    <a className='fontfaraz' href='https://www.varzesh3.com/#:~:text=%D8%B5%D9%81%D8%AD%D9%87%E2%80%8C%D8%A7%D8%B5%D9%84%DB%8C-,%D8%AC%D8%AF%D9%88%D9%84%20%D9%84%DB%8C%DA%AF%20%D8%A8%D8%B1%D8%AA%D8%B1,-%D8%AC%D8%A7%D9%85%20%D8%AD%D8%B0%D9%81%DB%8C'> 
                        جدوبل لیگ برتر
                    </a>
                    <a className='fontfaraz' href='https://www.varzesh3.com/#:~:text=%D8%AC%D8%AF%D9%88%D9%84%20%D9%84%DB%8C%DA%AF%20%D8%A8%D8%B1%D8%AA%D8%B1-,%D8%AC%D8%A7%D9%85%20%D8%AD%D8%B0%D9%81%DB%8C,-%D8%B1%D9%88%D8%B2%D9%86%D8%A7%D9%85%D9%87'> 
                         جام حذفی
                    </a>
                    <a className='fontfaraz' href='https://www.varzesh3.com/#:~:text=%D8%AC%D8%A7%D9%85%20%D8%AD%D8%B0%D9%81%DB%8C-,%D8%B1%D9%88%D8%B2%D9%86%D8%A7%D9%85%D9%87,-%D9%88%DB%8C%D8%AF%DB%8C%D9%88'> 
                         روزنامه 
                    </a>
                    <a className='fontfaraz' href='https://video.varzesh3.com/'> 
                        ویدیو
                    </a>
                    <a className='fontfaraz' href='https://www.varzesh3.com/livescore'> 
                         نتایج زنده
                    </a>

                </div>

            </section>
        </main>
    )
}

export default Header