import React, { Component } from "react";
import { Compass } from "lucide-react"; // using lucide-react for a clean SVG compass

export default class Loader extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-screen h-screen bg-white z-50">
        {/* Compass Icon with Spin Animation */}
        <div className="animate-[spin_3s_linear_infinite]">
          <Compass size={48} className="text-orange-500" />
        </div>
        <p className="mt-3 text-lg font-semibold text-orange-500">Loading Please Wait...</p>
      </div>
    );
  }
}
