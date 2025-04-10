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
      password: "",
      confirmPassword: "",
      errors: {},
      loading: false,
      error: null
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    const errors = {};
    const { name, email, phone, gender, password, confirmPassword } = this.state;

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
    if (!password) errors.password = "Password is required";
    if (password && password.length < 6) errors.password = "Minimum 6 characters required";
    if (confirmPassword !== password) errors.confirmPassword = "Passwords do not match";

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.setState({ loading: true, error: null });
      const { name, email, phone, gender, password } = this.state;
      try {
        const response = await fetch("http://localhost:8181/careerCompass/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            gender,
            password,
          }),
        });

        if (!response.ok){ 
          throw new Error("Password update failed.");
        }
        else{
          const result = await response.json();
          console.log("Server Response:", result);
          this.setState({ loading: false, error: null });
  
          // Navigate to OTP page with email
          this.props.navigate("/verify/otp", { state: { email: this.state.email, pageSource: "signUp"} });
        }
        

      } catch (error) {
        console.error("Registration failed:", error);
        this.setState({ loading: false, error: "Registration failed" });
      }
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <React.StrictMode>
        {this.state.loading ? <Loader /> : this.signUpPageContent(errors)}
      </React.StrictMode>
    );
  }

  signUpPageContent = (errors) => {
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
            <form onSubmit={this.handleSubmit}>
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
                    required
                  />
                  {errors[name] && (
                    <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className={`w-full p-3 border rounded-lg mt-1 ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                  value={this.state.gender}
                  onChange={this.handleChange}
                  required
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

              <div className="flex items-center justify-between mb-6">
                <button
                  className="bg-orange-600 text-white py-3 px-6 rounded-lg font-bold"
                  type="submit"
                >
                  REGISTER
                </button>
              </div>

              <div className="flex items-center mb-6">
                <input className="mr-2" id="terms" type="checkbox" required />
                <label className="text-gray-600 text-sm" htmlFor="terms">
                  By registering your details, you agree with our{" "}
                  <a className="text-orange-500" href="#">Terms & Conditions</a>, and{" "}
                  <a className="text-orange-500" href="#">Privacy and Cookie Policy</a>.
                </label>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-700">Already have an account with us?</p>
              <a className="text-orange-600 font-bold mt-2" href={"/#"+ROUTER_URLS.LOGIN_URL}>
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
