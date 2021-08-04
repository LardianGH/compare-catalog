import React from "react";
import "./style.css";

const Card = props => (
  <div className="card">
    <div className="img-container" onClick={() => props.soundSetup(props.sound)} /* When you click a card, call soundSetup() in browse.js*/ >
      <img alt={props.name} src={props.image}/>
      <div className="soundName">{props.name}</div>
    </div>
    <div>
      <div className="content">
      <div  className="soundDate">Uploaded: {props.uploadDate}</div>
       <div  className="soundUploader">Uploaded by: {props.user}</div> 
         <a href={props.sound} download={props.name}>Download .{props.fileType}</a>
         {/* Wont change name because not of same origin, must use javascript solution */}
      </div>
    </div>
  </div>
);

export default Card;
