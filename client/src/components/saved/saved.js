import React from "react";

const Saved = props =>
  
    <li className="list-group-item">
        <h4>
          <a href={props.url} target="_blank">{props.title}
          </a>
        <span className="btn-group pull-right">
          <button className="btn btn-primary" onClick={() => props.deleteArticle(props._id)}>Delete</button>
        </span>
        </h4>
    
      <p>Date Published: {props.date}</p>
    </li>


export default Saved;