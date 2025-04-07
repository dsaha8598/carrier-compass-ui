import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import Login from './LoginPage';
import SignUp from './SignUp';
import ForgotPasswordWithNavigate from './ForgotPassword';
import UserLandingPage from './AfterLoggedInComponents/UserLandingPage';
import Dashbord from './AfterLoggedInComponents/Dashbord';
import { UserProfile } from './AfterLoggedInComponents/UserProfile';
import OtpValidationNavigate from './OTPVerification';
import PasswordUpdateNavigate from './UpdatePassword';
import { AuthProvider } from './AuthContext/AuthContext';
import PrivateRoute from './AuthContext/PrivateRoute';

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<WelcomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgotPassword' element={<ForgotPasswordWithNavigate />} />
          <Route path='/verify/otp' element={<OtpValidationNavigate />} />
          <Route path='/update/password' element={<PasswordUpdateNavigate />} />

         
          {/* Protected Routes inside Layout */}
          <Route path='/home' element={<UserLandingPage />}>
              <Route
                path='dashbord'
                element={
                  <PrivateRoute>
                    <Dashbord />
                  </PrivateRoute>
                }
              />
              <Route
                path='profile'
                element={
                  <PrivateRoute>
                    <UserProfile />
                  </PrivateRoute>
                }
              />
            </Route>
          
        </Routes>
        </AuthProvider>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
