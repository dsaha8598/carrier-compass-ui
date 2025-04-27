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
import Quiz from './AfterLoggedInComponents/QuizComponent';
import JobListings from './AfterLoggedInComponents/JobListings';
import PreparationResources from './AfterLoggedInComponents/PreparationResources';
import CareerResources from './AfterLoggedInComponents/CareerResources';
import Test from './Test';
import TermsAndPrivacyModal from './TermsAndPrivacyModal';
import JobOverview from './AfterLoggedInComponents/JobOverview';
import ChatSupport from './AfterLoggedInComponents/ChatSupport ';
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
          <Route path='/test' element={<Test />} />
          <Route path='/terms' element={<TermsAndPrivacyModal />} />

         
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
              <Route
                path='quiz'
                element={
                  <PrivateRoute>
                   <Quiz />
                  </PrivateRoute>
                }
              />
            
            <Route
                path='jobopenings'
                element={
                  <PrivateRoute>
                   <JobListings />
                  </PrivateRoute>
                }
              />
              <Route
                path='resource'
                element={
                  <PrivateRoute>
                   <PreparationResources />
                  </PrivateRoute>
                }
              />
              <Route
                path='vlogs'
                element={
                  <PrivateRoute>
                   <CareerResources />
                  </PrivateRoute>
                }
              />
              <Route
                path='joboverview'
                element={
                  <PrivateRoute>
                   <JobOverview />
                  </PrivateRoute>
                }
              />
              <Route
                path='chat'
                element={
                  <PrivateRoute>
                   <ChatSupport />
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
