import React,{ Component } from "react";
import SideBar from "./SideBar";
import Dashbord from "./Dashbord";
import { Routes,Route, Outlet } from "react-router-dom";


export default class UserLandingPage extends Component{
    render(){
        return (
            <React.StrictMode>
             <div class="flex">
                {/** side bar contenct */}
                <div class="w-64 bg-white h-screen shadow-lg">
                  <SideBar></SideBar>
                </div>
               {/** side bar contenct */}
                <div class="flex-1 p-6">
                 <Dashbord></Dashbord>
                </div>
             </div>
           </React.StrictMode>
        );
    }
} 