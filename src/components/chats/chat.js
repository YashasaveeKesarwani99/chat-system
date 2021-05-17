import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'
import InfoBar from '../infoBar/infoBar';
import Input from '../input'
import Messages from '../messages'
import './chat.css'

let socket;

const Chat = () =>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:8080'
    useEffect(()=>{
        const {name, room} = queryString.parse(window.location.search);
 
        socket = io(ENDPOINT)

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room} )

        return () =>{
            socket.emit('disconnect');

            socket.off();
        }
    },[ENDPOINT, window.location.search])

    //handling messages
    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessages([...messages, message])
        }, [messages])
    })
    
    //function for sending messages

    const sendMessage = (event) =>{
        event.preventDefault();
        
        if(message)
        {
            socket.emit('sendMessage', message, ()=>setMessage(''))
        }
    }

    console.log(message, messages)

    return(
        <div className="chatOuter">
            <div className="chatInner">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message}  setMessage={setMessage}
                sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat;