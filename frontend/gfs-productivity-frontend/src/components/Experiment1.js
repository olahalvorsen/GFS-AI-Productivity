import React from 'react';
import { Link } from 'react-router-dom';

const Experiment1 = () => {
  return (
    <div className="experiment-container">
      <header className="experiment-header">
        <h1>Experiment 1: Modern Tech Stack</h1>
        <nav>
          <Link to="/" className="nav-button">← Back to Home</Link>
        </nav>
      </header>
      
      <main className="experiment-content">
        <div className="content-section">
          <h2>🚀 GitHub Copilot Playground</h2>
          <p>
            Welcome to your blank canvas! This is where you can experiment with GitHub Copilot's powerful features.
          </p>
          
          <div className="copilot-instructions">
            <div className="instruction-card">
              <h3>🎯 Getting Started</h3>
              <p>Try asking GitHub Copilot to help you with these interesting topics:</p>
              <ul>
                <li>Create a React component for data visualization</li>
                <li>Build a form with validation</li>
                <li>Implement a search functionality</li>
                <li>Add animations and transitions</li>
                <li>Create utility functions for data manipulation</li>
                <li>Build a modal or popup component</li>
                <li>Implement drag and drop functionality</li>
              </ul>
            </div>
            
            <div className="instruction-card">
              <h3>💡 Pro Tips</h3>
              <ul>
                <li>Start with comments describing what you want to build</li>
                <li>Use descriptive function and variable names</li>
                <li>Ask Copilot to explain code by adding comments</li>
                <li>Try different approaches to the same problem</li>
                <li>Experiment with different frameworks and libraries</li>
              </ul>
            </div>
          </div>
          
          <div className="playground-area">
            <h3>🛠️ Your Playground Area</h3>
            <p>Start coding below or create new files to explore Copilot's capabilities!</p>
            
            {/* This is your blank canvas - start building something amazing! */}
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experiment1;