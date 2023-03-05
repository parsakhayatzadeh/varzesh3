import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Leagues = ({ data , name }) => {
    const [team, setTeam] = useState(data);
    const [showList, setShowList] = useState(team.filter((e) => e.league == "لیگ برتر اینگلیس"));
    const leagues = [... new Set(team.map((item) => item.league))]; 
    const [title , setTitle] = useState("لیگ برتر اینگلیس")
    

    const changeLeague = (item) => {
        const newVal = item.target.value;
        setShowList(team.filter((e) => e.league == newVal))
        setTitle(newVal)
    }
    return (
        <div className='league-section item-radius'>
            <h4>{name}</h4>
            <select value={team.league} onChange={changeLeague}>
                {leagues.map((item) => {
                    return (
                        <option value={item}>{item}</option>
                    )
                })}

            </select>
            <div className='show-list-head'>
                <p>{title}</p>
            </div>
            <div className='item-name'>
                <p className='rank font-homa' >رتبه</p>
                <p className='team font-homa'>تیم</p>
                <p className='game font-homa'>بازی</p>
                <p className='point font-homa'>امتیاز</p>

            </div>
            {showList.sort((a, b) => b.point - a.point).map((item, Itemindex) => {
                const [color, setColor] = useState();
                const changeColor = () => {
                    if ((Itemindex % 2) == 0) {
                        setColor("gray")

                    } else {
                        setColor("white")
                    }
                }
                useEffect(() => {
                    changeColor()
                }, [color])
                return (
                    <section className={`item-league ${color}`}>
                        <p className={`rank font-homa`} >{Itemindex + 1}</p>
                        <p className={`team font-homa`}>{item.name}</p>
                        <p className={`game font-homa`}>{item.game}</p>
                        <p className={`point font-homa`}>{item.point}</p>
                    </section>
                )
            })}
        </div>
    )
}

export default Leagues