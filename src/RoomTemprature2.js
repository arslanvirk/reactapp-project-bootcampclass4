import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./Room.css";

function RoomTemprature2(props) {
  
    return (
      <div>
          <h4>Temp: {props.setRoomTemperature.roomtemperature}</h4>
        <button className="btn" onClick={() => props.setRoomTemperature.setRoomTemperature(++props.setRoomTemperature.roomtemperature)}>Room2 +</button>
      </div>
    );
  }
  
  export default RoomTemprature2;
  