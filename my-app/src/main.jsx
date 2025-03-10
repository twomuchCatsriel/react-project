import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import OpeningText from "./components";

function App()
{
    return (
        <OpeningText/>
    )
}


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>)