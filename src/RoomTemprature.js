import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./Room.css";
import RoomTemprature2 from "./RoomTemprature2"

function RoomTemprature() {
    let [roomtemperature, setRoomTemperature] = useState(72);
  
    return (
      <div>
        <h1>Room Temperature is {roomtemperature} °F</h1>
        <br />
        <button className="btn" onClick={() => setRoomTemperature(++roomtemperature)}>+</button>
        <button className="btn" onClick={() => setRoomTemperature(--roomtemperature)}>-</button>
        <br/>
        <RoomTemprature2 setRoomTemperature = {{setRoomTemperature,roomtemperature}}/> 
      </div>
    );
  }
  
  export default RoomTemprature;
  