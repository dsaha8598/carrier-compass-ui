import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../AuthContext/withAuth";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

class CareerVlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchYouTubeVideos();
  }

  fetchYouTubeVideos = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=career%20tips%20job%20interview%20resume&type=video&maxResults=6&key=AIzaSyDDlzrmPLVPCE2Ifmm_3wler93ul975-pY`
      );
      this.setState({ videos: res.data.items, loading: false });
    } catch (error) {
      console.error("Failed to fetch videos", error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { videos, loading } = this.state;

    const staticNews = [
      {
        title: "Govt announces new employment scheme for 2025",
        description: "A new scheme to provide jobs in rural areas has been launched."
      },
      {
        title: "Top 10 skills in demand for tech roles",
        description: "Learn what companies are looking for in 2025 and how to upskill."
      },
      {
        title: "Resume writing tips from HR professionals",
        description: "Make your resume stand out with these proven tips."
      }
    ];

    return (
      <div className="min-h-screen bg-white p-6 md:p-10 text-gray-800">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-10">Career News & Vlogs</h1>

        {/* Static News and Articles */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {staticNews.map((news, index) => (
            <div key={index} className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-2xl shadow">
              <h2 className="text-lg font-semibold text-orange-700 mb-2">{news.title}</h2>
              <p className="text-sm text-gray-700">{news.description}</p>
            </div>
          ))}
        </div>

        {/* YouTube Videos */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Career Vlogs</h2>
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id.videoId}
                  className="bg-white rounded-xl overflow-hidden shadow border hover:shadow-lg transition-all"
                >
                  <iframe
                    className="w-full h-48"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-800">
                      {video.snippet.title.substring(0, 60)}...
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 text-center">
            <a
              href="https://www.youtube.com/results?search_query=career+vlogs+job+interview+resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full"
            >
              View More on YouTube
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(withRouter(CareerVlogs));

function withRouter(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
