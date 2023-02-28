import React from 'react'
import { BsInfoCircle, BsPlayCircleFill } from "react-icons/bs"

const FoleginLeagueListItem = ({bgc ,item}) => {
   
    
    const back = {
        backgroundColor : bgc
    }
   
    
    return (

        <section id='p' className='show-list' style={back}   >
            <BsInfoCircle />
            <div className='result'>
                <p>{item.team1}</p>
                <p>{item.result}</p>
                <p>{item.team2}</p>
            </div>
            <BsPlayCircleFill className='play-icon' />
        </section>
    )
}

export default FoleginLeagueListItem