import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import "./styles.css";

// Components
import PageTop from "./pageTop";
import QuestionField from "./questionTitle";
import OptionButton from "./optionButton";
import Yippie from "./img";

// Questions
const questions = [
    {
        question: "When was JavaScript created",
        answerRight: "The 4th of December, 1995",
        answerLeft: "The 12th September, 2001"
    },
    {
        question: "When was REACT created?",
        answerRight: "The 29th of May 2013",
        answerLeft: "The 17th of May 2013"
    }
]

// Functions
function chooseQuestion(){
    let pick = Math.floor(Math.random() * questions.length);

    return pick
}

// Global Variables 
let currentQuestion = chooseQuestion();
let questionString = questions[currentQuestion].questionString;
let option1String;
let option2String;

// Other Functions
function setQuestions(){
    let pickStart = Math.floor(Math.random() * 2);
    
    questionString = questions[currentQuestion].question
    if(pickStart === 0){
        option1String = questions[currentQuestion].answerLeft
        option2String = questions[currentQuestion].answerRight
    } else{
        option1String = questions[currentQuestion].answerRight
        option2String = questions[currentQuestion].answerLeft
    }
}


// React Stuff
function App()
{
    return (
        <div>
            <PageTop/>
            <QuestionField question={questionString = questions[currentQuestion].question}/>

            <div id="buttonsDiv">
                {setQuestions()}
                <OptionButton value={option1String}/>
                <OptionButton value={option2String}/>
                <Yippie/>
            </div>
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>)