import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/unauthnavbar';
import SrDashboard from './dashboard/Srdashboaard';
import Home from './dashboard/home';
import JrDashboard from './dashboard/Jrdashboard';
import Explore from './dashboard/explore';

function App() {
  const location = useLocation();
  const hidehome =location.pathname==='/' || location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/SrDashboard' || location.pathname === '/JrDashboard'|| location.pathname==='/explore';
  const hideheader = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/SrDashboard' || location.pathname === '/JrDashboard';

  return (
    <div className="App">
      {/* Navigation Bar */}
      {!hideheader && <Navbar />}
      
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SrDashboard" element={<SrDashboard />} />
        <Route path="/JrDashboard" element={<JrDashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>

      {!hidehome && <Home />}
    </div>
  );
}

export default App;
