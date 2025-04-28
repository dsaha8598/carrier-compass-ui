import React, { Component } from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import ROUTER_URLS from "../Constants/RouterUrls";
import { useNavigate } from "react-router-dom";
import { withAuth } from "../AuthContext/withAuth";

// Utility to use `navigate` inside class component
function withRouter(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // for mobile menu toggle
    };
  }

  handleLogout = async (e) => {
    e.preventDefault();
    this.props.auth.logout();
    this.props.navigate(ROUTER_URLS.BASE_URL || "/");
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="flex">
        {/* Sidebar */}
        <div className={`bg-white h-screen shadow-lg flex flex-col justify-between 
          fixed md:relative z-20 transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 w-64`}>
          <div className="p-6">
            <div className="flex items-center mb-6">
              <img alt="Compass Logo" className="h-10 w-10" src={Logo} />
              <h1 className="text-xl font-bold ml-3 text-left text-orange-600">CareerCompass</h1>
            </div>
            <nav>
              <ul>
                {[
                  { to: ROUTER_URLS.DASHBORD_URL, label: "Dashboard", icon: "fa-home" },
                  { to: ROUTER_URLS.PROFILE_URL, label: "Your Profile", icon: "fa-search" },
                  { to: ROUTER_URLS.JOB_OVERVIEW_URL, label: "Eligible Jobs", icon: "fa-briefcase" },
                  { to: ROUTER_URLS.JOB_OPENINGS_URL, label: "Job Openings", icon: "fa-briefcase" },
                  { to: ROUTER_URLS.RESOURCE_URL, label: "Preparation Resources", icon: "fa-briefcase" },
                  { to: ROUTER_URLS.VLOGS_URL, label: "Career News & Blogs", icon: "fa-briefcase" },
                  { to: ROUTER_URLS.QUIZ_URL, label: "Quiz", icon: "fa-briefcase" },
                  { to: ROUTER_URLS.CHAT_SUPPORT_URL, label: "Help", icon: "fa-briefcase" },
                ].map((item, index) => (
                  <li key={index} className="mb-2">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-l-full transition-all duration-300 ${
                          isActive
                            ? "bg-orange-100 text-orange-600 font-semibold border-l-4 border-orange-500"
                            : "text-gray-600 hover:bg-orange-50"
                        }`
                      }
                    >
                      <i className={`fas ${item.icon} mr-3`}></i>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="p-6">
            <button
              className="bg-orange-600 text-white px-4 py-2 rounded-full w-full"
              onClick={this.handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Mobile hamburger button */}
        <div className="md:hidden fixed top-4 left-4 z-30">
          <button
            className="text-orange-600 focus:outline-none"
            onClick={this.toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

// Wrap and export with navigation
export default withAuth(withRouter(SideBar));
