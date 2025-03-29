import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Initialize the navigation function

  const handlesignup = () => {
    navigate("/signup"); // Navigate to the Login page
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-24 px-4">
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center space-y-8 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Welcome to ExamMate
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90">
              Your Ultimate Exam Preparation Platform
            </p>
            <p className="text-lg opacity-80">
              Personalized study plans, senior mentorship, and expert tips to
              boost your performance
            </p>
            <button
              onClick={handlesignup}
              className="mt-6 bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full 
                        hover:bg-indigo-50 hover:scale-105 transform transition duration-300 
                        shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features container mx-auto py-24 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            className="feature-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl 
                         transform hover:-translate-y-2 transition duration-300"
          >
            <span className="text-indigo-500 text-5xl block mb-4">📚</span>
            <p className="text-xl font-semibold text-gray-800">
              Personalized Study Plans
            </p>
          </div>
          <div
            className="feature-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl 
                         transform hover:-translate-y-2 transition duration-300"
          >
            <span className="text-emerald-500 text-5xl block mb-4">📝</span>
            <p className="text-xl font-semibold text-gray-800">
              Senior Mentorship
            </p>
          </div>
          <div
            className="feature-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl 
                         transform hover:-translate-y-2 transition duration-300"
          >
            <span className="text-rose-500 text-5xl block mb-4">💡</span>
            <p className="text-xl font-semibold text-gray-800">
              Expert Tips & Strategies
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section bg-gray-50 py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
            About ExamMate
          </h2>
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              ExamMate is your ultimate companion for exam preparation. We
              provide personalized study plans, Senior Mentorship, and expert
              strategies to help you ace your exams with confidence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform is designed to cater to students of all levels, from
              beginners to advanced learners. Join thousands of successful
              students who have improved their scores with ExamMate.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <button
                className="bg-indigo-600 text-white px-8 py-3 rounded-md 
                               hover:bg-indigo-700 transform hover:scale-105 transition duration-300 
                               shadow-md"
              >
                Learn More
              </button>
              <button
                className="bg-emerald-600 text-white px-8 py-3 rounded-md 
                               hover:bg-emerald-700 transform hover:scale-105 transition duration-300 
                               shadow-md"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg opacity-90">
            © 2025 ExamMate. All rights reserved.
          </p>
          <p className="text-sm mt-2 opacity-70">Follow us on:</p>
          <div className="flex justify-center gap-6 mt-4">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transform hover:scale-110 
                          transition duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
