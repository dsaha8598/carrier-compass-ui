import React, { useState, useEffect, Component } from "react";
import Logo from "./images/logo.png";
import OTPBackgroundImage from "./images/verify-otp-background.png";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTER_URLS from "./Constants/RouterUrls";

class OtpValidation extends Component {
    constructor(props) {
        super(props);
        this.onClickingChange = this.onClickingChange.bind(this);
        this.state = {
            timer: 10, // 2 minutes
            isResendDisabled: true, // Disable resend initially
            loading: false,
             error: null
        };
        this.interval = null;
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startTimer = () => {
        this.setState({ timer: 10, isResendDisabled: true });

        this.interval = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.timer <= 1) {
                    clearInterval(this.interval);
                    return { timer: 0, isResendDisabled: false };
                }
                return { timer: prevState.timer - 1 };
            });
        }, 1000);
    };

    handleResend = async () => {
        // Set loading to true before making API call
        this.setState({ loading: true, error: null });

        this.setState({ isResendDisabled: true });
        this.startTimer(); // Restart the timer

        try {
            const response = await fetch(`http://localhost:8181/careerCompass/user/send/otp?email=${this.props.location?.state?.email}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
               // body: JSON.stringify({ email: this.props.location?.state?.email }),
            });

            if (!response.ok) {
                throw new Error("Failed to send OTP, Please Retry");
            }
            const data = await response.json();
            console.log("response from service",data)
            this.setState({loading:false});
        } catch (error) {
            console.error("Error in resending OTP:", error);
        }
    };

    formatTime = () => {
        const minutes = Math.floor(this.state.timer / 60);
        const seconds = this.state.timer % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    onClickingChange() {
        console.log("Change button clicked");
        this.props.navigate("/forgotPassword");
    }

    render() {
        const { location } = this.props;
        const email = location?.state?.email || "N/A";

        return (
            <React.StrictMode>
                <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100">
                    {/* Header Section */}
                    <header className="absolute top-4 left-4 flex items-center">
                        <img alt="Compass Logo" className="h-10 w-10" src={Logo} width="50" height="50" />
                        <h1 className="text-2xl font-bold ml-3 text-left text-orange-500">
                            CareerCompass
                        </h1>
                    </header>

                    {this.state.loading ? (
                        <div className="flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-orange-500 border-dotted rounded-full animate-spin"></div>
                        <p className="mt-3 text-lg font-semibold text-orange-500">Loading...</p>
                        </div>
                    ):(
                   // {/* OTP Validation Card */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80">
                            {/* OTP Icon */}
                            <div className="flex justify-center mb-4">
                                <img alt="Email verification icon" className="w-30 h-30" src={OTPBackgroundImage} />
                            </div>

                            {/* Email Verification Title */}
                            <h2 className="text-xl font-semibold text-center mb-2">Verify Your Email</h2>

                            {/* Email Display & Change Button */}
                            <p className="text-center text-gray-600 mb-4">
                                A 6-digit code has been sent to <br />
                                <span className="font-semibold">{email}</span>
                                <button 
                                    className="text-orange-600 underline ml-2" 
                                    onClick={this.onClickingChange}
                                >
                                    Change
                                </button>
                            </p>

                            {/* OTP Input Fields */}
                            <div className="flex justify-center space-x-2 mb-4">
                                {Array(6).fill(0).map((_, index) => (
                                    <input 
                                        key={index} 
                                        className="w-10 h-10 border border-gray-300 rounded text-center" 
                                        maxLength="1" 
                                        type="text" 
                                    />
                                ))}
                            </div>

                            {/* OTP Expiry Timer & Resend Options */}
                            <p className="text-center text-gray-600 mb-4">
                                The OTP will expire in <span className="font-semibold text-orange-500">5:00</span> min<br />
                                Didn't receive the code? 
                                <br></br>
                                <button
                            className={`text-orange-600 underline ${this.state.isResendDisabled ? "cursor-not-allowed opacity-50" : ""}`}
                            onClick={this.handleResend}
                            disabled={this.state.isResendDisabled}
                        >
                            Resend
                        </button> in <span className="font-semibold text-orange-700">{this.formatTime()}</span>
                            </p>

                            {/* Verify Button */}
                            <button className="w-full bg-orange-500 text-white py-2 rounded">Verify</button>

                            {/* Remember Device Checkbox */}
                            <div className="flex items-center justify-center mt-4">
                                <input className="mr-2" id="remember-email" type="checkbox" />
                                <label className="text-gray-600" htmlFor="remember-email">
                                    Remember this device. 
                                    <a className="text-orange-500" href="#"> Learn More </a>
                                </label>
                            </div>
                        </div>
                    </div> )};
                </div>
            </React.StrictMode>
        );
    }
}

// Wrapper to inject `navigate` and `location`
function OtpValidationNavigate(props) {
    let navigate = useNavigate();
    const location = useLocation();
    return <OtpValidation {...props} navigate={navigate} location={location} />;
}

export default OtpValidationNavigate;
