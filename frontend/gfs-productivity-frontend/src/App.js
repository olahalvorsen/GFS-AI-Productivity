import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Experiment1 from './components/Experiment1';
import Experiment2 from './components/Experiment2';
import Experiment3 from './components/Experiment3';
import AddExperiment from './components/AddExperiment';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiment1" element={<Experiment1 />} />
          <Route path="/experiment2" element={<Experiment2 />} />
          <Route path="/experiment3" element={<Experiment3 />} />
          <Route path="/add-experiment" element={<AddExperiment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;