import React, { Component } from "react";
import LoginBackgroundImage from "./images/login-background.png";
import ROUTER_URLS from "./Constants/RouterUrls";
import Logo from "./images/logo.png";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";


// Utility to use `navigate` inside class component
function withRouter(Component) {
   return function WrappedComponent(props) {
     const navigate = useNavigate();
     return <Component {...props} navigate={navigate} />;
   };
 }

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false,
      error: null
    };
  }

  validateForm = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Email and Password are required." });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.setState({ error: "Invalid email format." });
      return false;
    }
    return true;
  };

  handleLogin = async (e) => {
    this.setState({loading:true});
    e.preventDefault();
    if (!this.validateForm()) return;

    try {
      const response = await fetch("http://localhost:8181/careerCompass/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });

      if (!response.ok){ 
         throw new Error("Password update failed.");
       } 

      if (response.ok) {
        const data = await response.json();
        this.props.navigate(ROUTER_URLS.DASHBORD_URL || "/dashbord", { state: { userData: data } });
      } else if (response.status === 500) {
        this.setState({ error: "Invalid email or password." });
      } else {
        this.setState({ error: "Something went wrong. Please try again." });
      }
    } catch (error) {
      this.setState({ error: "Login failed. Please try again later." });
    }
    finally{
      this.setState({loading:true});
    }
  };

  render() {
    return (
      <React.StrictMode>
        {this.state.loading ? <Loader></Loader> : this.loginPageContent(this.state.error)}
      </React.StrictMode>
    );
  }

  loginPageContent = (error) => {
   return (
      <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100">
      <header className="absolute top-4 left-4 flex items-center">
        <img
          alt="Compass Logo"
          className="h-10 w-10"
          height="50"
          src={Logo}
          width="50"
        />
        <h1 className="text-2xl font-bold ml-3 text-left text-orange-500">
          CareerCompass
        </h1>
      </header>

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full">
          <div className="bg-white-600 rounded-l-lg p-8 flex flex-col items-center justify-center w-1/2">
            <img alt="signing in image" src={LoginBackgroundImage} />
          </div>

          <div className="p-8 w-1/2">
            <h2 className="text-2xl font-bold mb-4">Members Log in</h2>
            <p className="text-gray-600 mb-6">
              Sign in to continue your journey with Us. Let's begin from where you left !!
            </p>

            {this.state.error && (
              <div className="mb-4 text-red-600 font-semibold text-center">{this.state.error}</div>
            )}

            <form onSubmit={this.handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700">
                  <i className="fas fa-user mr-2"></i>
                  <input
                    type="text"
                    placeholder="Email"
                    className="border-b-2 border-gray-300 w-full py-2 focus:outline-none focus:border-yellow-500"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  <i className="fas fa-lock mr-2"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-b-2 border-gray-300 w-full py-2 focus:outline-none focus:border-yellow-500"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-700">Remember Me?</label>
              </div>

              <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-full w-full mb-4">
                Log In
              </button>

              <p className="text-center text-black-600">
                Don't have an account? <a href={ROUTER_URLS.SIGN_UP_URL} className="text-orange-500">REGISTER HERE</a>
              </p>
              <p className="text-center text-black-600">
                <a href={ROUTER_URLS.FORGOT_PASSWORD_URL} className="text-orange-500">Forgot Password</a>
              </p>
            </form>

            <div className="flex items-center justify-center mt-4">
              <button className="bg-orange-500 text-white py-2 px-4 rounded-full flex items-center">
                <i className="fab fa-facebook-f mr-2"></i> Log in with Social Media
              </button>
            </div>

            <p className="text-center text-gray-600 mt-4">
              Log in using social media to continue with CareerCompass
            </p>
          </div>
        </div>
      </div>
    </div>
   );
 };
}

export default withRouter(Login);
