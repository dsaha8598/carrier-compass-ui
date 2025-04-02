import React,{ Component } from "react";
import Logo from "../images/logo.png";
import Dashbord from "./Dashbord";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";


export default class SideBar extends Component{
    render(){
        return (
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
					      <li class="mb-4"> 
                        <a class="flex items-center text-gray-600 nav-item" >
                              <i class="fas fa-briefcase mr-3"> </i>
                                 <span>
                                 <NavLink
                                    to="/carrier-compass-ui/#/dashbord"
                                    className="nav-link"
                                    activeClassName="active"
                                    exact={true}
                                 > Dashboard
                                 </NavLink>
                              </span>
                        </a> 
                     </li>
                     <li class="mb-4"> 
                        <a class="flex items-center text-gray-600 nav-item" >
                              <i class="fas fa-briefcase mr-3"> </i>
                                 <span>
                                 <NavLink
                                    to="/carrier-compass-ui/#/dashbord"
                                    className="nav-link"
                                    activeClassName="active"
                                    exact={true}
                                 > Career Explorer 
                                 </NavLink>
                              </span>
                        </a> 
                     </li>
                     <li class="mb-4"> 
                        <a class="flex items-center text-gray-600 nav-item" >
                              <i class="fas fa-briefcase mr-3"> </i>
                                 <span>
                                 <NavLink
                                    to="/carrier-compass-ui/#/profile"
                                    className="nav-link"
                                    activeClassName="active"
                                    exact={true}
                                 > Job Listings
                                 </NavLink>
                              </span>
                        </a> 
                     </li>
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
        
      </div>
        );
    }
} 