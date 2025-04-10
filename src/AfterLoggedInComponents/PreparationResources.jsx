import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../AuthContext/withAuth";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

// Utility to use `navigate` inside class component
function withRouter(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

class PreparationResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      search: "aptitude preparation",
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchYouTubeVideos(this.state.search);
  }

  fetchYouTubeVideos = async (query) => {
    this.setState({ loading: true });
    try {
      const API_KEY = "AIzaSyDDlzrmPLVPCE2Ifmm_3wler93ul975-pY"; // 🔑 Replace this with your API key
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: API_KEY,
            q: query,
            part: "snippet",
            maxResults: 9,
            type: "video",
          },
        }
      );
      this.setState({ videos: response.data.items, loading: false });
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      this.setState({ loading: false });
    }
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    this.fetchYouTubeVideos(this.state.search);
  };

  render() {
    const { videos, search, loading } = this.state;

    return (
      <div className="min-h-screen p-6 bg-white rounded-none shadow-none">
        <h1 className="text-2xl font-bold text-orange-600 mb-6 text-center">
          Preparation Resources
        </h1>

        <form
          onSubmit={this.handleSearchSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <input
            type="text"
            value={search}
            onChange={this.handleSearchChange}
            placeholder="Search topics (e.g. Java, Aptitude, SQL)"
            className="px-4 py-2 border rounded-lg w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Search
          </button>
        </form>

        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id.videoId}
                className="bg-orange-50 border border-orange-200 rounded-xl overflow-hidden shadow-md transition hover:scale-105"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="w-full"
                  />
                  <div className="p-4">
                    <h2 className="text-sm font-semibold text-orange-700 mb-1">
                      {video.snippet.title}
                    </h2>
                    <p className="text-xs text-gray-600">
                      {video.snippet.channelTitle}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(withRouter(PreparationResources));
