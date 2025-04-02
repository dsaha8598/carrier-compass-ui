import React,{ Component } from "react";

export class UserProfile extends Component{
    render (){
       return (
       <React.StrictMode>
           <div class="flex">
            <div class="flex-1 p-6">
            <div class="bg-white rounded-3xl p-6 w-full max-w-md shadow-lg">
         <div class="flex items-center mb-6">
            <a href="dashbord.html"><i class="fas fa-arrow-right text-xl text-gray-600"> </i> </a>
            <h1 class="text-center flex-grow text-xl font-semibold text-orange-500"> Personal Data </h1>
         </div>
         <div class="flex justify-center mb-6">
            <div class="relative">
					<img alt="user icon" class="h-26 w-26" src="user-icon.png"/>
            </div>
         </div>
         <form>
            <div class="mb-4"> <label class="block text-orange-600 mb-1 font-semibold"> Your Name </label> <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" value="William John Malik"/> </div>
            <div class="mb-4">
               <label class="block text-orange-600 mb-1 font-semibold"> Date of Birth </label> 
               <div class="relative"> <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" type="text" value="24 December 1999"/> <i class="fas fa-chevron-down absolute right-3 top-3 text-gray-400"> </i> </div>
            </div>
            <div class="mb-4"> 
				<label class="block text-orange-600 mb-1 font-semibold"> Email Address </label> 
				<input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-#FFFDD0" type="text" value="Successor Designer"/>
			</div>
            <div class="mb-4">
               <label class="block text-orange-600 mb-1 font-semibold"> Highest Qualification </label> 
               <div class="relative"> <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" value="M.Sc"/> <i class="fas fa-chevron-down absolute right-3 top-3 text-gray-400"> </i> </div>
            </div>
            <div class="mb-4">
               <label class="block text-orange-600 mb-1 font-semibold"> Gender </label> 
               <div class="flex space-x-4"> <label class="flex items-center space-x-2"> <input checked="" class="form-radio text-blue-500" name="gender" type="radio"/> <span class="text-gray-600"> Male </span> </label> <label class="flex items-center space-x-2"> <input class="form-radio text-blue-500" name="gender" type="radio"/> <span class="text-gray-600"> Female </span> </label> </div>
            </div>
         </form>
      </div>
            </div>
           </div>
       </React.StrictMode>
       )
    };
}