import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Login() {
  // Senior Login States
  const [seniorEmail, setSeniorEmail] = useState("");
  const [seniorPassword, setSeniorPassword] = useState("");
  const [seniorError, setSeniorError] = useState("");
  const [seniorShowPassword, setSeniorShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Junior Login States
  const [juniorEmail, setJuniorEmail] = useState("");
  const [juniorPassword, setJuniorPassword] = useState("");
  const [juniorError, setJuniorError] = useState("");
  const [juniorShowPassword, setJuniorShowPassword] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Determine whether to show the logo
  const showLogo = ["/login", "/signup", "/SrDashboard"].includes(location.pathname);

  // Handle form submission
  async function handleSubmit(e, role) {
    e.preventDefault();

    let email, password, setErrorState;

    if (role === "senior") {
      email = seniorEmail;
      password = seniorPassword;
      setErrorState = setSeniorError;
    } else {
      email = juniorEmail;
      password = juniorPassword;
      setErrorState = setJuniorError;
    }

    // Validation
    if (!email || !password) {
      setErrorState("Please fill in all fields");
      return;
    }
    if (!email.includes("@")) {
      setErrorState("Enter a valid email format");
      return;
    }
    if (password.length < 6) {
      setErrorState("Password must be at least 6 characters long");
      return;
    }

    setErrorState("");
    setError("");
    setSuccess("");

    // // Check if user exists in localStorage
    // const existingUser = JSON.parse(localStorage.getItem("user"));
    // if (existingUser && existingUser.email === email && existingUser.password === password) {
    //   setSuccess("Login successful");
    //   setError("");
    //   role === "junior" ? navigate("/JrDashboard") : navigate("/SrDashboard");
    //   return;
    // }

    // Login API
    try {
      const loginData = {
        email,
        password,
      };
      const response = await axios.post("http://localhost:3000/login", loginData);

      if (response.status === 200) {
        setSuccess(response.data.message);
        setError("");
        role === "junior" ? navigate("/JrDashboard") : navigate("/SrDashboard");
      } else {
        setError(response.data.error);
        setSuccess("");
      }
      
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred during login");
      setSuccess("");
    }
  }

  // Render Login Card
  const renderLoginCard = (
    role,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    showPassword,
    setShowPassword
  ) => (
    <div className="login-card w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">{role} Login</h2>

      {error && (
        <div className="text-red-600 text-sm mb-4 text-center">
          {error}
        </div>
      )}

      <form onSubmit={(e) => handleSubmit(e, role.toLowerCase())} className="space-y-6">
        <div>
          <label className="block text-gray-600 font-medium mb-2">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            placeholder="Enter your email"
          />
        </div>

        <div className="relative">
          <label className="block text-gray-600 font-medium mb-2">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );

  return (
    <div className="login-container min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-4">
      {/* Logo */}
      {showLogo && (
        <div className="App-header mb-8">
          <a
            href="/"
            className="flex items-center justify-center gap-2 text-5xl font-extrabold text-white hover:text-gray-200 transition duration-300"
          >
            <span className="text-yellow-300">Exam</span>Mate.io
          </a>
        </div>
      )}

      {/* Login Cards */}
      <div className="login-wrapper grid grid-cols-1 md:grid-cols-2 gap-10">
        {renderLoginCard(
          "Senior",
          seniorEmail,
          setSeniorEmail,
          seniorPassword,
          setSeniorPassword,
          seniorError,
          setSeniorError,
          seniorShowPassword,
          setSeniorShowPassword
        )}
        {renderLoginCard(
          "Junior",
          juniorEmail,
          setJuniorEmail,
          juniorPassword,
          setJuniorPassword,
          juniorError,
          setJuniorError,
          juniorShowPassword,
          setJuniorShowPassword
        )}
      </div>
    </div>
  );
}

export default Login;
