import React, { useState, useEffect, useContext } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AuthContext } from '../AuthContext/AuthContextContext';
import ROUTER_URLS from '../Constants/RouterUrls';

const tagColorMap = {
  purple: "bg-purple-100 text-purple-800",
  green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800",
  red: "bg-red-100 text-red-800"
};

const JobModal = ({ job, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-xl w-full max-w-2xl relative shadow-lg animate-fadeIn">
      <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200">
        <X size={20} />
      </button>
      <img src={job.image} alt="Job Visual" className="rounded-md mb-4 w-full object-cover h-48" />
      <h2 className="text-2xl font-bold mb-2">{job.title} at {job.company}</h2>
      <p className="text-gray-700 mb-2">{job.description}</p>
      <ul className="text-sm text-gray-600 mb-4 space-y-1">
        <li><strong>Sector:</strong> {job.sector}</li>
        <li><strong>Qualifications:</strong> {job.qualifications}</li>
        <li><strong>Skills:</strong> {job.skills?.join(", ")}</li>
        <li><strong>Salary:</strong> {job.salary}</li>
        <li><strong>Age Requirement:</strong> {job.ageRequirement}</li>
        <li><strong>Applicants:</strong> {job.applicants}</li>
        <li><strong>Rate:</strong> {job.rate}</li>
        <li><strong>Posted:</strong> {job.posted}</li>
      </ul>
    </div>
  </div>
);

const ScrollableJobSection = ({ title, jobs, onJobClick }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full mb-12">
      <div className="flex justify-between items-center mb-4 px-6">
        <h2 className="text-2xl font-semibold text-orange-600">{title}</h2>
        <div className="space-x-2">
          <button onClick={() => scroll('left')} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto px-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white-100 p-4 rounded-xl shadow-md border border-gray-300 p-8 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onJobClick(job)}
          >
            <div className="flex items-center mb-4">
              <img src={job.logo} alt={`${job.company} logo`} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-gray-500 text-sm">{job.company} • {job.applicants}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded ${tagColorMap[job.tagColors[idx]]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-4 truncate">{job.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">{job.rate}</span>
              <span className="text-gray-500 text-xs">{job.posted}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const JobOverview = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobData, setJobData] = useState([]);
  const [selectedQualification, setSelectedQualification] = useState('');
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    const token = localStorage.getItem("access_token");

    const fetchJobData = async (qualification) => {
      try {
        const response = await fetch(`${ROUTER_URLS.SERVER_URL}/job/jobs/${qualification}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }

        const data = await response.json();
        setJobData(data); // Update jobData with API response
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch job data when the component loads or qualification is selected
    if (selectedQualification) {
      fetchJobData(selectedQualification);
    }

  }, [selectedQualification, user.email]); // Add qualification as a dependency

  return (
    <div className="bg-white-600 py-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            Great news, <span className="text-orange-600"> {user.name}! 🎉</span>
          </h2>
          <p className="text-gray-700">
            Based on your highest qualification and the skills you’ve added, we’ve handpicked
            some job opportunities just for you. Scroll through and explore both government and
            private sector roles tailored to your profile.
          </p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3596/3596094.png"
            alt="Job search illustration"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>

      <div className="mb-6 px-6">
        <label htmlFor="qualification" className="block text-gray-700 mb-2">
          Select Qualification
        </label>
        <select
          id="qualification"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={selectedQualification}
          onChange={(e) => setSelectedQualification(e.target.value)}
        >
          {user.qualifications?.map((qualification, index) => (
            <option key={index} value={qualification}>
              {qualification}
            </option>
          ))}
        </select>
      </div>

      <ScrollableJobSection title="Private Sector Jobs" jobs={jobData.filter(j => j.sector === "Private")} onJobClick={setSelectedJob} />
      <ScrollableJobSection title="Government Sector Jobs" jobs={jobData.filter(j => j.sector === "Government")} onJobClick={setSelectedJob} />
      {selectedJob && <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  );
};

export default JobOverview;
