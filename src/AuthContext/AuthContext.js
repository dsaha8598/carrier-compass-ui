import React, { useState, useEffect, useRef } from 'react';
import { AuthContext } from './AuthContextContext';
import Loader from '../Loader';

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem("access_token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isFirstTimeUser = useRef(false); // ✅ useRef so it persists across renders but doesn't trigger re-render

  useEffect(() => {
    let interval;

    const fetchUser = async () => {
      if (authToken && !isFirstTimeUser.current) { // ✅ check .current
        
        try {
          const res = await fetch("http://localhost:8181/careerCompass/user/details", {
            headers: { Authorization: `Bearer ${authToken}` },
          });

          if (res.ok) {
            const data = await res.json();
            setUser(data);
          } else {
            logout();
          }
        } catch (err) {
          logout();
        }
      }
      setLoading(false);
    };

    fetchUser();

    if (authToken) {
      interval = setInterval(async () => {
        try {
          const res = await fetch("http://localhost:8181/careerCompass/user/details", {
            headers: { Authorization: `Bearer ${authToken}` },
          });

          if (res.ok) {
            const data = await res.json();
            localStorage.setItem("access_token", data.token);
            setAuthToken(data.token);
          } else {
            logout();
          }
        } catch {
          logout();
        }
      }, 120 * 60 * 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [authToken]);

  const login = async (email, password) => {
    const res = await fetch("http://localhost:8181/careerCompass/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("access_token", data.token);
      setAuthToken(data.token);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setAuthToken(null);
    setUser(null);
  };

  const updateAuthTokenAfterUserRegisters = (userData) => {
    console.log("updateAuthTokenAfterUserRegisters: ", userData)
    localStorage.setItem("access_token", userData.token);
    setAuthToken(userData.token);
    isFirstTimeUser.current = true; // ✅ mark to avoid fetchUser
    return true;
  };

  const value = {
    authToken,
    user,
    login,
    logout,
    isAuthenticated: !!authToken,
    updateAuthTokenAfterUserRegisters,
  };

  return (
    <AuthContext.Provider value={value}>
      {/**if api call is still executing loading will be true and a loader animation will be displayed */}
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
