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


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
         <Route path='/' Component={WelcomePage}></Route>
         <Route path='/login' Component={Login}></Route>
         <Route path='/signup' Component={SignUp}></Route>
         <Route path='/forgotPassword' Component={ForgotPassword}></Route>
         <Route path='/home' Component={UserLandingPage}></Route>
      </Routes>
      
      </BrowserRouter>
    
 </React.StrictMode>
  );
}

export default App;
