import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import WindDirection from './WindDirection';
import WindStrength from './WindStrength';
import PeopleIcons from './PeopleIcons';

const WeatherDashboard = ({ weatherData }) => {
  if (!weatherData || weatherData.length === 0) {
    return null;
  }

  const currentWeather = weatherData[0];

  return (
    <Container className="mt-4">
      {/* Current Conditions Overview */}
      <Row className="mb-4">
        <Col>
          <Card className="bg-transparent border-light text-white">
            <Card.Body className="text-center">
              <h3 className="mb-3">🌤️ Current Conditions</h3>
              <Row>
                <Col md={4}>
                  <div className="h2 fw-bold text-info">
                    {currentWeather.temperatureC}°C
                  </div>
                  <div className="text-light">
                    {currentWeather.temperatureF}°F
                  </div>
                </Col>
                <Col md={4}>
                  <div className="h4 text-warning">
                    {currentWeather.summary}
                  </div>
                </Col>
                <Col md={4}>
                  <div className="h5 text-success">
                    💨 {currentWeather.windSpeed} km/h
                  </div>
                  <div className="text-light">
                    {currentWeather.windDirectionCompass}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Wind Details */}
      <Row className="mb-4">
        <Col lg={6} className="mb-3">
          <WindDirection 
            direction={currentWeather.windDirectionCompass} 
            degrees={currentWeather.windDirection} 
          />
        </Col>
        <Col lg={6} className="mb-3">
          <WindStrength 
            speed={currentWeather.windSpeed} 
            beaufortScale={currentWeather.beaufortScale}
          />
        </Col>
      </Row>

      {/* Team Section */}
      <Row>
        <Col>
          <PeopleIcons />
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherDashboard;