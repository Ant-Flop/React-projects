import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"}
                       render={() => <Dialogs state={props.state}
                       />}/>
                <Route path={"/profiles"}
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}/>}/>
                <Route path={"/news"}
                       render={() => <News/>}/>
                <Route path={"/music"}
                       component={() => <Music/>}/>
            </div>
        </div>
    );
}

export default App;