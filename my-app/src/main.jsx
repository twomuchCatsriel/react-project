import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import "./styles.css";

// Components
import PageTop from "./pageTop";
import QuestionField from "./questionTitle";
import OptionButton from "./optionButton";

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

function App()
{
    return (
        <div>
            <PageTop/>
            <QuestionField/>

            <div id="buttonsDiv">
                <OptionButton value="byee"/>
                <OptionButton value="hiii"/>
            </div>
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>)