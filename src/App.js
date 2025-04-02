import logo from './logo.svg';
import './App.css';
import React from 'react';
import WelcomePage from './WelcomePage';
import Login from './LoginPage';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import UserLandingPage from './AfterLoggedInComponents/UserLandingPage';
import Dashbord from './AfterLoggedInComponents/Dashbord';
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';
import SideBar from './AfterLoggedInComponents/SideBar';
import { UserNameAndEmail } from './AfterLoggedInComponents/UserNameAndEmailComponent';
import { UserProfile } from './AfterLoggedInComponents/UserProfile';


function App() {
  return (
    <React.StrictMode>
      <HashRouter >
      <div className="flex">
        <SideBar></SideBar>
        <div className="flex-1 p-4">
        <UserNameAndEmail></UserNameAndEmail>
      <Routes>
         <Route path='/' exact Component={WelcomePage}></Route>
         <Route path='/login' exact Component={Login}></Route>
         <Route path='/signup' exact Component={SignUp}></Route>
         <Route path='/forgotPassword' exact Component={ForgotPassword}></Route>
         <Route path='/home' exact Component={UserLandingPage}></Route>
         <Route path='/dashbord' exact Component={Dashbord}></Route>
         <Route path='/profile' exact Component={UserProfile}></Route>
      </Routes>
      </div>
      </div>
      </HashRouter>
    
 </React.StrictMode>
  );
}

export default App;
