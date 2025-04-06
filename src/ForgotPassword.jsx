import React, { Component } from "react";
import forgotpasswordimage from "./images/forgot-password-background.png";
import ROUTER_URLS from "./Constants/RouterUrls";
import { useNavigate } from "react-router-dom";

 class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "" ,loading: false, error: null};
        this.handleChange = this.handleChange.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    render() {
        return (
            <React.StrictMode>
                <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100">
                    <header className="absolute top-4 left-4 flex items-center">
                        <img
                            alt="Compass Logo"
                            className="h-10 w-10"
                            height="50"
                            src="https://storage.googleapis.com/a1aa/image/RLb3e9uXSrTC3cYDHFWmqQTIr39KE6mGyV3KjWVY-u4.jpg"
                            width="50"
                        />
                        <h1 className="text-2xl font-bold ml-3 text-left text-orange-500">
                            CareerCompass
                        </h1>
                    </header>

                    {/** if loading is true then ui will display a loading page otherwise it will display forgot password page*/}
                    {this.state.loading ? (
                        <div className="flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-orange-500 border-dotted rounded-full animate-spin"></div>
                        <p className="mt-3 text-lg font-semibold text-orange-500">Loading...</p>
                        </div>
                    ) : (
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                        <div className="flex justify-center mb-4">
                            <img
                                alt="Illustration of a girl with her hands on her cheeks looking worried"
                                className="w-30 h-30"
                                src={forgotpasswordimage}
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
                            Forgot Password
                        </h1>
                        <p className="text-xl font-italic text-center mb-4 text-gray-800">
                            No worries, Submit your email to reset your password
                        </p>
                        <form onSubmit={this.onClickSubmit}>
                            <div className="mb-4">
                                <label
                                    className="block text-sm text-orange-600 mb-1 font-semibold"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="email"
                                    placeholder="Your email id"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            <a
                                className="text-sm text-orange-500 hover:text-gray-900"
                                href={ROUTER_URLS.LOGIN_URL}
                            >
                                Back to login
                            </a>
                        </div>
                    </div>)};
                </div>
            </React.StrictMode>
        );
    }

    // To capture the email from input box and update the email value in state
    handleChange(event) {
        console.log("Email Input:", event.target.value);
        this.setState({ email: event.target.value });
    }

    async onClickSubmit(event) {
        event.preventDefault(); // Prevent page reload
        console.log("Submit button clicked");
        console.log("Entered Email:", this.state.email);

         // Set loading to true before making API call
         this.setState({ loading: true, error: null });

         try {
         // Make GET API request
         const response = await fetch(`http://localhost:8181/careerCompass/user/send/otp?email=${this.state.email}&pageSource=forgotPassword`);
            
         if (!response.ok) {
             throw new Error("Failed to send OTP, Please Retry");
         }

         const data = await response.json();
         console.log("API Response:", data);

         if(data.message === "OTP sent successfully"){
             // ✅ Navigate to "/verify/otp" and pass email
          this.props.navigate("/verify/otp", { state: { email: this.state.email, pageSource: "forgotPassword" } });
         }
         window.alert(data.message);
         this.setState({loading:false});

          
        } catch (error) {
            this.setState({ error: error.message });
            window.alert(error.message);
        } finally {
            this.setState({ loading: false });
        }
    }

   
    
}

function ForgotPasswordWithNavigate(props) {
    let navigate = useNavigate();
    return <ForgotPassword {...props} navigate={navigate} />;
}

export default ForgotPasswordWithNavigate;
 
