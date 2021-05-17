import React from 'react'
import closeIcon from '../icons/closeIcon.png'
import onlineIcon from '../icons/onlineIcon.png'
import './infoBar.css'

const InfoBar = ({room}) =>{

    return(
        <div className="infoBarOuterClass">
            <div className="infoBarInnerClass bg-primary">
                <img src={onlineIcon} alt="online icon" style={{height:'10px',width:'10px', margin:"auto 0"}}/>
                <h3>{room}</h3>
                <div style={{margin:"auto 0"}}>
                <a href='/'><img src={closeIcon} alt="close image"/></a>
            </div>
            </div>
        </div>
    )
}

export default InfoBar;