import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { useState } from "react";

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
    },
    {
        question: "When was C# created?",
        answerRight: "In July of 2000",
        answerLeft: "In August of 1997"
    },
    {
        question: "What year was Python first released?",
        answerRight: "1991",
        answerLeft: "1989"
    },
    {
        question: "Which programming language was designed by Dennis Ritchie?",
        answerRight: "C",
        answerLeft: "C++"
    },
    {
        question: "Which language is known as the 'mother of all languages'?",
        answerRight: "C",
        answerLeft: "Assembly"
    },
    {
        question: "When was PHP released?",
        answerRight: "1995",
        answerLeft: "1998"
    },
    {
        question: "Who created Ruby?",
        answerRight: "Yukihiro Matsumoto",
        answerLeft: "James Gosling"
    },
    {
        question: "Which language is primarily used for iOS development?",
        answerRight: "Swift",
        answerLeft: "Java"
    },
    {        
        question: "What is a popular programming language for Android development?",
        answerRight: "Kotlin",
        answerLeft: "Swift"
    },    
    {
        question: "Which programming language runs in the JVM?",
        answerRight: "Java",
        answerLeft: "C"
    },
    {
        question: "What was the first high-level programming language?",
        answerRight: "Fortran",
        answerLeft: "COBOL"
    },
    {
        question: "Which language is commonly used for AI and machine learning?",
        answerRight: "Python",
        answerLeft: "C++"
    },
    {
        question: "What does 'CSS' stand for?",
        answerRight: "Cascading Style Sheets",
        answerLeft: "Computer Styling System"
    },
    {
        question: "Which language is mainly used for web development?",
        answerRight: "JavaScript",
        answerLeft: "Python"
    }

    // thanks ChatGPT for most of the questions. Only the initial 3 are written by me <3
    
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
        <div id="questionsPage">
            <PageTop/>
            <QuestionField question={questionString = questions[currentQuestion].question}/>

            <div id="buttonsDiv">
                {setQuestions()}
                <OptionButton value={option1String} correct={questions[currentQuestion].answerRight}/>
                <OptionButton value={option2String} correct={questions[currentQuestion].answerRight}/>
                <Yippie/>
            </div>
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>)