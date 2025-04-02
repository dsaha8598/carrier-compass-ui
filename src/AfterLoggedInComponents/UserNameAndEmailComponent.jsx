import React,{ Component } from "react";

export class UserNameAndEmail extends Component{
    render (){
       return (
       <React.StrictMode>
           <div class="flex justify-between items-center mb-6">
               <div class="relative"> <input class="pl-10 pr-4 py-2 rounded-full bg-gray-200 focus:outline-none" placeholder="Search" type="text"/> <i class="fas fa-search absolute left-3 top-3 text-gray-500"> </i> </div>
               <div class="flex items-center">
                  <i class="fas fa-bell text-gray-600 mr-6"> </i> 
                  <div class="flex items-center" >
                     <a href="profile-section.html"><i  class="fas fa-user-circle text-orange-500 text-3xl mr-3"></i></a>
                     <div>
                        <p class="text-gray-800 font-semibold"> Jane Cooper </p>
                        <p class="text-gray-500 text-sm"> jane234@example.com </p>
                     </div>
                  </div>
               </div>
            </div>
       </React.StrictMode>
       )
    };
}