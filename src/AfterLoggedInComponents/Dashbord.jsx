import React, { useContext, useState, useEffect } from "react";
import DikshaImage from "../images/Diksha.png";
import SideBar from "./SideBar";
import WhatNext from "./WhatNext";
import SkillSuggestion from "./SkillSuggestion";
import JobOverview from "./JobOverview";
import ROUTER_URLS from "../Constants/RouterUrls";
import { NavLink } from "react-router-dom";
import JobListings from "./JobListings";
import { AuthContext } from "../AuthContext/AuthContextContext";
import { PlusCircle, X } from "lucide-react";
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [selectedQualification, setSelectedQualification] = useState("");
  const [qualificationOptions, setQualificationOptions] = useState([]);
  const [authToken, setAuthToken] = useState(() => localStorage.getItem("access_token"));
  const [newQualification, setNewQualification] = useState("");
  const [qualificationDetails, setQualificationDetails] = useState([]);
  

  useEffect(() => {

    if(qualificationOptions.length == 0){
    fetchQualificationOptions();
    }

    // Set default value if user has qualifications
    if (user.qualifications != null && user.qualifications && user.qualifications.length > 0) {
      setSelectedQualification(user.qualifications[0]); // Set first qualification as default
    }
  }, [user.qualifications]);

  const handleQualificationChange = (e) => {
    setSelectedQualification(e.target.value);
  };

  const fetchQualificationOptions = async () => {
    try {
      const response = await fetch(ROUTER_URLS.SERVER_URL+"/profile/getAll", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.json();
      setQualificationOptions(data);
    } catch (error) {
      console.error("Failed to fetch qualification options", error);
    }
  };

  const handleQualificationAdd = async () => {
    if (!newQualification) return;

    try {
      const response = await fetch(`${ROUTER_URLS.SERVER_URL}/profile/addQualification?qualification=${newQualification}&email=${user.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const updatedQualifications = await response.json(); // assuming server returns updated list
        setQualificationDetails(updatedQualifications);
        user.qualifications = updatedQualifications;
        setNewQualification("");
      } else {
        console.error("Failed to save qualification");
      }
    } catch (err) {
      console.error("Failed to add qualification", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      
      case "newQualification":
        setNewQualification(value);
        break;
      default:
        break;
    }
  };

  return (
    <React.StrictMode>
      <div className="flex">
        <div className="flex-1 p-6">
          {/* Welcome Section */}
          <section className="bg-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center bg-white">
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <img
                  alt="Animated student looking through books and searching for a job"
                  height="300"
                  src={DikshaImage}
                  width="400"
                />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-800">
                  Welcome onboard,
                  <span className="ml-4 text-orange-600">{user.name}! 🚀</span>
                </h1>
                <p className="mt-4 text-gray-600">
                  I’m Diksha, your career guide from Career Compass. I’ve crafted a personalized
                  dashboard just for you, based on your skills and interests. 🌟 You can explore new
                  skills, add them to your profile, and unlock more job recommendations tailored to
                  your growth.
                </p>
                <p className="mt-4 text-gray-600">
                  Stay ahead of the curve by diving into insightful blogs, the latest industry news,
                  and market trends. Let’s navigate your career path together—buckle up and explore!
                  🚀✨
                </p>
              </div>
            </div>
          </section>

          {user.qualifications == null || user.qualifications.length == 0 ? (
               <div 
               className="flex flex-col items-center justify-center bg-cover bg-center p-6 h-96"
               style={{ backgroundImage:  `url('C:\Users\Dipak\Desktop\Untitled.png')` }}
             >
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, ease: 'easeOut' }}
                 className="bg-white bg-opacity-90 backdrop-blur-sm shadow-2xl rounded-3xl w-80 p-6 h-96 w-full max-w-md text-center"
               >
                 
                 <div className="text-5xl mb-4">🎓🌟</div>
                 <h2 className="text-3xl font-extrabold text-blue-700 mb-3">Let's Get Started!</h2>
                 <p className="text-gray-600 mb-8">Add your highest qualification and unlock your journey 🚀</p>
                 
                 <div className="flex items-center gap-3 mb-6">
                   <select
                     name="newQualification"
                     value={newQualification}
                     onChange={handleInputChange}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                   >
                     <option value="">🎯 Select a qualification</option>
                     {qualificationOptions.map((q, idx) => (
                       <option key={idx} value={q}>
                         {q}
                       </option>
                     ))}
                   </select>
                   
                   <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     type="button"
                     onClick={handleQualificationAdd}
                     className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300"
                   >
                     <PlusCircle size={22} />
                   </motion.button>
                 </div>
         
                 <p className="text-xs text-gray-400">Your qualification helps us personalize your experience ✨</p>
               </motion.div>
             </div>
            
           
          ):(
            <div>
          {/* Qualification Dropdown */}
          
            <div className="mt-6">
              <label htmlFor="qualification" className="block text-gray-600 font-semibold">
                Select your Qualification:
              </label>
              <select
                id="qualification"
                value={selectedQualification}
                onChange={handleQualificationChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
              >
                {user.qualifications.map((qualification, index) => (
                  <option key={index} value={qualification}>
                    {qualification}
                  </option>
                ))}
              </select>
            </div>
          

          {/* What's Next + Skill Suggestion Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {selectedQualification ? (
              <WhatNext qualification={selectedQualification} />
            ) : (
              <div className="relative w-full h-[680px] flex flex-col items-center justify-start bg-white">
                <p>Please select a qualification to see what's next.</p>
              </div>
            )}
            <SkillSuggestion />
          </div>
          </div>)}
          {/* Enhanced Quiz Section */}
          <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 shadow-lg rounded-2xl p-6 mt-10 text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🤔  Confused About Your Career Path??
            </h2>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto text-lg leading-relaxed">
              Take a short quiz to uncover your interests, strengths, and potential career options!
              It’s quick, insightful, and tailored just for you.
            </p>
            <a className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white font-semibold text-md py-3 px-8 rounded-full shadow-lg">
              <NavLink to={ROUTER_URLS.QUIZ_URL}>🎯 Take the Quiz Now</NavLink>
            </a>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Dashboard;
