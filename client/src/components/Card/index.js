import React from "react";
import "./style.css";

const Card = props => (
  <div className="card">
    
      <img alt={props.name} src={props.image}/>
      <div className="cardName">{props.name}</div>
      
    
  </div>
);

export default Card;
