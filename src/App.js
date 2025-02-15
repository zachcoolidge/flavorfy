import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Redirect from './Redirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/share" element={<Redirect/>} />
        {/* Add more routes as needed */}
        <Route path="/" element={
          <div>
            <h1>Welcome to Flavorfy</h1>
            <p>This is the homepage.</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;