import React from "react";

function OptionButton(props){
    function clickHandler(){
        if(props.correct === props.value){ // Mark as correct 
            console.log("Correct") 
        } else{ // Mark as Incorrect
            console.log("wrong"); 
        }
    }

    return (
        <button onClick={clickHandler}>{props.value}</button>
    )
}

export default OptionButton;