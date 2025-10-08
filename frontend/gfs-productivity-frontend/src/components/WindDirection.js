import React from 'react';
import { Card } from 'react-bootstrap';

const WindDirection = ({ direction = 'NE', degrees = 45 }) => {
  // Convert degrees to compass direction if only degrees provided
  const getCompassDirection = (deg) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(deg / 22.5) % 16;
    return directions[index];
  };

  const compassDirection = direction || getCompassDirection(degrees);

  // Wind direction arrow style
  const arrowStyle = {
    transform: `rotate(${degrees}deg)`,
    fontSize: '2rem',
    color: '#007bff',
    transition: 'transform 0.3s ease'
  };

  return (
    <Card className="h-100 bg-transparent border-light text-white text-center">
      <Card.Body>
        <Card.Title className="h6 text-light mb-3">
          🧭 Wind Direction
        </Card.Title>
        <div className="mb-3">
          <div style={arrowStyle}>
            ↑
          </div>
        </div>
        <div className="h4 fw-bold mb-2">
          {compassDirection}
        </div>
        <div className="text-light">
          {degrees}°
        </div>
      </Card.Body>
    </Card>
  );
};

export default WindDirection;