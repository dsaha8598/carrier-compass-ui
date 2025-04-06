import React, { Component } from "react";


 export default class Loader extends Component {
    

    render() {
        return (
            <React.StrictMode>
                <div className="flex flex-col items-center absolute top-0 left-0 w-screen h-screen">
                        <div className="w-12 h-12 border-4 border-orange-500 border-dotted rounded-full animate-spin"></div>
                        <p className="mt-3 text-lg font-semibold text-orange-500">Loading...</p>
                 </div>
            </React.StrictMode>
        );
    }

    
   
    
}


