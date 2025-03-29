import { Link } from "react-router-dom";
function navbar() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="header container mx-auto flex justify-between items-center py-4 px-6 bg-white shadow-md">
        <div className="App-header">
          <a
            href="/"
            className="text-4xl font-bold text-blue-600 hover:text-gray-600 transition duration-300"
          >
            ExamMate.io
          </a>
        </div>
        <div className="App-nav flex space-x-6">
          <a
            href="/"
            className="text-xl text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Home
          </a>
          <Link
            to="/signup"
            className="text-xl text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="text-xl text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Login
          </Link>
          <Link to="/explore" className="text-xl text-gray-700 hover:text-blue-600 transition duration-300">
            Explore
          </Link>
          {/* <Link
            to="/SrDashboard"
            className="text-xl text-gray-700 hover:text-blue-600 transition duration-300"
          >
            SrDashboard
          </Link>
          <Link
            to="/JrDashboard"
            className="text-xl text-gray-700 hover:text-blue-600 transition duration-300"
          >
            JrDashboard
          </Link> */}
        </div>
      </div>
    </div>
  );
}
export default navbar;
