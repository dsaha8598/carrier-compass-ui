import React, { Component } from "react";
import Logo from "./images/logo.png";
import OTPBackgroundImage from "./images/verify-otp-background.png";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ROUTER_URLS from "./Constants/RouterUrls";

class PasswordUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            confirmPassword: "",
            loading: false,
            passwordError: "",
            confirmPasswordError: "",
        };
    }

    handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        let passwordError = "";

        if (newPassword.length < 6) {
            passwordError = "Password must be at least 6 characters.";
        }

        this.setState({ newPassword, passwordError }, this.validateConfirmPassword);
    };

    handleConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        this.setState({ confirmPassword }, this.validateConfirmPassword);
    };

    validateConfirmPassword = () => {
        const { newPassword, confirmPassword } = this.state;
        let confirmPasswordError = "";

        if (confirmPassword && newPassword !== confirmPassword) {
            confirmPasswordError = "Passwords do not match.";
        }

        this.setState({ confirmPasswordError });
    };

    handleUpdatePassword = async () => {
        const { newPassword, confirmPassword, passwordError, confirmPasswordError } = this.state;
        const email = this.props.location?.state?.email;

        if (!newPassword || !confirmPassword || passwordError || confirmPasswordError) {
            alert("Please correct the errors before submitting.");
            return;
        }

        this.setState({ loading: true });

        try {
            const response = await fetch(`${ROUTER_URLS.SERVER_URL}/user/update/password?email=${email}&password=${newPassword}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) throw new Error("Password update failed.");

            const result = await response.json();
            alert(result.message || "Password updated successfully.");
            this.props.navigate(ROUTER_URLS.LOGIN_URL);
        } catch (error) {
            console.error("Update password error:", error);
            alert("Failed to update password. Please try again.");
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { location } = this.props;
        const email = location?.state?.email || "N/A";
        const { loading, newPassword, confirmPassword, passwordError, confirmPasswordError } = this.state;

        return (
            <React.StrictMode>
            {/* Loader */}
            {loading ? (
                    <Loader></Loader>
                ) : (<div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100">
                {/* Header */}
                <header className="absolute top-4 left-4 flex items-center">
                    <img alt="Compass Logo" className="h-10 w-10" src={Logo} />
                    <h1 className="text-2xl font-bold ml-3 text-orange-500">CareerCompass</h1>
                </header>

                
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80">
                            {/* Banner */}
                            <div className="flex justify-center mb-4">
                                <img alt="Verify Email" className="w-30 h-30" src={OTPBackgroundImage} />
                            </div>

                            <h2 className="text-xl font-semibold text-center mb-2">Update Your Password</h2>
                            <p className="text-center text-gray-600 mb-4">
                                Password reset for <br />
                                <span className="font-semibold">{email}</span>
                            </p>

                            {/* Password Inputs */}
                            <div className="mb-4">
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={this.handlePasswordChange}
                                />
                                {passwordError && (
                                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={this.handleConfirmPasswordChange}
                                />
                                {confirmPasswordError && (
                                    <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
                                )}
                            </div>

                            {/* Update Button */}
                            <button
                                className="w-full bg-orange-500 text-white py-2 rounded"
                                onClick={this.handleUpdatePassword}
                                disabled={
                                    loading ||
                                    !newPassword ||
                                    !confirmPassword ||
                                    passwordError ||
                                    confirmPasswordError
                                }
                            >
                                Update Password
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
              
            </div>  )}
            </React.StrictMode>
        );
    }
}

// Wrapper to inject navigate and location into class component
function PasswordUpdateNavigate(props) {
    const navigate = useNavigate();
    const location = useLocation();
    return <PasswordUpdate {...props} navigate={navigate} location={location} />;
}

export default PasswordUpdateNavigate;
