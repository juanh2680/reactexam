import React from 'react';

function Expert(props) {
    return (
        <div className="expert">
          <p> Choose a number from 1-100 </p>
          <input type="text" id="userInput" name="comment" value="" />
          <input type="submit" value="Submit"/>
        </div>
    );
}
export default Expert;
