import React from "react";

const Results = props =>
    <li className="list-group-item">
      <h4>
          {props.title}
        <span className="btn-group pull-right">
          <a href={props.url} target="_blank">
          </a>
          <button className="btn btn-primary" onClick={() => props.handleSavedButton(props._id)}>Save</button>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>


export default Results;