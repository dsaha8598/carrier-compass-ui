import React, { Component } from "react";
import SideBar from "./SideBar";
import { UserNameAndEmail } from "./UserNameAndEmailComponent";
import { Outlet } from "react-router-dom";
import { UserProfile } from "./UserProfile";

export default class UserLandingPage extends Component {
  state = {
    showProfile: false
  };

  toggleProfile = () => {
    this.setState(prev => ({ showProfile: !prev.showProfile }));
  };

  render() {
    return (
      <div className="flex relative">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen shadow-lg">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <UserNameAndEmail onUserIconClick={this.toggleProfile} />
          <Outlet />
        </div>

        {/* Profile Panel */}
        {/* Profile Panel */}
{this.state.showProfile && (
  <div className="absolute top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-2xl border-l border-gray-200 z-50 p-4 transition-transform duration-300">
    <button
      onClick={this.toggleProfile}
      className="text-gray-600 text-xl absolute right-4 top-4 hover:text-red-500"
    >
      &times;
    </button>
    <UserProfile />
  </div>
)}

      </div>
    );
  }
}
