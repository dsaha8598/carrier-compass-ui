import React,{ Component } from "react";
import forgotpasswordimage from "./images/forgot-password-background.png";

export default class ForgotPassword extends Component{
    render(){
        return (
            <React.StrictMode>
          
   <body class="bg-gray-100 flex items-center justify-center min-h-screen">
   <header class="absolute top-4 left-4 flex items-center">
         <img alt="Compass Logo" class="h-10 w-10" height="50" src="https://storage.googleapis.com/a1aa/image/RLb3e9uXSrTC3cYDHFWmqQTIr39KE6mGyV3KjWVY-u4.jpg" width="50"/>
         <h1 class="text-2xl font-bold ml-3 text-left text-orange-500"> CareerCompass </h1>
      </header>
      <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
         <div class="flex justify-center mb-4"> <img alt="Illustration of a girl with her hands on her cheeks looking worried" class="w-30 h-30"  src={forgotpasswordimage} /> </div>
         <h1 class="text-2xl font-bold text-center mb-4 text-gray-800"> Forgot password </h1>
		 <p class="text-xl font-italic text-center mb-4 text-gray-800">No worries, Submit your email to reset your password</p>
         <form>
            <div class="mb-4"> <label class="block text-sm  text-orange-600 mb-1 font-semibold" for="email"> Email </label> <input class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="email" placeholder="Your email id" type="email"/> </div>
            <div class="flex justify-center"> <button class="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" type="submit"> Submit </button> </div>
         </form>
         <div class="mt-4 text-center"> <a class="text-sm text-orange-500 hover:text-gray-900" href="/carrier-compass-ui/login"> Back to login </a> </div>
      </div>
   </body>
            </React.StrictMode>
        );
    }
} 