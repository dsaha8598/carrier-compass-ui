import React, { Component } from "react";
import DikshaImage from "../images/Diksha.png";
import SideBar from "./SideBar";
import WhatNext from "./WhatNext";
import SkillSuggestion from "./SkillSuggestion";
import JobOverview from "./JobOverview";

export default class Dashboard extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className="flex">
          <div className="flex-1 p-6">
            {/* Welcome Section */}
            <section className="bg-white py-16">
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
                    <span className="ml-4 text-orange-600">Dipak Kumar! 🚀</span>
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

            {/* What's Next + Skill Suggestion Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <WhatNext />
              <SkillSuggestion />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <JobOverview/>
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
