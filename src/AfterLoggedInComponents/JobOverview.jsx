import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const jobData = [
  {
    company: "MetaMask",
    title: "Product designer",
    applicants: "25 Applicants",
    tags: ["Entry Level", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Doing the right thing for investors is what we're all about at Vanguard, and that in...",
    rate: "$250/hr",
    posted: "Posted 12 days ago",
    logo: "https://placehold.co/40x40",
    sector: "Private",
    qualifications: "Bachelor's degree in Design or related field",
    skills: ["Figma", "User Research", "Prototyping"],
    salary: "$80,000 - $100,000 per year",
    ageRequirement: "21 - 35 years",
    image: "https://placehold.co/600x300"
  },
  {
    company: "Netflix",
    title: "Sr. UX Designer",
    applicants: "14 Applicants",
    tags: ["Expert", "Part-Time", "Remote"],
    tagColors: ["purple", "yellow", "red"],
    description: "Netflix is one of the world's leading streaming entertainment service with o...",
    rate: "$195/hr",
    posted: "Posted 5 days ago",
    logo: "https://placehold.co/40x40",
    sector: "Private",
    qualifications: "Master's in Human Computer Interaction or related",
    skills: ["UX Strategy", "A/B Testing", "Wireframing"],
    salary: "$120,000/year",
    ageRequirement: "25 - 40 years",
    image: "https://placehold.co/600x300"
  },
  {
    company: "MetaMask",
    title: "Product designer",
    applicants: "25 Applicants",
    tags: ["Entry Level", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Doing the right thing for investors is what we're all about...",
    fullDescription: "Doing the right thing for investors is what we're all about at Vanguard. As a product designer, you will be responsible for...",
    rate: "$250/hr",
    posted: "Posted 12 days ago",
    logo: "https://placehold.co/100x100",
    sector: "Private",
    qualification: "Bachelor's in Design or related field",
    skills: ["UI/UX", "Figma", "Prototyping"],
    age: "21-35 years"
  },
  {
    company: "Govt. of India",
    title: "Junior Clerk",
    applicants: "103 Applicants",
    tags: ["Fresher", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Central Government clerical recruitment...",
    fullDescription: "This is a permanent government clerical post under central administration. Includes pension, housing allowance, etc.",
    rate: "₹25,000/month",
    posted: "Posted 7 days ago",
    logo: "https://placehold.co/100x100",
    sector: "Government",
    qualification: "12th Pass",
    skills: ["Typing", "Basic Computer Knowledge"],
    age: "18-28 years"
  },
  {
    company: "MetaMask",
    title: "Product designer",
    applicants: "25 Applicants",
    tags: ["Entry Level", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Doing the right thing for investors is what we're all about...",
    fullDescription: "Doing the right thing for investors is what we're all about at Vanguard. As a product designer, you will be responsible for...",
    rate: "$250/hr",
    posted: "Posted 12 days ago",
    logo: "https://placehold.co/100x100",
    sector: "Private",
    qualification: "Bachelor's in Design or related field",
    skills: ["UI/UX", "Figma", "Prototyping"],
    age: "21-35 years"
  },
  {
    company: "Govt. of India",
    title: "Junior Clerk",
    applicants: "103 Applicants",
    tags: ["Fresher", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Central Government clerical recruitment...",
    fullDescription: "This is a permanent government clerical post under central administration. Includes pension, housing allowance, etc.",
    rate: "₹25,000/month",
    posted: "Posted 7 days ago",
    logo: "https://placehold.co/100x100",
    sector: "Government",
    qualification: "12th Pass",
    skills: ["Typing", "Basic Computer Knowledge"],
    age: "18-28 years"
  },
  {
    company: "MetaMask",
    title: "Product designer",
    applicants: "25 Applicants",
    tags: ["Entry Level", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Doing the right thing for investors is what we're all about at Vanguard, and that in...",
    rate: "$250/hr",
    posted: "Posted 12 days ago",
    logo: "https://placehold.co/40x40",
    sector: "Private",
    qualifications: "Bachelor's degree in Design or related field",
    skills: ["Figma", "User Research", "Prototyping"],
    salary: "$80,000 - $100,000 per year",
    ageRequirement: "21 - 35 years",
    image: "https://placehold.co/600x300"
  },
  {
    company: "Netflix",
    title: "Sr. UX Designer",
    applicants: "14 Applicants",
    tags: ["Expert", "Part-Time", "Remote"],
    tagColors: ["purple", "yellow", "red"],
    description: "Netflix is one of the world's leading streaming entertainment service with o...",
    rate: "$195/hr",
    posted: "Posted 5 days ago",
    logo: "https://placehold.co/40x40",
    sector: "Private",
    qualifications: "Master's in Human Computer Interaction or related",
    skills: ["UX Strategy", "A/B Testing", "Wireframing"],
    salary: "$120,000/year",
    ageRequirement: "25 - 40 years",
    image: "https://placehold.co/600x300"
  },
  {
    company: "MetaMask",
    title: "Product designer",
    applicants: "25 Applicants",
    tags: ["Entry Level", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Doing the right thing for investors is what we're all about...",
    fullDescription: "Doing the right thing for investors is what we're all about at Vanguard. As a product designer, you will be responsible for...",
    rate: "$250/hr",
    posted: "Posted 12 days ago",
    logo: "https://placehold.co/100x100",
    sector: "Government",
    qualification: "Bachelor's in Design or related field",
    skills: ["UI/UX", "Figma", "Prototyping"],
    age: "21-35 years"
  },
  {
    company: "Govt. of India",
    title: "Junior Clerk",
    applicants: "103 Applicants",
    tags: ["Fresher", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Central Government clerical recruitment...",
    fullDescription: "This is a permanent government clerical post under central administration. Includes pension, housing allowance, etc.",
    rate: "₹25,000/month",
    posted: "Posted 7 days ago",
    logo: "https://placehold.co/100x100",
    sector: "Government",
    qualification: "12th Pass",
    skills: ["Typing", "Basic Computer Knowledge"],
    age: "18-28 years"
  },
  {
    company: "MetaMask",
    title: "Product designer",
    applicants: "25 Applicants",
    tags: ["Entry Level", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Doing the right thing for investors is what we're all about...",
    fullDescription: "Doing the right thing for investors is what we're all about at Vanguard. As a product designer, you will be responsible for...",
    rate: "$250/hr",
    posted: "Posted 12 days ago",
    logo: "https://placehold.co/100x100",
    sector: "Government",
    qualification: "Bachelor's in Design or related field",
    skills: ["UI/UX", "Figma", "Prototyping"],
    age: "21-35 years"
  },
  {
    company: "Govt. of India",
    title: "Junior Clerk",
    applicants: "103 Applicants",
    tags: ["Fresher", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Central Government clerical recruitment...",
    fullDescription: "This is a permanent government clerical post under central administration. Includes pension, housing allowance, etc.",
    rate: "₹25,000/month",
    posted: "Posted 7 days ago",
    logo: "https://placehold.co/100x100",
    sector: "Government",
    qualification: "12th Pass",
    skills: ["Typing", "Basic Computer Knowledge"],
    age: "18-28 years"
  }
];

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
  return (
    <div className="bg-white-600 py-10 relative">
      <ScrollableJobSection title="Private Sector Jobs" jobs={jobData.filter(j => j.sector === "Private")} onJobClick={setSelectedJob} />
      <ScrollableJobSection title="Government Sector Jobs" jobs={jobData.filter(j => j.sector === "Government")} onJobClick={setSelectedJob} />
      {selectedJob && <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  );
};

export default JobOverview;
