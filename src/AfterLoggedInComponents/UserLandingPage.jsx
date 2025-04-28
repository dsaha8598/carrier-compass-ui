import React, { Component } from "react";
import SideBar from "./SideBar";
import { UserNameAndEmail } from "./UserNameAndEmailComponent";
import { Outlet } from "react-router-dom";
import { UserProfile } from "./UserProfile";

export default class UserLandingPage extends Component {
  state = {
    showProfile: false,
    sidebarOpen: false, // for mobile toggle if needed later
  };

  toggleProfile = () => {
    this.setState((prev) => ({ showProfile: !prev.showProfile }));
  };

  render() {
    return (
      <div className="flex flex-col md:flex-row h-screen relative overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white h-16 md:h-full shadow-lg flex-shrink-0">
          {/* For mobile, Sidebar will stay top, on medium (md) and above, it becomes sidebar */}
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-3 py-2 h-[calc(100vh-4rem)] md:h-full">
          <Outlet />
        </div>
      </div>
    );
  }
}
