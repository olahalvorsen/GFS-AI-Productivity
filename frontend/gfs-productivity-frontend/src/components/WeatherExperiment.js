import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert, Spinner, Badge } from 'react-bootstrap';
import WindDirection from './WindDirection';
import WindStrength from './WindStrength';
import PeopleIcons from './PeopleIcons';
import WeatherDashboard from './WeatherDashboard';

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
    <Container fluid className="bg-primary text-white min-vh-100" style={{
      background: '#007bff'
    }}>
      <Container className="py-4">
        <Row>
          <Col>
            <Link to="/" className="btn btn-outline-light mb-4">
              ← Back to Home
            </Link>
          </Col>
        </Row>
        
        <Row className="text-center mb-4">
          <Col>
            <h1 className="display-4 mb-3">Weather Forecast</h1>
            <p className="lead">Norwest, Sydney NSW Australia</p>
            <p className="mb-4">Current 5-day weather forecast for your location.</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={8} className="mx-auto">
            <Card className="bg-transparent border-light">
              <Card.Body>
                <h5 className="card-title text-white">
                  🔗 Backend + Frontend Test
                </h5>
                <p className="card-text text-light">
                  This page shows how the React frontend talks to the .NET backend API. 
                  The backend fetches real weather data and sends it to the frontend to display.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {loading && (
          <Row>
            <Col className="text-center py-5">
              <Spinner animation="border" variant="light" className="me-3" />
              <span className="fs-5">Loading weather forecast...</span>
            </Col>
          </Row>
        )}

        {error && (
          <Row>
            <Col md={8} className="mx-auto">
              <Alert variant="danger">
                <Alert.Heading>Error Loading Weather Data</Alert.Heading>
                <p className="mb-0">{error}</p>
              </Alert>
            </Col>
          </Row>
        )}

        {!loading && weatherData.length > 0 && (
          <>
            {/* Weather Dashboard */}
            <WeatherDashboard weatherData={weatherData} />

            {/* 5-Day Forecast */}
            <Row className="mt-5">
              <Col>
                <h2 className="text-center mb-4">5-Day Weather Forecast</h2>
                <Row className="g-4">
                  {weatherData.map((forecast, index) => (
                    <Col key={index} sm={6} md={4} lg={3} xl={2}>
                      <Card className="h-100 bg-transparent border-light text-white">
                        <Card.Body className="text-center">
                          <Card.Title className="h6 text-light mb-3">
                            {new Date(forecast.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </Card.Title>
                          <div className="display-6 fw-bold mb-3">
                            {forecast.temperatureC}°C
                          </div>
                          <div className="text-light mb-2">
                            {forecast.temperatureF}°F
                          </div>
                          <Badge bg="light" text="dark" className="px-3 py-2 mb-3">
                            {forecast.summary}
                          </Badge>
                          {forecast.windSpeed && (
                            <div className="mt-3">
                              <div className="text-light mb-1">
                                <small>💨 {forecast.windSpeed} km/h {forecast.windDirectionCompass}</small>
                              </div>
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Container>
  );
};

export default WeatherExperiment;