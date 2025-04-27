import React, { Component } from "react";
import SideBar from "./SideBar";
import { UserNameAndEmail } from "./UserNameAndEmailComponent";
import { Outlet } from "react-router-dom";
import { UserProfile } from "./UserProfile";

export default class UserLandingPage extends Component {
  state = {
    showProfile: false,
  };

  toggleProfile = () => {
    this.setState((prev) => ({ showProfile: !prev.showProfile }));
  };

  render() {
    return (
      <div className="flex h-screen relative overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white h-full shadow-lg">
          <SideBar />
        </div>

        {/* Main Content - flush to left */}
        <div className="flex-1 h-full overflow-y-auto px-3 py-2"> {/* Reduced padding to shift up */}
          <Outlet />
        </div>
      </div>
    );
  }
}
