import React,{ Component } from "react";
import LoginBackgroundImage from "./images/login-background.png";

export default class Login extends Component{
    render(){
        return (
            <React.StrictMode>
           
   <body class="bg-gray-200">
   <header class="bg-white shadow-md">
         <div class="container mx-auto flex justify-between items-center py-4 px-6">
            <div class="flex items-center"> <img alt="Compass Logo" class="h-10 w-10" height="50" src="https://storage.googleapis.com/a1aa/image/RLb3e9uXSrTC3cYDHFWmqQTIr39KE6mGyV3KjWVY-u4.jpg" width="50"/> <span class="ml-2 text-xl font-bold text-orange-600"> CareerCompas </span> </div>
            <nav class="space-x-6"> <a class="text-orange-600 font-medium" href="/"> Home </a> <a class="text-gray-600 hover:text-orange-600" href="#"> About us </a> <a class="text-gray-600 hover:text-orange-600" href="#"> Services </a> <a class="text-gray-600 hover:text-orange-600" href="#"> Contact us </a> <a class="text-gray-600 hover:text-orange-600" href="#"> Blog </a> </nav>
         </div>
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
                  <p class="text-center text-black-600">Don't have an account? <a href="/carrier-compass-ui/#/signup" class="text-orange-500">REGISTER HERE</a></p>
                  <p class="text-center text-black-600"><a href="/carrier-compass-ui/#/forgotPassword" class="text-orange-500">Forgot Password</a></p>
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
   </body>
            </React.StrictMode>
        );
    }
} 