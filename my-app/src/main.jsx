import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import "./styles.css";

// Components
import PageTop from "./pageTop";
import QuestionField from "./questionTitle";


function App()
{
    return (
        <div>
            <PageTop/>
            <QuestionField/>
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>)