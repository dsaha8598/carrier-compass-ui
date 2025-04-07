import React, { Component } from "react";

export class UserProfile extends Component {
  render() {
    return (
      <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-lg">
        <h1 className="text-xl font-semibold text-orange-500 mb-6 text-center">
          Personal Data
        </h1>

        <div className="flex justify-center mb-6">
          <img alt="user icon" className="h-24 w-24" src="user-icon.png" />
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Your Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value="William John Malik"
            />
          </div>

          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Date of Birth
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              value="24 December 1999"
            />
          </div>

          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value="Successor Designer"
            />
          </div>

          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Highest Qualification
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value="M.Sc"
            />
          </div>

          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Gender
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  defaultChecked
                  className="form-radio text-blue-500"
                  name="gender"
                  type="radio"
                />
                <span className="text-gray-600">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  className="form-radio text-blue-500"
                  name="gender"
                  type="radio"
                />
                <span className="text-gray-600">Female</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
