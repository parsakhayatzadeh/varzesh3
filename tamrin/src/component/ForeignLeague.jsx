import React, { useEffect, useState } from 'react'
import England from "../datas/England"
import Bondesliga from "../datas/‌Bondesliga";
import FoleginLeagueListItem from './FoleginLeagueListItem';
const test = document.getElementById("parsa")
const ForeignLeague = () => {

 


    const [england, setEngland] = useState(England.filter((e) => e.week == 1));
    const [bondesliga, setBondesliga] = useState(Bondesliga.filter((e) => e.week == 1));
    const [showList, setShowList] = useState(england);
    const [leagueName, setLeagueName] = useState('england');
    


    const week = [1, 2, 3, 4, 5];
    const leage = [{ name: 'لیگ برتر انگلستان', lege: 'england', data: england },
    { name: "بوندسلیگا المان", lege: 'bondesliga', data: bondesliga }]
    const changeLeague = (item) => {

        const newValue = item.target.value;
        setLeagueName(newValue);
        if (newValue == "england") {

            setShowList(England)

        } else if (newValue == "bondesliga") {
            setShowList(bondesliga)
        }

    }




    return (
        <div className='ForeignLeague item-radius'>
            <h5>لیگ های خارجی </h5>

            <div className='filter-ForeignLeague item-radius'>
                <select className='item-radius' value={leagueName} onChange={changeLeague}>
                    {leage.map((item) => {
                        return (
                            <option value={item.lege}>{item.name}</option>
                        )
                    })}
                </select>
                <select className='item-radius '  >
                    {week.map((item) => {
                        return (
                            <option>{` هفته${item}`}</option>
                        )
                    })}
                </select>
            </div>
            <div className='show-list-box'>
                <div className='show-list-head'></div>
                {showList.map((item, index) => {
                    const [color, setcolor] = useState()
                    const changeColor = () => {
                        if ((index % 2) == 0) {

                            setcolor("#d9d9d9")

                        } else {
                            setcolor("white")
                        }
                    }
                    useEffect(() => {
                        changeColor()
                    },)

                    return (
                        <FoleginLeagueListItem item={item} bgc={color} />
                    )
                })}
            </div>
        </div>
    )
}

export default ForeignLeague