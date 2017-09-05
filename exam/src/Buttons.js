import React from 'react';
import App from './App';


function Buttons(props) {
    return (
        <div className="buttons">
          <button onClick={props.handleClick}>Standard</button>
          <button onClick={props.handleClick}>Expert</button>
        </div>
    );
}
export default Buttons; 
