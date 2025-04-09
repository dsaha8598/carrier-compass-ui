import React, { Component } from "react";
import {
  GraduationCap,
  Stethoscope,
  Settings,
  Pill,
  LucideIcon
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { withAuth } from "../AuthContext/withAuth";

// Icon mapping utility
const iconMap = {
  GraduationCap,
  Stethoscope,
  Settings,
  Pill
};

class WhatNext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paths: [],
    };
  }

  componentDidMount() {
    // Simulate server call
    const serverData = [
      { name: "Graduation", icon: "GraduationCap", color: "text-orange-500" },
      { name: "Medical", icon: "Stethoscope", color: "text-red-500" },
      { name: "Engineering", icon: "Settings", color: "text-blue-500" },
      { name: "Pharmacy", icon: "Pill", color: "text-green-500" },
    ];
    
    // You can replace this with an actual API call
    this.setState({ paths: serverData });
  }

  renderIcon(iconName, color) {
    const IconComponent = iconMap[iconName] || GraduationCap;
    return <IconComponent className={`${color}`} size={28} />;
  }

  render() {
    return (
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-600">
          What's Next After 12th?
        </h2>
        <div className="relative border-l-2 border-orange-300 pl-6">
          <div className="mb-8 relative">
            <div className="w-4 h-4 bg-orange-500 rounded-full absolute -left-2 top-1" />
            <div className="bg-orange-100 p-3 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">12th</h3>
              <p className="text-sm text-gray-500">Your current qualification</p>
            </div>
          </div>

          {this.state.paths.map((path, index) => (
            <div className="mb-6 relative" key={index}>
              <div className="w-4 h-4 bg-gray-300 rounded-full absolute -left-2 top-2.5" />
              <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                {this.renderIcon(path.icon, path.color)}
                <span className="text-md font-medium text-gray-700">{path.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Wrap and export with navigation
export default withAuth(withRouter(WhatNext));

// Utility to use `navigate` inside class component
function withRouter(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
