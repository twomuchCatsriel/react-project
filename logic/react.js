const app = document.getElementById("app");

function Header(props){
    console.log(props.title);
    return <h1>This is a thing</h1>;
}

function Top(){
    return (
        <Header title="HeaderTitle"/>
    )
}

const root = ReactDOM.createRoot(app);
root.render(<Top/>);