import React, { Component } from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import ROUTER_URLS from "../Constants/RouterUrls";
import { useNavigate } from "react-router-dom";
import { withAuth } from "../AuthContext/withAuth";
import QuizApp from "./QuizComponent";

// Utility to use `navigate` inside class component
function withRouter(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

 class SideBar extends Component {

   handleLogout = async (e) => {
    e.preventDefault();
    this.props.auth.logout();
    this.props.navigate(ROUTER_URLS.BASE_URL || "/");
  };

    render() {
        return (
            <div className="flex">
                {/** Sidebar */}
                <div className="w-64 bg-white h-screen shadow-lg flex flex-col justify-between">
                    <div className="p-6">
                        <div className="flex items-center mb-6">
                            <img alt="Compass Logo" className="h-10 w-10" height="50" src={Logo} width="50" />
                            <h1 className="text-xl font-bold ml-3 text-left text-orange-600">CareerCompass</h1>
                        </div>
                        <nav>
                            <ul>
                                <li className="mb-2">
                                    <NavLink
                                        to={ROUTER_URLS.DASHBORD_URL}
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 rounded-l-full transition-all duration-300 ${
                                                isActive
                                                    ? "bg-orange-100 text-orange-600 font-semibold border-l-4 border-orange-500"
                                                    : "text-gray-600 hover:bg-orange-50"
                                            }`
                                        }
                                    >
                                        <i className="fas fa-home mr-3"></i>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink
                                        to={ROUTER_URLS.PROFILE_URL}
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 rounded-l-full transition-all duration-300 ${
                                                isActive
                                                    ? "bg-orange-100 text-orange-600 font-semibold border-l-4 border-orange-500"
                                                    : "text-gray-600 hover:bg-orange-50"
                                            }`
                                        }
                                    >
                                        <i className="fas fa-search mr-3"></i>
                                        Your Profile
                                    </NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink
                                        to={ROUTER_URLS.QUIZ_URL}
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 rounded-l-full transition-all duration-300 ${
                                                isActive
                                                    ? "bg-orange-100 text-orange-600 font-semibold border-l-4 border-orange-500"
                                                    : "text-gray-600 hover:bg-orange-50"
                                            }`
                                        }
                                    >
                                        <i className="fas fa-briefcase mr-3"></i>
                                        Quiz
                                    </NavLink>
                                </li>
                                <li className="mb-2">
                                    <a className="flex items-center px-4 py-2 text-gray-600 hover:bg-orange-50 rounded-l-full">
                                        <i className="fas fa-blog mr-3"></i>
                                        Career News & Blogs
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="flex items-center px-4 py-2 text-gray-600 hover:bg-orange-50 rounded-l-full">
                                        <i className="fas fa-lightbulb mr-3"></i>
                                        Skill Hub
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="flex items-center px-4 py-2 text-gray-600 hover:bg-orange-50 rounded-l-full">
                                        <i className="fas fa-chart-line mr-3"></i>
                                        Preparation Resources
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="flex items-center px-4 py-2 text-gray-600 hover:bg-orange-50 rounded-l-full">
                                        <i className="fas fa-cog mr-3"></i>
                                        Setting
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="flex items-center px-4 py-2 text-gray-600 hover:bg-orange-50 rounded-l-full">
                                        <i className="fas fa-question-circle mr-3"></i>
                                        Help
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="p-6">
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-full w-full" onClick={this.handleLogout}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}



// Wrap and export with navigation
export default withAuth(withRouter(SideBar));