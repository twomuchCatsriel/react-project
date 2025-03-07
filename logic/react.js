const app = document.getElementById("app");

function Top(){
    return <h1>test</h1>;
}

const root = ReactDOM.createRoot(app);
root.render(<Top/>);