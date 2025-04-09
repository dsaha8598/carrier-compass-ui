import React from 'react';

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
    logo: "https://placehold.co/40x40"
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
    logo: "https://placehold.co/40x40"
  },
  {
    company: "Microsoft",
    title: "Product designer",
    applicants: "58 Applicants",
    tags: ["Intermediate", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Welcome to Lightspeed LA, the first U.S.-based, AAA game development studio f...",
    rate: "$210/hr",
    posted: "Posted 4 days ago",
    logo: "https://placehold.co/40x40"
  },
  {
    company: "Reddit",
    title: "Product designer",
    applicants: "23 Applicants",
    tags: ["Expert", "Part-Time"],
    tagColors: ["purple", "yellow"],
    description: "Prelim is how banks onboard their customers for business checking accou...",
    rate: "$120/hr",
    posted: "Posted 22 days ago",
    logo: "https://placehold.co/40x40"
  },
  {
    company: "Google",
    title: "Backend Dev.",
    applicants: "21 Applicants",
    tags: ["Intermediate", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Coalfire is on a mission to make the world a safer place by solving our client...",
    rate: "$260/hr",
    posted: "Posted 5 days ago",
    logo: "https://placehold.co/40x40"
  },
  {
    company: "Spotify",
    title: "SMM Manager",
    applicants: "73 Applicants",
    tags: ["Intermediate", "Full-Time"],
    tagColors: ["purple", "green"],
    description: "Join us as we increase access to banking and financial services, helping banks an...",
    rate: "$170/hr",
    posted: "Posted 8 days ago",
    logo: "https://placehold.co/40x40"
  },
];

const tagColorMap = {
  purple: "bg-purple-100 text-purple-800",
  green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800",
  red: "bg-red-100 text-red-800"
};

const JobOverview = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobData.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={job.logo} alt={`${job.company} logo`} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{job.title}</h2>
                  <p className="text-gray-500">{job.company} • {job.applicants}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded ${tagColorMap[job.tagColors[idx]]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">{job.rate}</span>
                <span className="text-gray-500 text-sm">{job.posted}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobOverview;
