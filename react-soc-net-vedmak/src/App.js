import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <div className={"wrapper"}>
            <Header/>
            <Sidebar/>
            <Main/>
        </div>
    );
}

export default App;
