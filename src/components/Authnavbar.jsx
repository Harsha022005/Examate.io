import { Link } from "react-router-dom";
function headernavbar() {
  
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
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Explore
          </Link>
        
            
          
        </div>
      </div>
    </div>
  );
}
export default headernavbar;
