import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Stethoscope, Settings, Pill } from "lucide-react";
import { withAuth } from "../AuthContext/withAuth";
import ROUTER_URLS from "../Constants/RouterUrls";

const iconMap = {
  GraduationCap,
  Stethoscope,
  Settings,
  Pill,
};

const WhatNext = ({ qualification }) => {
  const [paths, setPaths] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!qualification) return;

    const fetchPaths = async () => {
      try {
        const response = await fetch(`${ROUTER_URLS.SERVER_URL}/profile/qualification/${qualification}`);
        const data = await response.json();
        setPaths(data);
      } catch (error) {
        console.error("Error fetching career paths:", error);
      }
    };

    fetchPaths();
  }, [qualification]);

  const handleCircleClick = (index, path) => {
    if (expandedIndex === index) {
      // If already expanded, navigate to a page (if you want navigation)
      // navigate(`/career-path/${path.id}`);
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderIcon = (iconName, color) => {
    const IconComponent = iconMap[iconName] || GraduationCap;
    return <IconComponent className={`${color}`} size={28} />;
  };

  const centerX = 300;
  const centerY = 300;
  const total = paths.length;
  const radius = 120 + total * 10;
  const expandedRadius = 90;
  const defaultRadius = 40;

  if (!qualification) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] text-gray-600">
        <p className="text-lg font-medium mb-2">No Qualification Found</p>
        <p className="text-sm text-center max-w-sm">
          Please add your qualification in the Profile section to view customized career opportunities.
        </p>
      </div>
    );
  }

  if (paths.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] text-gray-600">
        <p className="text-lg font-medium mb-2">Loading or No Paths Found</p>
        <p className="text-sm text-center max-w-sm">
          We couldn't find career paths for this qualification yet. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[700px] flex flex-col items-center justify-start bg-white overflow-hidden">

      {/* Heading */}
      <div className="text-center mt-6 mb-8">
        <h2 className="text-3xl font-bold text-orange-600 mb-2">What's Next in Your Career?</h2>
        <p className="text-gray-700 text-sm max-w-xl mx-auto">
          Tap any bubble to explore degrees, certifications, and diplomas tailored to your background.
        </p>
      </div>

      {/* Bubble Diagram */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        {/* Connecting Lines */}
        <svg className="absolute w-full h-full pointer-events-none">
          {paths.map((_, i) => {
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
                stroke="#d1d5db"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Central Node */}
        <div
          className="absolute z-20 flex flex-col items-center justify-center bg-orange-500 text-white rounded-full shadow-xl text-center cursor-default"
          style={{
            top: centerY - 60,
            left: centerX - 60,
            width: 120,
            height: 120,
          }}
        >
          <div className="text-sm font-bold">{qualification.split(" ")[0]}</div>
          <div className="text-xs font-light">{qualification.split(" ").slice(1).join(" ")}</div>
        </div>

        {/* Bubbles */}
        {paths.map((path, i) => {
          const angle = (2 * Math.PI * i) / total;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const isExpanded = expandedIndex === i;
          const size = isExpanded ? expandedRadius * 2 : defaultRadius * 2;
          const offset = size / 2;

          return (
            <div
              key={i}
              className={`absolute flex flex-col items-center justify-center bg-white border border-gray-200 rounded-full shadow-md cursor-pointer transition-all duration-300 ${
                isExpanded ? "z-30 scale-110" : "z-10"
              }`}
              style={{
                top: y - offset,
                left: x - offset,
                width: size,
                height: size,
              }}
              onClick={() => handleCircleClick(i, path)}
            >
              {renderIcon(path.icon, path.color)}
              <span className="text-[10px] font-medium text-gray-700 mt-1">{path.name}</span>
              {isExpanded && (
                <div className="mt-2 text-[10px] text-gray-600 space-y-1 max-w-[120px] max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100 p-1 rounded">
                  {path.options.map((opt, idx) => (
                    <div key={idx} className="bg-orange-100 p-1 rounded text-[10px]">
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withAuth(WhatNext);
