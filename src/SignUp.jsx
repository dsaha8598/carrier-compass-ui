import React,{ Component } from "react";
import SignupBackgroundImage from "./images/signup-image.png"
import ROUTER_URLS from "./Constants/RouterUrls";

export default class SignUp extends Component{
    render(){
        return (
            <React.StrictMode>
        
   <body class="bg-gray-100 flex items-center justify-center min-h-screen">
      <header class="absolute top-4 left-4 flex items-center">
         <img alt="Compass Logo" class="h-10 w-10" height="50" src="https://storage.googleapis.com/a1aa/image/RLb3e9uXSrTC3cYDHFWmqQTIr39KE6mGyV3KjWVY-u4.jpg" width="50"/>
         <h1 class="text-2xl font-bold ml-3 text-left text-orange-500"> CareerCompass </h1>
      </header>
      <div class="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-3xl w-full flex flex-col md:flex-row items-center mt-16">
         <div class="w-full md:w-1/2 flex flex-col items-start">
            <div class="flex items-top mb-6 md:w-1/2">
               <p>Congratulations on taking your first step with us.</p>
            </div>
            <img alt="Illustration of a girl filling form" class="w-3/4 md:w-full object-cover" height="400" src={SignupBackgroundImage} width="400"/>
         </div>
         <div class="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h2 class="text-3xl font-bold mb-6"> Create an account </h2>
            <form>
               <div class="mb-4"> <label class="block text-gray-700" for="name"> Name </label> <input class="w-full p-3 border rounded-lg mt-1" id="name" type="text" value=""/> </div>
               <div class="mb-4"> <label class="block text-gray-700" for="email"> Email Address </label> <input class="w-full p-3 border rounded-lg mt-1" id="email" type="email" value=""/> </div>
               <div class="mb-4"> <label class="block text-gray-700" for="password"> Password </label> <input class="w-full p-3 border rounded-lg mt-1" id="password" type="password" value=""/> </div>
               <div class="mb-6"> <label class="block text-gray-700" for="confirm-password"> Confirm Password </label> <input class="w-full p-3 border rounded-lg mt-1" id="confirm-password" type="password" value=""/> </div>
               <div class="flex items-center justify-between mb-6"> <button class="bg-orange-600 text-white py-3 px-6 rounded-lg font-bold" type="submit"> REGISTER </button> </div>
               <div class="flex items-center mb-6"> <input class="mr-2" id="terms" type="checkbox"/> <label class="text-gray-600 text-sm" for="terms"> By registering your details, you agree with our <a class="text-orange-500" href="#"> Terms &amp; Conditions </a> , and <a class="text-orange-500" href="#"> Privacy and Cookie Policy </a> . </label> </div>
            </form>
            <div class="mt-6 text-center">
               <p class="text-gray-700"> Already have an account with us? </p>
               <a class="text-orange-600 font-bold mt-2" href={ROUTER_URLS.LOGIN_URL}> SIGN IN </a> 
            </div>
         </div>
      </div>
   </body>
            </React.StrictMode>
          );
    }
} 