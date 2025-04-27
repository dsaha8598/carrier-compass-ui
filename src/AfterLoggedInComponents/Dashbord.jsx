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

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [selectedQualification, setSelectedQualification] = useState("");

  useEffect(() => {
    // Set default value if user has qualifications
    if (user.qualifications && user.qualifications.length > 0) {
      setSelectedQualification(user.qualifications[0]); // Set first qualification as default
    }
  }, [user.qualifications]);

  const handleQualificationChange = (e) => {
    setSelectedQualification(e.target.value);
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

          {/* Qualification Dropdown */}
          {user.qualifications && user.qualifications.length > 0 ? (
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
          ) : (
            <div className="mt-6 text-gray-600">
              <p>Please go to your profile section and add a qualification to see a personalized dashboard.</p>
            </div>
          )}

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

          {/* Enhanced Quiz Section */}
          <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 shadow-lg rounded-2xl p-6 mt-10 text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🤔 Still Confused About Your Career Path?
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
