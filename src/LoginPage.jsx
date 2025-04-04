import React,{ Component } from "react";
import LoginBackgroundImage from "./images/login-background.png";
import ROUTER_URLS from "./Constants/RouterUrls";
import Logo from "./images/logo.png"

export default class Login extends Component{
    render(){
        return (
            <React.StrictMode>
           
   <div class="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100">
   <header className="absolute top-4 left-4 flex items-center">
                        <img
                            alt="Compass Logo"
                            className="h-10 w-10"
                            height="50"
                            src={Logo}
                            width="50"
                        />
                        <h1 className="text-2xl font-bold ml-3 text-left text-orange-500">
                            CareerCompass
                        </h1>
                    </header>
      <div class="flex items-center justify-center min-h-screen">
         <div class="bg-white rounded-lg shadow-lg flex max-w-4xl w-full">
            <div class="bg-white-600 rounded-l-lg p-8 flex flex-col items-center justify-center w-1/2">
               <img alt="signing in image" src={LoginBackgroundImage} />

            </div>
            <div class="p-8 w-1/2">
               <h2 class="text-2xl font-bold mb-4">Members Log in</h2>
               <p class="text-gray-600 mb-6">Sign in to continue your journey with Us. Let's begin from where you left !!</p>
               <form>
                  <div class="mb-4"> 
                     <label class="block text-gray-700"> 
                        <i class="fas fa-user mr-2"></i> 
                        <input type="text" placeholder="Username" class="border-b-2 border-gray-300 w-full py-2 focus:outline-none focus:border-yellow-500"/>
                     </label> 
                  </div>
                  <div class="mb-4"> 
                     <label class="block text-gray-700"> 
                        <i class="fas fa-lock mr-2"></i> 
                        <input type="password" placeholder="Password" class="border-b-2 border-gray-300 w-full py-2 focus:outline-none focus:border-yellow-500"/>
                     </label> 
                  </div>
                  <div class="flex items-center mb-4"> 
                     <input type="checkbox" id="remember" class="mr-2"/>
                     <label for="remember" class="text-gray-700">Remember Me?</label> 
                  </div>
                  <button class="bg-orange-500 text-white py-2 px-4 rounded-full w-full mb-4">Log In</button> 
                  <p class="text-center text-black-600">Don't have an account? <a href={ROUTER_URLS.SIGN_UP_URL} class="text-orange-500">REGISTER HERE</a></p>
                  <p class="text-center text-black-600"><a href={ROUTER_URLS.FORGOT_PASSWORD_URL} class="text-orange-500">Forgot Password</a></p>
               </form>
               <div class="flex items-center justify-center mt-4"> 
                  <button class="bg-orange-500 text-white py-2 px-4 rounded-full flex items-center"> 
                     <i class="fab fa-facebook-f mr-2"></i> Log in with Social Media 
                  </button> 
               </div>
               <p class="text-center text-gray-600 mt-4">Log in using social media to continue with CareerCompas</p>
            </div>
         </div>
      </div>
   </div>
            </React.StrictMode>
        );
    }
} 