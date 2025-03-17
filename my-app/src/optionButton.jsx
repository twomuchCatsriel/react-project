import React from "react";

// variables
const ToHide = document.getElementById("ToHide");

function OptionButton(props){
    function clickHandler(){
        if(props.correct === props.value){ // Mark as correct 
            console.log("Correct") 
        } else{ // Mark as Incorrect
            console.log("wrong"); 
        }
    
        ToHide.style.display = "none";
        
    }

    return (
        <button onClick={clickHandler}>{props.value}</button>
    )
}

export default OptionButton;