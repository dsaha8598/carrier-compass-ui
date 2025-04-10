import React, { Component } from "react";
import { PlusCircle } from "lucide-react";

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "William John Malik",
      dob: "24 December 1999",
      email: "Successor Designer",
      qualification: "M.Sc",
      gender: "Male",
      newSkill: "",
      skills: ["UI Design", "React"]
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleGenderChange = (gender) => {
    this.setState({ gender });
  };

  handleSkillAdd = () => {
    const { newSkill, skills } = this.state;
    if (newSkill && !skills.includes(newSkill)) {
      this.setState({ skills: [...skills, newSkill], newSkill: "" });
    }
  };

  getProfileCompletion = () => {
    const { name, dob, email, qualification, gender, skills } = this.state;
    let score = 0;
    if (name) score++;
    if (dob) score++;
    if (email) score++;
    if (qualification) score++;
    if (gender) score++;
    if (skills.length > 0) score++;
    return Math.round((score / 6) * 100);
  };

  render() {
    const { name, dob, email, qualification, gender, newSkill, skills } =
      this.state;
    const profileCompletion = this.getProfileCompletion();
    const qualificationOptions = [
      "10th Pass",
      "12th Pass",
      "Diploma",
      "B.Sc",
      "B.Tech",
      "M.Sc",
      "M.Tech",
      "MBA",
      "MCA"
    ];
    const skillOptions = [
      "Java",
      "Spring Boot",
      "React",
      "Angular",
      "UI Design",
      "Node.js",
      "MongoDB",
      "MySQL"
    ];

    return (
      <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-lg">
        {/* Profile Completion */}
        <div className="mb-6">
          <p className="text-sm text-gray-700 mb-1">
            Profile Completion:{" "}
            <span className="font-semibold text-orange-600">
              {profileCompletion}%
            </span>
          </p>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-orange-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${profileCompletion}%` }}
            ></div>
          </div>
        </div>

        <h1 className="text-xl font-semibold text-orange-500 mb-6 text-center">
          Personal Data
        </h1>

        <div className="flex justify-center mb-6">
          <img alt="user icon" className="h-24 w-24" src="user-icon.png" />
        </div>

        <form>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Your Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </div>

          {/* DOB */}
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Date of Birth
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              name="dob"
              value={dob}
              onChange={this.handleInputChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>

          {/* Qualification */}
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Highest Qualification
            </label>
            <select
              name="qualification"
              value={qualification}
              onChange={this.handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select Qualification</option>
              {qualificationOptions.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Gender
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "Male"}
                  onChange={() => this.handleGenderChange("Male")}
                />
                <span className="text-gray-600">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "Female"}
                  onChange={() => this.handleGenderChange("Female")}
                />
                <span className="text-gray-600">Female</span>
              </label>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">
              Skills
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <select
                name="newSkill"
                value={newSkill}
                onChange={this.handleInputChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
              >
                <option value="">Select a skill</option>
                {skillOptions.map((skill) => (
                  <option key={skill} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={this.handleSkillAdd}
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md"
              >
                <PlusCircle size={20} />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
