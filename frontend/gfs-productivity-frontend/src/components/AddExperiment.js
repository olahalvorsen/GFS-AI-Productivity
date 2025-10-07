import React from 'react';
import { Link } from 'react-router-dom';

const AddExperiment = () => {
  return (
    <div className="experiment-container">
      <header className="experiment-header">
        <h1>➕ Create Your Experiment</h1>
        <nav>
          <Link to="/" className="nav-button">← Back to Home</Link>
        </nav>
      </header>
      
      <main className="experiment-content">
        <div className="content-section">
          <h2>🛠️ Go Wild!</h2>
          <p>
            Explore some concepts you want to know more about, add another page, experiment with MCPs, or something entirely different! :D
          </p>
          
          <div className="add-experiment-guide">
            <div className="guide-step">
              <p>Add some backend code if you'd like, create new frontend components, or dive into whatever sparks your curiosity. The playground is yours!</p>
            </div>
            
            <div className="guide-step">
              <p><strong>Want it to be demoable in the UI?</strong> Create a new component in the components folder and add it to Home.js so we can demo it without stepping on each other's toes!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddExperiment;