import React, { Component } from "react";
import { Compass } from 'lucide-react'; // npm install lucide-react


export default class Loader extends Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing Glow */}
        <div className="relative">
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-orange-400 opacity-30 animate-ping" />
          
          {/* Compass + Spinner */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-orange-300 border-t-transparent animate-spin" />
            <Compass className="w-10 h-10 text-orange-500 z-10" />
          </div>
        </div>

        {/* App Name */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-orange-600 tracking-wide">Career Compass</h1>
          <p className="text-orange-500 text-base mt-1">Loading...</p>
        </div>
      </div>
    </div>
    );
  }
}
