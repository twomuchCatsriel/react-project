import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import "./styles.css";

// Components
import PageTop from "./pageTop";
import QuestionField from "./questionTitle";
import OptionButton from "./optionButton";


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