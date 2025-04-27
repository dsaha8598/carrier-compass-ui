import React, { Component } from "react";
import SignupBackgroundImage from "./images/signup-image.png";
import ROUTER_URLS from "./Constants/RouterUrls";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

// Utility to use `navigate` inside class component
function withRouter(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      gender: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      errors: {},
      loading: false,
      error: null,
      showTermsPage: false, // Add state to handle showing the Terms and Conditions page
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  validate = () => {
    const errors = {};
    const { name, email, phone, gender, dateOfBirth, password, confirmPassword, acceptTerms } = this.state;

    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone must be 10 digits";
    }

    if (!gender.trim()) errors.gender = "Gender is required";

    if (!dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
    } else if (new Date(dateOfBirth) > new Date()) {
      errors.dateOfBirth = "Date of Birth cannot be a future date";
    }

    if (!password) errors.password = "Password is required";
    if (password && password.length < 6) errors.password = "Minimum 6 characters required";
    if (confirmPassword !== password) errors.confirmPassword = "Passwords do not match";

    if (!acceptTerms) errors.acceptTerms = "You must accept Terms and Conditions";

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.setState({ loading: true, error: null });
      const { name, email, phone, gender, dateOfBirth, password } = this.state;
      try {
        const response = await fetch(ROUTER_URLS.SERVER_URL+"/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, phone, gender, dateOfBirth, password }),
        });

        if (!response.ok) { 
          throw new Error("Registration failed.");
        } 

        const result = await response.json();
        console.log("Server Response:", result);
        this.setState({ loading: false, error: null });

        this.props.navigate("/verify/otp", { state: { email: this.state.email, pageSource: "signUp" } });

      } catch (error) {
        console.error("Registration failed:", error);
        this.setState({ loading: false, error: "Registration failed" });
      }
    }
  };

  handleTermsClick = () => {
    this.setState({ showTermsPage: true });
  };

  closeTermsPage = () => {
    this.setState({ showTermsPage: false });
  };

  render() {
    const { errors, loading, showTermsPage, acceptTerms } = this.state;

    // If showTermsPage is true, display the Terms and Conditions page
    if (showTermsPage) {
      return (
        <div className="terms-page">
          <h1>Terms and Conditions</h1>
          <p>
            These are the terms and conditions for using our service...
            {/* Add your Terms and Conditions content here */}
          </p>
          <button onClick={this.closeTermsPage}>Close Terms and Conditions</button>
        </div>
      );
    }

    return (
      <React.StrictMode>
        {loading ? <Loader /> : this.signUpPageContent(errors, acceptTerms)}
      </React.StrictMode>
    );
  }

  signUpPageContent = (errors, acceptTerms) => {
    const today = new Date().toISOString().split('T')[0];

    return (
      <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100 overflow-auto">
        <header className="absolute top-4 left-4 flex items-center">
          <img
            alt="Compass Logo"
            className="h-10 w-10"
            src="https://storage.googleapis.com/a1aa/image/RLb3e9uXSrTC3cYDHFWmqQTIr39KE6mGyV3KjWVY-u4.jpg"
          />
          <h1 className="text-2xl font-bold ml-3 text-left text-orange-500">CareerCompass</h1>
        </header>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-3xl w-full flex flex-col md:flex-row items-center mt-16">
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <p className="mb-6">Congratulations on taking your first step with us.</p>
            <img
              alt="Illustration of a girl filling form"
              className="w-3/4 md:w-full object-cover"
              src={SignupBackgroundImage}
            />
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h2 className="text-3xl font-bold mb-6">Create an account</h2>
            <form onSubmit={this.handleSubmit} noValidate>
              {/* Input Fields */}
              {[ 
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
                { name: "phone", label: "Phone Number", type: "text" },
                { name: "password", label: "Password", type: "password" },
                { name: "confirmPassword", label: "Confirm Password", type: "password" },
              ].map(({ name, label, type }) => (
                <div className="mb-4" key={name}>
                  <label className="block text-gray-700" htmlFor={name}>{label}</label>
                  <input
                    className={`w-full p-3 border rounded-lg mt-1 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
                    id={name}
                    name={name}
                    type={type}
                    value={this.state[name]}
                    onChange={this.handleChange}
                  />
                  {errors[name] && (
                    <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}

              {/* Date of Birth */}
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  className={`w-full p-3 border rounded-lg mt-1 ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'}`}
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  max={today}
                  value={this.state.dateOfBirth}
                  onChange={this.handleChange}
                />
                {errors.dateOfBirth && (
                  <p className="text-sm text-red-500 mt-1">{errors.dateOfBirth}</p>
                )}
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className={`w-full p-3 border rounded-lg mt-1 ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                  value={this.state.gender}
                  onChange={this.handleChange}
                >
                  <option value="">-- Select Gender --</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-sm text-red-500 mt-1">{errors.gender}</p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start mb-4">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  className="mr-2 mt-1"
                  checked={acceptTerms}
                  onChange={this.handleChange}
                />
                <label className="text-gray-600 text-sm" htmlFor="acceptTerms">
                  By registering, you agree to our{" "}
                  <a className="text-orange-500" href="#/" onClick={this.handleTermsClick}>Terms & Conditions</a> and{" "}
                  <a className="text-orange-500" href="#/terms">Privacy Policy</a>.
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-sm text-red-500 mb-4">{errors.acceptTerms}</p>
              )}

              {/* Submit Button */}
              <div className="flex items-center justify-between mb-6">
                <button
                  className="bg-orange-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-orange-700 transition-colors"
                  type="submit"
                >
                  REGISTER
                </button>
              </div>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-700">Already have an account?</p>
              <a className="text-orange-600 font-bold mt-2 inline-block" href={"/#" + ROUTER_URLS.LOGIN_URL}>
                SIGN IN
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default withRouter(SignUp);
