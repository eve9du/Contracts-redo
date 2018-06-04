import React from "react";

const Display = props => {
  return (
    <div className="wrapper">
      <ul>
        {props.items.map(item => {
          return (
            <li key={item.id}>
              <h2>Contract:</h2>
              <h5>Name: {item.name}</h5>
              <h5>Company: {item.company}</h5>
              <h5>Contract Details:{item.contract}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Display;
