import React, { Component } from "react";
import axios from "axios";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { withAuth } from "../AuthContext/withAuth";
import Loader from "../Loader"; // custom loader component

export class JobListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      search: "",
      location: "",
      sector: "All",
      savedJobs: [],
      userSkills: ["React", "Spring Boot", "SQL"],
      isLoading: true, // track loading state
    };
  }

  componentDidMount() {
    this.fetchJobs();
  }

  fetchJobs = async () => {
    this.setState({ isLoading: true });
    try {
      const res = await axios.get("https://remoteok.com/api");
      const data = res.data.slice(1, 10).map((job) => ({
        id: job.id,
        title: job.position,
        company: job.company,
        location: job.location || "Remote",
        description: job.description,
        tags: job.tags || [],
        logo: job.logo || "https://placehold.co/40x40",
        sector: Math.random() > 0.5 ? "Private" : "Government",
      }));
      this.setState({ jobs: data, isLoading: false });
    } catch (err) {
      console.error("Failed to fetch jobs", err);
      this.setState({ isLoading: false });
    }
  };

  handleSearch = (e) => this.setState({ search: e.target.value });
  handleLocation = (e) => this.setState({ location: e.target.value });
  handleSector = (e) => this.setState({ sector: e.target.value });

  toggleSaveJob = (id) => {
    this.setState((prevState) => ({
      savedJobs: prevState.savedJobs.includes(id)
        ? prevState.savedJobs.filter((jobId) => jobId !== id)
        : [...prevState.savedJobs, id],
    }));
  };

  jobMatchesSkills = (tags) =>
    tags.some((tag) => this.state.userSkills.includes(tag));

  render() {
    const { jobs, search, location, sector, savedJobs, isLoading } = this.state;

    const filteredJobs = jobs.filter((job) => {
      return (
        (sector === "All" || job.sector === sector) &&
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    });

    return (
      <div className="p-6 max-w-5xl mx-auto bg-white rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold text-orange-600 mb-6 text-center">Job Openings</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by job title or company"
            className="px-4 py-2 border rounded-lg focus:outline-none"
            value={search}
            onChange={this.handleSearch}
          />
          <input
            type="text"
            placeholder="Search by location"
            className="px-4 py-2 border rounded-lg focus:outline-none"
            value={location}
            onChange={this.handleLocation}
          />
          <select
            className="px-4 py-2 border rounded-lg"
            value={sector}
            onChange={this.handleSector}
          >
            <option value="All">All Sectors</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
          </select>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="space-y-6">
            {filteredJobs.map((job) => {
              const matched = this.jobMatchesSkills(job.tags);
              const isSaved = savedJobs.includes(job.id);

              return (
                <div
                  key={job.id}
                  className={`p-5 rounded-xl border shadow-sm flex justify-between items-start transition-transform ${
                    matched ? "bg-orange-50 border-orange-200" : "bg-white"
                  }`}
                >
                  <div className="flex space-x-4">
                    <img src={job.logo} alt="logo" className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <p className="text-sm text-gray-600">
                        {job.company} • {job.location} • {job.sector}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {job.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded-full ${
                              matched ? "bg-orange-100 text-orange-800" : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button onClick={() => this.toggleSaveJob(job.id)} className="text-orange-600">
                    {isSaved ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

// Wrap and export with navigation
export default withAuth(withRouter(JobListings));

// Utility to use `navigate` inside class component
function withRouter(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
