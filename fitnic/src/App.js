import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Home from './components/Home';
import Exercises from './components/Exercises';
import Food from './components/Food';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/food" element={<Food />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;