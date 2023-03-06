import React, { useEffect, useState } from 'react'
import EuropeanNationsAgruop from '../datas/EuropeanNationsAgruop ';
import EuropeanNationsBgruop from '../datas/EuropeanNationsBgruop';
import FoleginLeagueListItem from './FoleginLeagueListItem';

const LeagueofEuropeanNations = ({ data1, data2 }) => {


    const [A, setA] = useState(data1.filter((e) => e.week == 1));
    const [B, setB] = useState(data2.filter((e) => e.week == 1));
    const p = [...new Set(A.map((e) => e.league))];
    const p1 = [...new Set(B.map((e) => e.league))];


    const [showList, setShowList] = useState(A);
    const [league, setLeague] = useState("A")

    const items = [... new Set(A.map((item) => item.week))];

    const leagues = [p, p1]
    const changeLeague = (item) => {
        const newVal = item.target.value;
        setLeague(newVal);
        if (newVal == p) {

            setShowList(A)

        } else if (newVal == p1) {
            setShowList(B)
        }
    }


    return (
        <section className='ForeignLeague '>
            <h5>لیگ ملت های اروپا</h5>
            <div className='filter-ForeignLeague item-radius'>
                <select value={league} onChange={changeLeague}>
                    {leagues.map((item) => {

                        return (
                            <option value={item}>{`لیگ ${item}`}</option>
                        )
                    })}

                </select>
                <select value={items}>
                    {items.map((item) => {
                        return (
                            <option value={item}>{`گروه ${item}`}</option>
                        )
                    })}
                </select>
            </div>

            <div className='show-list-box'>
                <div className='show-list-head'></div>
                {showList.map((item, index) => {
                    const [color, setColor] = useState();
                    const changeColor = () => {
                        if ((index % 2) == 0) {
                            setColor("#f2f2f2")

                        } else {
                            setColor("white")
                        }
                    }
                    useEffect(() => {
                        changeColor()

                    }, [color])
                    return (
                        <FoleginLeagueListItem item={item} bgc={color} />

                    )
                })}
            </div>
        </section>
    )
}

export default LeagueofEuropeanNations