import React from "react";

function OptionButton(props){
    function clickHandler(){
        console.log(props.value);
    }

    return (
        <button onClick={clickHandler}>{props.value}</button>
    )
}

export default OptionButton;