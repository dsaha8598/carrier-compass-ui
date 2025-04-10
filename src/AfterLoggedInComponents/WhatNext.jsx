import React, { Component } from "react";
import {
  GraduationCap,
  Stethoscope,
  Settings,
  Pill
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { withAuth } from "../AuthContext/withAuth";

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
      expandedIndex: null,
    };
  }

  componentDidMount() {
    const serverData = [
      {
        name: "Engineering (PCM)",
        icon: "GraduationCap",
        options: [
          "B.Tech/B.E. (CSE, Mechanical, Civil, etc.)",
          "Entrance: JEE, CET, VITEEE"
        ],
        color: "text-orange-500"
      },
      {
        name: "Medical & Allied (PCB)",
        icon: "Stethoscope",
        options: [
          "MBBS, BDS, BAMS, BHMS, BPT",
          "B.Sc. Nursing, B.Pharm",
          "Entrance: NEET"
        ],
        color: "text-red-500"
      },
      {
        name: "Pure Sciences",
        icon: "Settings",
        options: [
          "B.Sc. Physics, Chemistry, Math, Biology",
          "Biotech, Microbiology, Statistics",
          "Research Careers"
        ],
        color: "text-blue-500"
      },
      {
        name: "Commerce & Management",
        icon: "Pill",
        options: [
          "BBA, BMS, B.Com (Hons)",
          "BA Economics, MBA"
        ],
        color: "text-green-500"
      },
      {
        name: "Medical & Allied (PCB)",
        icon: "Stethoscope",
        options: [
          "MBBS, BDS, BAMS, BHMS, BPT",
          "B.Sc. Nursing, B.Pharm",
          "Entrance: NEET"
        ],
        color: "text-red-500"
      },
      {
        name: "Pure Sciences",
        icon: "Settings",
        options: [
          "B.Sc. Physics, Chemistry, Math, Biology",
          "Biotech, Microbiology, Statistics",
          "Research Careers"
        ],
        color: "text-blue-500"
      },
      {
        name: "Commerce & Management",
        icon: "Pill",
        options: [
          "BBA, BMS, B.Com (Hons)",
          "BA Economics, MBA"
        ],
        color: "text-green-500"
      }
    ];
    this.setState({ paths: serverData });
  }

  handleCircleClick = (index) => {
    this.setState((prev) => ({
      expandedIndex: prev.expandedIndex === index ? null : index
    }));
  };

  renderIcon(iconName, color) {
    const IconComponent = iconMap[iconName] || GraduationCap;
    return <IconComponent className={`${color}`} size={24} />;
  }

  render() {
    const centerX = 300;
    const centerY = 300;
    const total = this.state.paths.length;
    const radius = 120 + total * 10;
    const expandedRadius = 90;
    const defaultRadius = 40;

    return (
      <div className="relative w-full h-[680px] flex flex-col items-center justify-start bg-white">

        {/* Heading and Subtext */}
        <div className="text-center mt-4 mb-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-2">
            What’s Next in Your Career?
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Tap on any bubble to explore available degrees, diplomas, and certifications you can pursue based on your background.
          </p>
        </div>

        {/* Bubble Diagram */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {this.state.paths.map((_, i) => {
              const angle = (2 * Math.PI * i) / total;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke="#ccc"
                  strokeWidth="2"
                />
              );
            })}
          </svg>

          {/* Central Node */}
          <div
            className="absolute z-10 p-4 bg-orange-500 text-white font-bold rounded-full shadow-lg text-center"
            style={{ left: centerX - 50, top: centerY - 50, width: 100, height: 100 }}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-sm">12th</div>
              <div className="text-xs font-normal">Science</div>
            </div>
          </div>

          {/* Bubbles */}
          {this.state.paths.map((path, i) => {
            const angle = (2 * Math.PI * i) / total;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const isExpanded = this.state.expandedIndex === i;
            const size = isExpanded ? expandedRadius * 2 : defaultRadius * 2;
            const offset = size / 2;

            return (
              <div
                key={i}
                className={`absolute transition-all duration-300 ease-in-out cursor-pointer shadow-md ${
                  isExpanded ? "z-20" : "z-10"
                }`}
                style={{
                  top: y - offset,
                  left: x - offset,
                  width: size,
                  height: size,
                  borderRadius: "9999px",
                  backgroundColor: "#fff",
                  border: "1px solid #eee",
                }}
                onClick={() => this.handleCircleClick(i)}
              >
                <div className="flex flex-col items-center justify-center h-full p-2 text-center overflow-hidden">
                  {this.renderIcon(path.icon, path.color)}
                  <span className="text-[10px] font-semibold text-gray-700">{path.name}</span>
                  {isExpanded && (
                    <div className="mt-2 text-[10px] text-gray-600 space-y-1 max-w-[110px] max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100">
                      {path.options.map((opt, idx) => (
                        <div key={idx} className="bg-orange-100 px-2 py-1 rounded text-[10px]">
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withAuth(withRouter(WhatNext));

function withRouter(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
