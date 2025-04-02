import logo from './logo.svg';
import './App.css';
import React from 'react';
import WelcomePage from './WelcomePage';
import Login from './LoginPage';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import UserLandingPage from './AfterLoggedInComponents/UserLandingPage';
import Dashbord from './AfterLoggedInComponents/Dashbord';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SideBar from './AfterLoggedInComponents/SideBar';
import { UserNameAndEmail } from './AfterLoggedInComponents/UserNameAndEmailComponent';
import { UserProfile } from './AfterLoggedInComponents/UserProfile';


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <div className="flex">
        <SideBar></SideBar>
        <div className="flex-1 p-4">
        <UserNameAndEmail></UserNameAndEmail>
      <Routes>
         <Route path='/' Component={WelcomePage}></Route>
         <Route path='/login' Component={Login}></Route>
         <Route path='/signup' Component={SignUp}></Route>
         <Route path='/forgotPassword' Component={ForgotPassword}></Route>
         <Route path='/home' Component={UserLandingPage}></Route>
         <Route path='/dashbord' Component={Dashbord}></Route>
         <Route path='/profile' Component={UserProfile}></Route>
      </Routes>
      </div>
      </div>
      
      </BrowserRouter>
    
 </React.StrictMode>
  );
}

export default App;
