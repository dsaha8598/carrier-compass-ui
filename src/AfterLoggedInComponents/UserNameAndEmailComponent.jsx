import React, { Component } from "react";
import { Bell, Search, UserCircle } from "lucide-react";

export class UserNameAndEmail extends Component {
  render() {
    return (
      <div className="flex justify-between items-center mb-6">
        {/* Search */}
        <div className="relative">
          <input
            className="pl-10 pr-4 py-2 rounded-full bg-gray-200 focus:outline-none"
            placeholder="Search"
            type="text"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
        </div>

        {/* Notification & User */}
        <div className="flex items-center">
          <div className="flex items-center cursor-pointer" onClick={this.props.onUserIconClick}>
            <UserCircle className="text-orange-500 hover:text-orange-700 transition-transform duration-200 hover:scale-105" />
            <div>
              <p className="text-gray-800 font-semibold">Jane Cooper</p>
              <p className="text-gray-500 text-sm">jane234@example.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
