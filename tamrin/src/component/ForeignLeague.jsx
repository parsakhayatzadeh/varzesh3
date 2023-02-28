import React, { useState } from 'react'
import England from "../datas/England"
import Bondesliga from "../datas/‌Bondesliga";
const ForeignLeague = () => {
    const [england, setEngland] = useState(England);
    const [bondesliga, setBondesliga] = useState(Bondesliga);
    const [showList, setShowList] = useState(bondesliga);
    const [leagueName, setLeagueName] = useState('england');


    const week = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const leage = [{ name: 'لیگ برتر انگلستان', lege: 'england' }, { name: "بوندسلیگا المان", lege: 'bondesliga' }];
    const changeList = (item) => {

        const newItem = item.target.value;
        set

    }








    return (
        <div className='ForeignLeague item-radius'>
            <h5>لیگ های خارجی </h5>

            <div className='filter-ForeignLeague item-radius'>
                <select value={leagueName} onChange={() => changeList()}>
                    {}

                    
                </select>



                <select className='item-radius '  >

                    {week.map((item) => {
                        return (
                            <option>{`هفته ${item}`}</option>
                        )
                    })}


                </select>
                <div className='p'>
                    {showList.map((item) => {
                        return (
                            <p>{item.league}</p>
                        )
                    })}
                </div>





            </div>



        </div>
    )
}

export default ForeignLeague