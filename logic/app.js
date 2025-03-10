import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

function app(){
    return (
        <h1>test</h1>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(app);