import React from "react";

const Saved = props =>
  // <div className="container">
    <li className="list-group-item">
      
        <span className="btn-group pull-right">
          <a href={props.url} target="_blank"> <h4>{props.title}</h4>
            {/* <button className="btn btn-default ">View Article</button> */}
          </a>
          <button className="btn btn-primary" onClick={() => props.deleteArticle(props._id)}>Delete</button>
        </span>
    
      <p>Date Published: {props.date}</p>
    </li>
  // </div>

export default Saved;