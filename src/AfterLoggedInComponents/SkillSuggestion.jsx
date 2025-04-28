import React, { Component } from "react";
import { GraduationCap, Stethoscope, Settings, Pill } from "lucide-react";
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
      hoveredIndex: null,
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
        },
        {
          name: "Leadership",
          icon: "🧑‍💼",
          description: "Take initiative and guide others effectively"
        },
        {
          name: "Problem Solving",
          icon: "🛠️",
          description: "Find solutions quickly and effectively"
        },
        {
          name: "Creativity",
          icon: "🎨",
          description: "Think outside the box and innovate"
        },
        {
          name: "Time Management",
          icon: "⏰",
          description: "Organize tasks and meet deadlines"
        },
        {
          name: "Adaptability",
          icon: "🌐",
          description: "Stay flexible in changing environments"
        },
        {
          name: "Networking",
          icon: "🔗",
          description: "Build and maintain professional connections"
        }
      ]
    };
  }

  componentDidMount() {
    const serverData = [
      { name: "Graduation", icon: "GraduationCap", color: "text-orange-500" },
      { name: "Medical", icon: "Stethoscope", color: "text-red-500" },
      { name: "Engineering", icon: "Settings", color: "text-blue-500" },
      { name: "Pharmacy", icon: "Pill", color: "text-green-500" }
    ];
    this.setState({ paths: serverData });
  }

  render() {
    const { hoveredIndex, skills } = this.state;

    return (
      <div className="mt-10 w-full px-4">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Recommended Skills
        </h3>

        <div className="overflow-x-auto p-4 rounded-2xl relative">
          <div
            className="grid grid-flow-col auto-cols-max grid-rows-2 gap-4 pr-4 overflow-visible"
            style={{ minWidth: "100%" }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative group border border-orange-600 p-8 rounded-3xl shadow-md flex flex-col items-center text-center transition-all hover:shadow-lg hover:scale-105 w-52 h-48"
                onMouseEnter={() => this.setState({ hoveredIndex: index })}
                onMouseLeave={() => this.setState({ hoveredIndex: null })}
              >
                <div className="text-orange-500 text-4xl mb-2">
                  {skill.icon}
                </div>
                <h4 className="text-md font-semibold text-gray-800">
                  {skill.name}
                </h4>
                <p className="text-xs text-gray-600 mt-1">{skill.description}</p>

                {hoveredIndex === index && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 p-2 text-sm bg-white text-gray-700 rounded-xl shadow-lg z-10 transition-all">
                    <strong>{skill.name}:</strong> {skill.description}
                  </div>
                )}
              </div>
            ))}
          </div>
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
