import React from 'react';
import { Link } from 'react-router-dom';

const Experiment2 = () => {
  return (
    <div className="experiment-container">
      <header className="experiment-header">
        <h1>Experiment 2</h1>
        <nav>
          <Link to="/" className="nav-button">← Back to Home</Link>
        </nav>
      </header>
      
      <main className="experiment-content">
        <div className="content-section">
          <h2>⚡ Quick Setup & Development Playground</h2>
          <p>
            Welcome to your development setup playground! Experiment with rapid prototyping and development workflows.
          </p>
          
          <div className="copilot-instructions">
            <div className="instruction-card">
              <h3>🎯 Quick Development Ideas</h3>
              <p>Try asking GitHub Copilot to help you rapidly build:</p>
              <ul>
                <li>API integration with fetch or axios</li>
                <li>Environment configuration setup</li>
                <li>Database connection helpers</li>
                <li>Authentication and authorization flows</li>
                <li>Error handling and logging utilities</li>
                <li>Build scripts and automation tools</li>
                <li>Testing setup and mock data generators</li>
              </ul>
            </div>
            
            <div className="instruction-card">
              <h3>💡 Rapid Development Tips</h3>
              <ul>
                <li>Use Copilot to generate boilerplate code quickly</li>
                <li>Ask for configuration files and setup scripts</li>
                <li>Generate sample data and mock APIs</li>
                <li>Create development helpers and utilities</li>
                <li>Build reusable components and hooks</li>
                <li>Generate documentation and comments</li>
              </ul>
            </div>
          </div>
          
          <div className="playground-area">
            <h3>🛠️ Your Development Playground</h3>
            <p>Start building development tools and workflows here!</p>
            
            {/* Quick setup and development experimentation area */}
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experiment2;