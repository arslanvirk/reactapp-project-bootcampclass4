import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./Room.css";
import RoomTemprature from './RoomTemprature'

function Room() {
  const [isLit, setLit] = useState(true);

  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      <h1>The Room is {isLit ? "lit" : "dark"}</h1>
      <br />
      <button className="btn" onClick={() => setLit(true)}>On</button>
      <button className="btn" onClick={() => setLit(false)}>Off</button>
      <br/>
      <RoomTemprature/> 
    </div>
  );
}

export default Room;
