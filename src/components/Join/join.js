import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './join.css';

const Join = () =>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    const nameHandler = (e) =>{
        setName(e);
    }

    const roomHandler = (e) =>{
        setRoom(e);
    }

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Enter name</label>
                    <div>
                    <input 
                    id="exampleInputEmail1"
                    placeholder="name"
                    className="joinInput"
                    className="form-control" 
                    type="text" onChange={(e)=>nameHandler(e.target.value)}/>
                    </div>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Room Name</label>
                    <div>
                    <input placeholder="room"
                    className="joinInput"
                    aria-describedby="emailHelp"
                    type="text" 
                    id="exampleInputEmail1"
                    className="form-control"
                    onChange={(e)=>roomHandler(e.target.value)}/>
                    </div>
                </div>
                <Link onClick={(e)=>(!name || !room)?e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="btn btn-primary" type="submit">Sign In</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Join;