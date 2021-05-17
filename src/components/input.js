import React from 'react'
import {useEffect, useState} from 'react'


const Input = ({message, setMessage,sendMessage}) =>{
    return(
       <div>
        <form>
            <input type="text" placeholder="type a message.."
             value={message}
             onChange={(event)=>setMessage(event.target.value)}
             onKeyPress={ event=> event.key === 'Enter'? sendMessage(event): null}
        />
        <button onClick={(event)=>sendMessage(event)}>Send</button>
        </form>
        </div>
    )
}

export default Input;
