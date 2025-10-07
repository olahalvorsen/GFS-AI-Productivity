import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WeatherExperiment.css';

const WeatherExperiment = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Auto-load weather data when component mounts
  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    
    // List of endpoints to try in order
    const endpoints = [
      '/api/WeatherForecast',  // Proxy route
      'https://localhost:7112/api/WeatherForecast',  // HTTPS direct
      'http://localhost:5050/api/WeatherForecast',   // HTTP direct
    ];
    
    for (let i = 0; i < endpoints.length; i++) {
      try {
        console.log(`Trying endpoint ${i + 1}/${endpoints.length}: ${endpoints[i]}`);
        const response = await fetch(endpoints[i]);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          throw new Error(`Expected JSON response but got: ${contentType}. Response: ${text.substring(0, 200)}...`);
        }
        
        const data = await response.json();
        setWeatherData(data);
        console.log(`Success with endpoint: ${endpoints[i]}`);
        setLoading(false);
        return; // Success, exit the loop
        
      } catch (err) {
        console.log(`Endpoint ${endpoints[i]} failed:`, err.message);
        
        // If this is the last endpoint, set the error
        if (i === endpoints.length - 1) {
          setError(`All endpoints failed. Last error: ${err.message}`);
        }
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="weather-experiment">
      <Link to="/" className="back-button">← Back to Home</Link>
      
      <h1>Weather Forecast - Norwest, Sydney NSW Australia</h1>
      <p>Current 5-day weather forecast for your location.</p>

      <div className="experiment-explainer">
        <h3>🔗 Backend + Frontend Test</h3>
        <p>
          This page shows how the React frontend talks to the .NET backend API. 
          The backend fetches real weather data and sends it to the frontend to display.
        </p>
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ 
            fontSize: '18px', 
            color: '#666',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              border: '2px solid #007acc',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            Loading weather forecast...
          </div>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      )}

      {!loading && weatherData.length > 0 && (
        <div className="weather-results">
          <h2>5-Day Weather Forecast</h2>
          <div className="weather-grid">
            {weatherData.map((forecast, index) => (
              <div key={index} className="weather-card">
                <div className="weather-date">
                  {new Date(forecast.date).toLocaleDateString()}
                </div>
                <div className="weather-temp">
                  {forecast.temperatureC}°C ({forecast.temperatureF}°F)
                </div>
                <div className="weather-summary">{forecast.summary}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherExperiment;