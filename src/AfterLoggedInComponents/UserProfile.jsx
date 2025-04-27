import React, { useState, useEffect, useContext } from "react";
import { PlusCircle, X } from "lucide-react";
import { AuthContext } from "../AuthContext/AuthContextContext";
import ROUTER_URLS from "../Constants/RouterUrls";

export const UserProfile = () => {
  const {user}  = useContext(AuthContext);
  //const[user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(() => localStorage.getItem("access_token"));

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState(["UI Design", "React"]);
  const [newSkill, setNewSkill] = useState("");
  const [qualificationOptions, setQualificationOptions] = useState([]);
  const [newQualification, setNewQualification] = useState("");
  const [qualificationDetails, setQualificationDetails] = useState([]);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setDob(user.dateOfBirth || "");
      setEmail(user.email || "");
      setPhoneNumber(user.phone || ""); // populate phone
      setQualification(user.qualification || "");
      setGender(user.gender || "");
      setQualificationDetails(user.qualifications || []); // populate qualification details
      setSkills(user.skills || []);
    }
  
  }, [user]);


  useEffect(() => {
    fetchQualificationOptions();
  }, []);

  const fetchQualificationOptions = async () => {
    try {
      const response = await fetch(ROUTER_URLS.SERVER_URL+"/profile/getAll", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.json();
      setQualificationOptions(data);
    } catch (error) {
      console.error("Failed to fetch qualification options", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "dob":
        setDob(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "newSkill":
        setNewSkill(value);
        break;
      case "newQualification":
        setNewQualification(value);
        break;
      default:
        break;
    }
  };

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleSkillAdd  = async () => {
    
    if (!newSkill) return;

    try {
      const response = await fetch(`${ROUTER_URLS.SERVER_URL}/profile/addSkill?skill=${newSkill}&email=${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const updatedSkills = await response.json(); // assuming server returns updated list
        setSkills(updatedSkills);
        user.skills = updatedSkills;
        setNewSkill("");
      } else {
        console.error("Failed to save skill");
      }
    } catch (err) {
      console.error("Failed to add skill", err);
    }
  };

  const handleSkillDelete = async (skillToDelete) => {
    try {
      const response = await fetch(`${ROUTER_URLS.SERVER_URL}/profile/removeSkill?skill=${skillToDelete}&email=${email}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const updatedSkills = await response.json();
        setSkills(updatedSkills);
        user.skills = updatedSkills;
      } else {
        console.error("Failed to remove skill");
      }
    } catch (err) {
      console.error("Failed to remove skill", err);
    }
  };

  const getProfileCompletion = () => {
    let score = 0;
    if (name) score++;
    if (dob) score++;
    if (email) score++;
    if (phoneNumber) score++; // phone considered
    if (qualificationDetails.length > 0) score++; // qualification details considered
    if (gender) score++;
    if (skills.length > 0) score++;
    return Math.round((score / 7) * 100);
  };

  const handleQualificationAdd = async () => {
    if (!newQualification) return;

    try {
      const response = await fetch(`${ROUTER_URLS.SERVER_URL}/profile/addQualification?qualification=${newQualification}&email=${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const updatedQualifications = await response.json(); // assuming server returns updated list
        setQualificationDetails(updatedQualifications);
        user.qualifications = updatedQualifications;
        setNewQualification("");
      } else {
        console.error("Failed to save qualification");
      }
    } catch (err) {
      console.error("Failed to add qualification", err);
    }
  };

  const handleQualificationDelete = async (qualificationToDelete) => {
    try {
      const response = await fetch(`${ROUTER_URLS.SERVER_URL}/profile/removeQualification?qualification=${qualificationToDelete}&email=${email}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const updatedQualifications = await response.json();
        setQualificationDetails(updatedQualifications);
        user.qualifications = updatedQualifications;
      } else {
        console.error("Failed to remove qualification");
      }
    } catch (err) {
      console.error("Failed to remove qualification", err);
    }
  };

  const profileCompletion = getProfileCompletion();

  const skillOptions = [
    "Java",
    "Python",
    "C++",
    "JavaScript",
    "React",
    "Node.js",
    "Angular",
    "Spring Boot",
    "Django",
    "Ruby on Rails",
    "SQL",
    "NoSQL Databases",
    "MySQL",
    "PostgreSQL",
    "Git",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "CI/CD",
    "Machine Learning",
    "Data Science",
    "Big Data",
    "DevOps",
    "Cybersecurity",
    "Blockchain",
    "Cloud Architecture",
    "Network Configuration",
    "Mobile Development",
    "UI/UX Design",
    "Data Visualization",
    "Agile Methodology",
    "Project Management Tools",
    "Salesforce",
    "SAP",
    "Machine Learning with TensorFlow",
    "Artificial Intelligence (AI)",
    "Data Analytics",
    "SEO",
    "Digital Marketing",
    "Technical Writing",
    "Business Intelligence",
    "Public Speaking",
    "Negotiation",
    "Teamwork",
    "Leadership",
    "Conflict Resolution",
    "Customer Service",
    "Active Listening"
  ]
  
  ;

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-10 px-4">
      <div className="bg-white rounded-3xl p-6 w-full max-w-2xl shadow-lg">
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
            <label className="block text-orange-600 mb-1 font-semibold">Your Name</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          {/* DOB */}
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">Date of Birth</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              name="dob"
              value={dob}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">Email Address</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">Phone Number</label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-orange-600 mb-1 font-semibold">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "Male"}
                  onChange={() => handleGenderChange("Male")}
                />
                <span className="text-gray-600">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "Female"}
                  onChange={() => handleGenderChange("Female")}
                />
                <span className="text-gray-600">Female</span>
              </label>
            </div>
          </div>

{/* Qualification Add & View Section */}
<div className="mt-6">
          <h2 className="text-orange-600 font-semibold mb-2">Add Qualification</h2>
          <div className="flex items-center gap-2 mb-4">
            <select
              name="newQualification"
              value={newQualification}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md text-sm"
            >
              <option value="">Select a qualification</option>
              {qualificationOptions.map((q, idx) => (
                <option key={idx} value={q}>
                  {q}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleQualificationAdd}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md"
            >
              <PlusCircle size={20} />
            </button>
          </div>

          <h3 className="text-orange-600 font-semibold mb-2">Your Qualification Details:</h3>
          <div className="mb-6">
            <div className="space-y-2">
              {qualificationDetails.map((qualification, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-200 p-3 rounded-md">
                  <span>{qualification}</span>
                  <X
                    className="cursor-pointer text-red-500"
                    onClick={() => handleQualificationDelete(qualification)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
          {/* Skills */}
          <div className="mb-4">
            <h2 className="text-orange-600 font-semibold mb-2">Add Skills To Your Profile</h2>
            <div className="flex items-center gap-2">
              <select
                name="newSkill"
                value={newSkill}
                onChange={handleInputChange}
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
                onClick={handleSkillAdd}
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md"
              >
                <PlusCircle size={20} />
              </button>
            </div>
            <label className="block text-orange-600 mb-1 font-semibold">Skills Acquired By You</label>
            <div className="mb-6">
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-200 p-3 rounded-md">
                  <span>{skill}</span>
                  <X
                    className="cursor-pointer text-red-500"
                    onClick={() => handleSkillDelete(skill)}
                  />
                </div>
              ))}
            </div>
          </div>
            
          </div>
        </form>

        
      </div>
    </div>
  );
};
