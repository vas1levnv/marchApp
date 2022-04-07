import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                <Route path='/dialogs' element={<DialogsContainer/>}/>
                <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                <Route path='/users' element={<UsersContainer/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
