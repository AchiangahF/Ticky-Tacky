import { Routes, Route } from 'react-router-dom';

// my routes
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';

   // authentication routes
   import Login from './pages/Login.jsx';
   import Signup from './pages/Signup.jsx';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </div>
  );
}

export default App;