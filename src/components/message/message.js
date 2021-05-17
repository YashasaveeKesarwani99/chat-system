import React from 'react';
import './message.css'
const Message = ({message:{user,text}, name})=>{
    let isSentByCurrentUser = false;

    const trimName = name.trim().toLowerCase();

    if(user === trimName)
    {
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser
        ?(
            <div>
                <div className="userText">
                    <p>{text}</p>
                </div>
                <p className="userName">{trimName}</p>
            </div>
        )
        :(
        <div>
            <div className="adminText" >

                <p>{text}</p>
            </div>
            <p className="adminName">{user}</p>
        </div>
        )
    )
}

export default Message;