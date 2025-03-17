import React, { useState } from "react";
function OptionButton(props){
    function clickHandler(){
        if(props.correct === props.value){ // Mark as correct 
            console.log("Correct") 
            alert("Correct!")
            location.reload();
        } else{ // Mark as Incorrect
            console.log("wrong"); 
            alert("You got it wrong. Try agian!")
            location.reload();

            // i am so sorry for doing such a cheap way to end the quiz, but I genuienly can't find any better ways to do it. I am so sorry for my terrible code. This was hubbled together (continued)
            // in a matter of a couple of days, if you couldn't tell by the millions of commits I have made. I am so sorry for how terrible this is. I understand the basics of React, I guess?
        }
    }

    return (
        <button onClick={clickHandler}>{props.value}</button>
    )
}

export default OptionButton;