import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import copy from "./images/copy.jpg";
import dipak from "./images/IMG20250212113942.jpg";
import dipak2 from "./images/IMG20250213095739.jpg"

export default class WelcomePage extends Component {
render () {
  return (
    <React.StrictMode>
    
    <body class="font-roboto">
      {/**  Header */}
      <header class="bg-white shadow-md">
         <div class="container mx-auto flex justify-between items-center py-4 px-6">
            <div class="flex items-center"> <img alt="Compass Logo" class="h-10 w-10" height="50" src="https://storage.googleapis.com/a1aa/image/RLb3e9uXSrTC3cYDHFWmqQTIr39KE6mGyV3KjWVY-u4.jpg" width="50"/> <span class="ml-2 text-xl font-bold text-orange-600"> CareerCompas </span> </div>
            <nav class="space-x-6"> <a class="text-orange-600 font-medium" href="#"> Home </a> <a class="text-gray-600 hover:text-orange-600" href="#"> About us </a> <a class="text-gray-600 hover:text-orange-600" href="#"> Services </a> <a class="text-gray-600 hover:text-orange-600" href="#"> Contact us </a> <a class="text-gray-600 hover:text-orange-600" href="#"> Blog </a> </nav>
            <a class="bg-orange-600 text-white px-4 py-2 rounded-md" href="/#/login"> Sign In </a> 
         </div>
      </header>
       {/** Hero Section --> */}
      <section class="bg-gray-50 py-16">
         <div class="container mx-auto flex flex-col md:flex-row items-center">
            <div class="md:w-1/2">
               <h1 class="text-4xl font-bold text-gray-800"> We create A Clear Path to Success </h1>
               <p class="mt-4 text-gray-600"> Finding the right career path can often feel overwhelming. With countless options and paths to choose from, it’s easy to get lost in the sea of possibilities. But don't worry, your search for clarity ends here. </p>
               <div class="mt-6"> <a class="bg-orange-600 text-white px-6 py-3 rounded-md" href="/#/signup"> Get Started </a> <a class="ml-4 text-orange-600" href="#"> Explore more </a> </div>
            </div>
            <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center"> <img alt="Animated student looking through books and searching for a job" height="300" src="https://storage.googleapis.com/a1aa/image/3RuDQbbX08tfZmXdHD9_9cRvgpvFUorI3cOrd0Qi_aQ.jpg" width="400"/> </div>
         </div>
      </section>
       {/** Services Section */} 
      <section class="py-16">
         <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-800"> We Provide The Best <span class="text-orange-600"> Services </span> </h2>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div class="bg-white shadow-md p-6 rounded-md">
                  <img alt="SEO icon" class="mx-auto" height="50" src="https://storage.googleapis.com/a1aa/image/gbK7-YnFrPwAvJIOW-b6yw6tGK5pEcfmE4J8wVWWixw.jpg" width="50"/> 
                  <h3 class="mt-4 text-xl font-semibold text-gray-800"> Exploring Jobs </h3>
                  <p class="mt-2 text-gray-600">  relevant job roles based on degrees</p>
               </div>
               <div class="bg-white shadow-md p-6 rounded-md">
                  <img alt="Marketing icon" class="mx-auto" height="50" src="https://storage.googleapis.com/a1aa/image/qlMq7amVuWiA_0FFZzBsT4m2WY-9SiRRVBsoVrsdEKA.jpg" width="50"/> 
                  <h3 class="mt-4 text-xl font-semibold text-gray-800"> Skill Recommendation </h3>
                  <p class="mt-2 text-gray-600"> Suggested skills for each career path. </p>
               </div>
               <div class="bg-white shadow-md p-6 rounded-md">
                  <img alt="Campaign icon" class="mx-auto" height="50" src="https://storage.googleapis.com/a1aa/image/mbvOpMFcfz1kvHdkxwjN3TJUbFIFAESgDwhZEc1ZHgo.jpg" width="50"/> 
                  <h3 class="mt-4 text-xl font-semibold text-gray-800"> Job Alerts </h3>
                  <p class="mt-2 text-gray-600"> Aggregated job postings from various job portals. </p>
               </div>
               <div class="bg-white shadow-md p-6 rounded-md">
                  <img alt="Other services icon" class="mx-auto" height="50" src="https://storage.googleapis.com/a1aa/image/D2w4UgbXv4mbdrQ1yXIsIvKDHm3FoDqRsFPVkVcV16E.jpg" width="50"/> 
                  <h3 class="mt-4 text-xl font-semibold text-gray-800"> Latest News </h3>
                  <p class="mt-2 text-gray-600"> Latest news, Blogs, Articles on new oppertunities. </p>
               </div>
            </div>
         </div>
      </section>
       {/** Simple Solutions Section */}
      <section class="bg-gray-50 py-16">
         <div class="container mx-auto flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 flex justify-center"> <img alt="Person working on laptop illustration" height="300" src="https://storage.googleapis.com/a1aa/image/02QXgU0ALdKG15THbuMaT9CSLdQB66draGvGllmXIcc.jpg" width="400"/> </div>
            <div class="md:w-1/2 mt-8 md:mt-0">
               <h2 class="text-3xl font-bold text-gray-800"> We make journey <span class="text-orange-600"> Simple! </span> </h2>
               <p class="mt-4 text-gray-600">  We are here to guide you on a journey towards the perfect career—one that aligns with your existing skills and potential. </p>
               <ul class="mt-6 space-y-4">
                  <li class="flex items-center"> <i class="fas fa-check-circle text-orange-600 mr-2"> </i> <span> Create Profile </span> </li>
                  <li class="flex items-center"> <i class="fas fa-check-circle text-orange-600 mr-2"> </i> <span> Choose relevant Career </span> </li>
                  <li class="flex items-center"> <i class="fas fa-check-circle text-orange-600 mr-2"> </i> <span> Acquire Missing Skills </span></li>
                  <li class="flex items-center"> <i class="fas fa-check-circle text-orange-600 mr-2"> </i> <span> March Towards Success </span> </li>
               </ul>
               <div class="mt-6"> <a class="bg-orange-600 text-white px-6 py-3 rounded-md" href="/#/signup"> Get Started </a> <a class="ml-4 text-orange-600" href="#"> Read more </a> </div>
            </div>
         </div>
      </section>
      
      {/** What Clients Say Section */}
      <section class="bg-gray-50 py-16">
         <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-800"> What Our Existing <span class="text-orange-600"> Clients Say! </span> </h2>
            <p class="mt-4 text-gray-600"> See how services helped many students in making their journey hassle free on the path towards achieveing their career goals. </p>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div class="bg-white shadow-md p-6 rounded-md">
                  <img alt="Client photo" class="mx-auto rounded-full" height="50" src={dipak} width="50"/> 
                  <p class="mt-4 text-gray-600"> "Greatly designed, helped me a lot. Highly recommend!" </p>
                  <div class="mt-2 text-yellow-500"> <i class="fas fa-star"> </i> <i class="fas fa-star"> </i> <i class="fas fa-star"> </i> <i class="fas fa-star"> </i> <i class="fas fa-star-half-alt"> </i> </div>
                  <p class="mt-2 text-gray-800 font-semibold"> Dipak Saha </p>
               </div>
               <div class="bg-white shadow-md p-6 rounded-md">
                  <img alt="Client photo" class="mx-auto rounded-full" height="50" src={copy} width="50"/> 
                  <p class="mt-4 text-gray-600"> "I was so confused!!.CareerCompass really helped me on my career journey. Delivered great results." </p>
                  <div class="mt-2 text-yellow-500"> <i class="fas fa-star"> </i> <i class="fas fa-star"> </i> <i class="fas fa-star"> </i> <i class="fas fa-star"> </i> <i class="fas fa-star"> </i> </div>
                  <p class="mt-2 text-gray-800 font-semibold"> Saena </p>
               </div>
               <div class="bg-white shadow-md p-6 rounded-md">
                  <img alt="Client photo" class="mx-auto rounded-full" height="50" src={dipak2} width="50"/> 
                  <p class="mt-4 text-gray-600"> "The personalized agrregated job list is awesome. I got to know the openings and skilled myself up based on the requirements. Highly effective." </p>
                  <div class="mt-2 text-yellow-500"> <i class="fas fa-star"> </i> <i class="fas fa-star"> </i> <i class="fas fa-star"> </i> <i class="fas fa-star"> </i> <i class="fas fa-star-half-alt"> </i> </div>
                  <p class="mt-2 text-gray-800 font-semibold"> Avay Saha </p>
               </div>
            </div>
         </div>
      </section>

       {/**  Footer */}
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
