import React from 'react';
import { Link } from 'react-router-dom';

const Experiment3 = () => {
  return (
    <div className="experiment-container">
      <header className="experiment-header">
        <h1>Experiment 3: Best Practices</h1>
        <nav>
          <Link to="/" className="nav-button">← Back to Home</Link>
        </nav>
      </header>
      
      <main className="experiment-content">
        <div className="content-section">
          <h2>🎯 Best Practices & Code Quality Playground</h2>
          <p>
            Welcome to your code quality playground! Focus on building production-ready, maintainable code.
          </p>
          
          <div className="copilot-instructions">
            <div className="instruction-card">
              <h3>🎯 Code Quality Experiments</h3>
              <p>Try asking GitHub Copilot to help you implement:</p>
              <ul>
                <li>Clean code patterns and SOLID principles</li>
                <li>Error boundaries and error handling</li>
                <li>Performance optimization techniques</li>
                <li>Accessibility (a11y) improvements</li>
                <li>Security best practices</li>
                <li>Code documentation and TypeScript types</li>
                <li>Testing strategies and test cases</li>
              </ul>
            </div>
            
            <div className="instruction-card">
              <h3>💡 Production-Ready Tips</h3>
              <ul>
                <li>Ask Copilot to refactor code for better readability</li>
                <li>Generate comprehensive error handling</li>
                <li>Create reusable design patterns</li>
                <li>Build accessible components</li>
                <li>Implement proper logging and monitoring</li>
                <li>Generate unit and integration tests</li>
              </ul>
            </div>
          </div>
          
          <div className="playground-area">
            <h3>🛠️ Your Quality Playground</h3>
            <p>Build production-ready, well-tested code here!</p>
            
            {/* Best practices and code quality experimentation area */}
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experiment3;