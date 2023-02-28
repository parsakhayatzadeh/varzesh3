import React, { useEffect, useState } from 'react'
import England from "../datas/England"
import Bondesliga from "../datas/‌Bondesliga";
const test = document.getElementById("parsa")
const ForeignLeague = () => {
    const [england, setEngland] = useState(England);
    const [bondesliga, setBondesliga] = useState(Bondesliga);
    const [showList, setShowList] = useState(england);
    const [leagueName, setLeagueName] = useState('england');

    const week = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const leage = [{ name: 'لیگ برتر انگلستان', lege: 'england', data: england },
    { name: "بوندسلیگا المان", lege: 'bondesliga', data: bondesliga }]
    const changeLeague = (item) => {
        const newValue = item.target.value;
        setLeagueName(newValue);
        console.log(newValue);
        if (newValue == "england") {
            setShowList(england)

        } else if (newValue == "bondesliga") {
            setShowList(bondesliga)
        }

    }



    return (
        <div className='ForeignLeague item-radius'>
            <h5>لیگ های خارجی </h5>

            <div className='filter-ForeignLeague item-radius'>
                <select className='item-radius' value={leagueName} onChange={changeLeague} >

                    {leage.map((item) => {
                        return (
                            <option value={item.lege}>{item.name}</option>
                        )
                    })}


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