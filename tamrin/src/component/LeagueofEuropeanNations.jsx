import React, { useEffect, useState } from 'react'
import EuropeanNationsAgruop from '../datas/EuropeanNationsAgruop ';
import EuropeanNationsBgruop from '../datas/EuropeanNationsBgruop';
import FoleginLeagueListItem from './FoleginLeagueListItem';

const LeagueofEuropeanNations = () => {
    const [a, setA] = useState(EuropeanNationsAgruop.filter((e) => e.week == 1));
    const [b, setB] = useState(EuropeanNationsBgruop.filter((e) => e.week == 1))
    const [showList, setShowList] = useState(a);
    const [league, setLeague] = useState("A")

    const items = [... new Set(a.map((item) => item.week))];

    const leagues = ["A", "B"]
    const changeLeague = (item) => {
        const newVal = item.target.value;
        setLeague(newVal);
        if (newVal == "A") {

            setShowList(a)

        } else if (newVal == "B") {
            setShowList(b)
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
                            setColor("#d9d9d9")

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