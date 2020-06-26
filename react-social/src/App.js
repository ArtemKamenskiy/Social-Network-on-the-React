import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="app-container">
                    <Navbar/>
                    <div className='page-container'>
                        <Route path='/profile' render={ () => <Profile posts={props.state.profilePage.posts} info={props.state.profilePage.profileInfo} newPost={props.newPost}/> } />
                        <Route path='/dialogs'  render={ () => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.messagesPage.messageObj}/>} />
                        <Route path='/news'  render={ () => <News/>} />
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
