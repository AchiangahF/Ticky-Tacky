import { Routes, Route } from 'react-router-dom';

// my routes
import Home from './components/Home.jsx';
import Dashboard from './components/dashboard.jsx';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;