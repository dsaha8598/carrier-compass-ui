import React, { Component } from "react";
import Logo from "./images/logo.png";
import OTPBackgroundImage from "./images/verify-otp-background.png";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTER_URLS from "./Constants/RouterUrls";
import Loader from "./Loader";

class OtpValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 10,
            isResendDisabled: true,
            loading: false,
            error: null,
            otp: ["", "", "", "", "", ""],
        };
        this.interval = null;
        this.otpRefs = Array(6).fill().map(() => React.createRef());
    }

    componentDidMount() {
        this.startTimer();
        // Delay focus to avoid hydration issues
        setTimeout(() => this.otpRefs[0]?.current?.focus(), 100);
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

    handleOtpChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...this.state.otp];
            newOtp[index] = value;
            this.setState({ otp: newOtp }, () => {
                if (value !== "" && index < 5) {
                    this.otpRefs[index + 1].current.focus();
                }
            });
        }
    };

    handleKeyDown = (index, event) => {
        if (event.key === "Backspace" && this.state.otp[index] === "" && index > 0) {
            this.otpRefs[index - 1].current.focus();
        }
    };

    handleResend = async () => {
        this.setState({ loading: true, error: null });
        this.setState({ isResendDisabled: true });
        this.startTimer();

        try {
            const response = await fetch(`http://localhost:8181/careerCompass/user/send/otp?email=${this.props.location?.state?.email}&pageSource=${this.props.location?.state?.pageSource}`, 
                {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) throw new Error("Failed to send OTP, Please Retry");

            const data = await response.json();
            console.log("OTP Resent Successfully:", data);
        } catch (error) {
            console.error("Error in resending OTP:", error);
            alert("Something went wrong while resending OTP.");
        } finally {
            this.setState({ loading: false });
        }
    };

    formatTime = () => {
        const minutes = Math.floor(this.state.timer / 60);
        const seconds = this.state.timer % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    onClickingChange = () => {
        this.props.navigate("/forgotPassword");
    };

    handleVerify = async () => {
        const pageSource = this.props.location?.state?.pageSource;
        const { otp } = this.state;
        const email = this.props.location?.state?.email;
        const otpString = otp.join("");

        if (otpString.length !== 6) {
            alert("Please enter the full 6-digit OTP.");
            return;
        }

        this.setState({ loading: true, error: null });

        try {
            const response = await fetch(`http://localhost:8181/careerCompass/user/validate/otp?email=${email}&otp=${otpString}&pageSource=${pageSource}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) throw new Error("OTP verification failed");

            const result = await response.json();
            console.log("OTP verified successfully", result);

            if (result.message) {
                alert(result.message);
            } else{
            console.log("pagesource:", pageSource);
            switch (pageSource) {
                case "signUp":
                    this.props.navigate(ROUTER_URLS.DASHBOARD_URL || "/dashboard");
                    break;
                case "forgotPassword":
                    this.props.navigate(ROUTER_URLS.UPDATE_PASSWORD_URL || "/updatePassword", { state: { email: email} });
                    break;
            }
        }
        } catch (error) {
            console.error("OTP verification error:", error);
            alert("OTP verification failed. Please try again.");
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { location } = this.props;
        const email = location?.state?.email || "N/A";
        const { otp, loading, isResendDisabled } = this.state;

        return (
            <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100">
                {/* Header */}
                <header className="absolute top-4 left-4 flex items-center">
                    <img alt="Compass Logo" className="h-10 w-10" src={Logo} />
                    <h1 className="text-2xl font-bold ml-3 text-orange-500">CareerCompass</h1>
                </header>

                {/* Loader */}
                {loading ? (
                    <Loader></Loader>
                ) : (
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80">
                            {/* OTP Banner */}
                            <div className="flex justify-center mb-4">
                                <img alt="Verify Email" className="w-30 h-30" src={OTPBackgroundImage} />
                            </div>

                            <h2 className="text-xl font-semibold text-center mb-2">Verify Your Email</h2>
                            <p className="text-center text-gray-600 mb-4">
                                A 6-digit code has been sent to <br />
                                <span className="font-semibold">{email}</span>
                                {this.props.location?.state?.pageSource == "signUp" ? "" : (
                                <button className="text-orange-600 underline ml-2" onClick={this.onClickingChange}>
                                    Change
                                </button>)
                                }
                            </p>

                            {/* OTP Fields */}
                            <div className="flex justify-center space-x-2 mb-4">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={this.otpRefs[index]}
                                        className="w-10 h-10 border border-gray-300 rounded text-center"
                                        maxLength="1"
                                        type="text"
                                        value={digit}
                                        onChange={(e) => this.handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => this.handleKeyDown(index, e)}
                                    />
                                ))}
                            </div>

                            {/* Resend & Timer */}
                            <p className="text-center text-gray-600 mb-4">
                                The OTP will expire in <span className="font-semibold text-orange-500">5:00</span> min<br />
                                Didn’t receive the code?
                                <br />
                                <button
                                    className={`text-orange-600 underline ${isResendDisabled ? "cursor-not-allowed opacity-50" : ""}`}
                                    onClick={this.handleResend}
                                    disabled={isResendDisabled}
                                >
                                    Resend
                                </button>{" "}
                                in <span className="font-semibold text-orange-700">{this.formatTime()}</span>
                            </p>

                            {/* Verify Button */}
                            <button className="w-full bg-orange-500 text-white py-2 rounded" onClick={this.handleVerify}>
                                Verify
                            </button>

                            {/* Remember Device */}
                            <div className="flex items-center justify-center mt-4">
                                <input className="mr-2" id="remember-email" type="checkbox" />
                                <label className="text-gray-600" htmlFor="remember-email">
                                    Remember this device.{" "}
                                    <a className="text-orange-500" href="#">
                                        Learn More
                                    </a>
                                </label>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

// Wrapper to inject navigate and location into class component
function OtpValidationNavigate(props) {
    const navigate = useNavigate();
    const location = useLocation();
    return <OtpValidation {...props} navigate={navigate} location={location} />;
}

export default OtpValidationNavigate;
