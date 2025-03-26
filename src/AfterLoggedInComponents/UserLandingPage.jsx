import React,{ Component } from "react";
import Logo from "../images/logo.png";
import Dashbord from "./Dashbord";
import {Route, BrowserRouter, Routes } from "react-router-dom";


export default class UserLandingPage extends Component{
    render(){
        return (
            <React.StrictMode>
           <body class="bg-gray-100">
      <div class="flex">
         {/**side bar */}
         <div class="w-64 bg-white h-screen shadow-lg">
            <div class="p-6">
               <div class="flex items-center mb-6"> 
					<img alt="Compass Logo" class="h-10 w-10" height="50" src={Logo} width="50"/>
					<h1 class="text-xl font-bold ml-3 text-left text-orange-600"> CareerCompass </h1>
				</div>
               <nav>
                  <ul>
                     <li class="mb-4"> <a class="flex items-center text-orange-600 nav-item" href="/dashbord"> <i class="fas fa-th-large mr-3"> </i> <span> Dashboard </span> </a> </li>
					 <li class="mb-4"> <a class="flex items-center text-gray-600 nav-item" href="#"> <i class="fas fa-briefcase mr-3"> </i> <span> Career Explorer </span> </a> </li>
					 <li class="mb-4"> <a class="flex items-center text-gray-600 nav-item" href="#"> <i class="fas fa-user-tie mr-3"> </i> <span> Job Listings </span> </a> </li>
					 <li class="mb-4"> <a class="flex items-center text-gray-600 nav-item" href="#"> <i class="fas fa-blog mr-3"> </i> <span> Career News & Blogs </span> </a> </li>
                     <li class="mb-4"> <a class="flex items-center text-gray-600 nav-item" href="#"> <i class="fas fa-lightbulb mr-3"> </i> <span> Skill Hub </span> </a> </li>
					 <li class="mb-4"> <a class="flex items-center text-gray-600 nav-item" href="#"> <i class="fas fa-chart-line mr-3"> </i> <span> Preparation Resources </span> </a> </li>
					 <li class="mb-4"> <a class="flex items-center text-gray-600 nav-item" href="#" onclick="toggleChatWindow()"> <i class="fas fa-cog mr-3"> </i> <span> Setting </span> </a> </li>
                     <li class="mb-4"> <a class="flex items-center text-gray-600 nav-item" href="#"> <i class="fas fa-question-circle mr-3"> </i> <span> Help </span> </a> </li>
                  </ul>
               </nav>
            </div>
            <div class="absolute bottom-0 p-6"> <button class="bg-orange-600 text-white px-4 py-2 rounded-full"> Log Out </button>  </div>
         </div>
         {/**main content*/}
         <div class="flex-1 p-6">
          
          <Dashbord></Dashbord>
          
         </div>
      </div>

      <div class="chat-window" id="chat-window">
      <div class="chat-header">
         <h3> Chat Bot </h3>
      </div>
      <div class="chat-body">
      <p> Hello! How can I assist you today? </p>
         </div>
         <input class="chat-input" placeholder="Type a message..." type="text"/> 
      </div>
	   <footer class="bg-gray-800 text-white py-8">
         <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center space-x-4"> <a class="text-gray-400 hover:text-white" href="#"> <i class="fab fa-facebook-f"> </i> </a> <a class="text-gray-400 hover:text-white" href="#"> <i class="fab fa-twitter"> </i> </a> <a class="text-gray-400 hover:text-white" href="#"> <i class="fab fa-linkedin-in"> </i> </a> <a class="text-gray-400 hover:text-white" href="#"> <i class="fab fa-instagram"> </i> </a> </div>
            <div class="mt-4 md:mt-0">
               <p class="text-gray-400"> © 2023 CareerCompas. All rights reserved. </p>
            </div>
         </div>
      </footer>
	  
	  
   </body>
   
            </React.StrictMode>
        );
    }
} 