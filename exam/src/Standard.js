import React from 'react';

function Standard(props) {
    /*  var newNumber = event.target.value;
    var randomNumber= Math.floor(Math.random() * 10) + 1; 
    if (newNumber== randomNumber ) {
        alert ('Congrats you have guessed the right number');
    }
    */
        return (
        <div className="standard">
          <p> Choose a number from 1-10 </p>
          <input type="text" id="userInput" name="comment" value=""  />
          <input type="submit" value="Submit" />
        </div>
        );
}
export default Standard;
