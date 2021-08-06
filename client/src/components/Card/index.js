import React from "react";
import "./style.css";

const Card = props => (
  <a href={props.link} className="Link">
  <div className="card">
    
      <img alt={props.name} src={props.image}/>
      <div className="cardName">{props.name}</div>
      
    
  </div>
  </a>
);

export default Card;
