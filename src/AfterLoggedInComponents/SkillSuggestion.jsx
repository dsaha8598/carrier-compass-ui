import React, { Component } from "react";
import {
  GraduationCap,
  Stethoscope,
  Settings,
  Pill
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

class SkillSuggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          name: "Communication",
          icon: "🗣️",
          description: "Effective verbal and written communication"
        },
        {
          name: "Critical Thinking",
          icon: "🧠",
          description: "Analyze situations and make smart decisions"
        },
        {
          name: "Coding",
          icon: "💻",
          description: "Learn programming basics for tech-related careers"
        },
        {
          name: "Teamwork",
          icon: "🤝",
          description: "Work effectively in groups or teams"
        }
      ]
    };
  }

  componentDidMount() {
    // Simulate server call
    const serverData = [
      { name: "Graduation", icon: "GraduationCap", color: "text-orange-500" },
      { name: "Medical", icon: "Stethoscope", color: "text-red-500" },
      { name: "Engineering", icon: "Settings", color: "text-blue-500" },
      { name: "Pharmacy", icon: "Pill", color: "text-green-500" }
    ];

    this.setState({ paths: serverData });
  }

  render() {
    return (
      <div className="mt-10 w-full px-4">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Recommended Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {this.state.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-orange-50 border border-orange-200 p-6 rounded-2xl shadow-md flex flex-col items-center text-center transition-all hover:shadow-lg hover:scale-105"
            >
              <div className="text-orange-500 text-4xl mb-3">{skill.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
              <p className="text-sm text-gray-600 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Wrap and export with navigation
export default withAuth(withRouter(SkillSuggestion));

// Utility to use `navigate` inside class component
function withRouter(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
