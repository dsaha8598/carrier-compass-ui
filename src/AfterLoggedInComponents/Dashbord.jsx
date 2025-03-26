import React,{ Component } from "react";
import DikshaImage from "../images/Diksha.png";

export default class Dashbord extends Component{
    render(){
        return (
            <React.StrictMode>

         <div class="flex-1 p-6">
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
			<section class="bg-white py-16">
         <div class="container mx-auto flex flex-col md:flex-row items-center bg-white">
		    <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center"> <img alt="Animated student looking through books and searching for a job" height="300" src={DikshaImage} width="400"/> </div>
            <div class="md:w-1/2">
               <h1 class="text-4xl font-bold text-gray-800"> <a>Welcome onboard,</a> <a class="ml-4 text-orange-600">  Dipak Kumar! 🚀 </a>  </h1>
               <p class="mt-4 text-gray-600"> I’m Diksha, your career guide from Career Compass. I’ve crafted a personalized dashboard just for you, based on your skills and interests. 🌟 You can explore new skills, add them to your profile, and unlock more job recommendations tailored to your growth. </p>
               <p class="mt-4 text-gray-600"> Stay ahead of the curve by diving into insightful blogs, the latest industry news, and market trends. Let’s navigate your career path together—buckle up and explore! 🚀✨ </p>
            </div>
         </div>
      </section>
            <div class="flex justify-between items-center mb-6">
               <h1 class="text-2xl font-bold text-gray-800"> Dashboard </h1>
               <button class="bg-blue-600 text-white px-4 py-2 rounded-full"> Monthly </button> 
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
               <div class="bg-white p-6 rounded-lg shadow">
                  <div class="flex justify-between items-center mb-4">
                     <h2 class="text-gray-600"> Total Order </h2>
                     <i class="fas fa-ellipsis-h text-gray-400"> </i> 
                  </div>
                  <div class="flex items-center">
                     <h3 class="text-3xl font-bold text-gray-800 mr-4"> 354478 </h3>
                     <div class="flex items-center text-green-500"> <i class="fas fa-arrow-up mr-1"> </i> <span> 5.2% </span> </div>
                  </div>
                  <div class="mt-4">
                     <div class="w-16 h-16 rounded-full border-4 border-orange-500 flex items-center justify-center"> <span class="text-orange-500"> 75% </span> </div>
                  </div>
               </div>
               <div class="bg-white p-6 rounded-lg shadow">
                  <div class="flex justify-between items-center mb-4">
                     <h2 class="text-gray-600"> Total Sales </h2>
                     <i class="fas fa-ellipsis-h text-gray-400"> </i> 
                  </div>
                  <div class="flex items-center">
                     <h3 class="text-3xl font-bold text-gray-800 mr-4"> $10890.00 </h3>
                     <div class="flex items-center text-green-500"> <i class="fas fa-arrow-up mr-1"> </i> <span> 7.4% </span> </div>
                  </div>
                  <div class="mt-4">
                     <div class="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center"> <span class="text-green-500"> 80% </span> </div>
                  </div>
               </div>
               <div class="bg-white p-6 rounded-lg shadow">
                  <div class="flex justify-between items-center mb-4">
                     <h2 class="text-gray-600"> Total Revenue </h2>
                     <i class="fas fa-ellipsis-h text-gray-400"> </i> 
                  </div>
                  <div class="flex items-center">
                     <h3 class="text-3xl font-bold text-gray-800 mr-4"> $1633.50 </h3>
                     <div class="flex items-center text-red-500"> <i class="fas fa-arrow-down mr-1"> </i> <span> 1.0% </span> </div>
                  </div>
                  <div class="mt-4">
                     <div class="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center"> <span class="text-blue-500"> 30% </span> </div>
                  </div>
               </div>
               <div class="bg-white p-6 rounded-lg shadow">
                  <div class="flex justify-between items-center mb-4">
                     <h2 class="text-gray-600"> Total Customer </h2>
                     <i class="fas fa-ellipsis-h text-gray-400"> </i> 
                  </div>
                  <div class="flex items-center">
                     <h3 class="text-3xl font-bold text-gray-800 mr-4"> 4478 </h3>
                     <div class="flex items-center text-red-500"> <i class="fas fa-arrow-down mr-1"> </i> <span> 0.5% </span> </div>
                  </div>
                  <div class="mt-4">
                     <div class="w-16 h-16 rounded-full border-4 border-purple-500 flex items-center justify-center"> <span class="text-purple-500"> 62% </span> </div>
                  </div>
               </div>
               <div class="bg-white p-6 rounded-lg shadow">
                  <div class="flex justify-between items-center mb-4">
                     <h2 class="text-gray-600"> Total Product </h2>
                     <i class="fas fa-ellipsis-h text-gray-400"> </i> 
                  </div>
                  <div class="flex items-center">
                     <h3 class="text-3xl font-bold text-gray-800 mr-4"> 54747560 </h3>
                     <div class="flex items-center text-green-500"> <i class="fas fa-arrow-up mr-1"> </i> <span> 0.75% </span> </div>
                  </div>
                  <div class="mt-4">
                     <div class="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center"> <span class="text-green-500"> 84% </span> </div>
                  </div>
               </div>
               <div class="bg-white p-6 rounded-lg shadow">
                  <div class="flex justify-between items-center mb-4">
                     <h2 class="text-gray-600"> Total Cost </h2>
                     <i class="fas fa-ellipsis-h text-gray-400"> </i> 
                  </div>
                  <div class="flex items-center">
                     <h3 class="text-3xl font-bold text-gray-800 mr-4"> $44.90 </h3>
                     <div class="flex items-center text-green-500"> <i class="fas fa-arrow-up mr-1"> </i> <span> 1.0% </span> </div>
                  </div>
                  <div class="mt-4">
                     <div class="w-16 h-16 rounded-full border-4 border-red-500 flex items-center justify-center"> <span class="text-red-500"> 70% </span> </div>
                  </div>
               </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div class="bg-white p-6 rounded-lg shadow">
                  <div class="flex justify-between items-center mb-4">
                     <h2 class="text-gray-600"> Revenue (Weekly) </h2>
                     <i class="fas fa-ellipsis-h text-gray-400"> </i> 
                  </div>
                  <img alt="Bar chart showing weekly revenue" height="200" src="https://storage.googleapis.com/a1aa/image/_aXivCj6GPN9_lkW26VmJWlsmPrx4fO83LgRfz5dFgU.jpg" width="400"/> 
               </div>
               <div class="bg-white p-6 rounded-lg shadow">
                  <div class="flex justify-between items-center mb-4">
                     <h2 class="text-gray-600"> Analytics Breakdown </h2>
                     <i class="fas fa-ellipsis-h text-gray-400"> </i> 
                  </div>
                  <img alt="Pie chart showing analytics breakdown" height="200" src="https://storage.googleapis.com/a1aa/image/QJs0CFfadeg0vhxf4GZnEMDiWk_l6QOumoWjWkWBXXY.jpg" width="400"/> 
               </div>
            </div>
         </div>
   
            </React.StrictMode>
        );
    }
} 