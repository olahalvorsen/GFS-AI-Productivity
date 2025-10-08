import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

const WindStrength = ({ speed = 15, unit = 'km/h', beaufortScale = 3 }) => {
  // Convert speed to different units
  const speedMph = Math.round(speed * 0.621371);
  const speedKnots = Math.round(speed * 0.539957);

  // Get wind description based on Beaufort scale
  const getWindDescription = (beaufort) => {
    const descriptions = [
      'Calm', 'Light air', 'Light breeze', 'Gentle breeze', 'Moderate breeze',
      'Fresh breeze', 'Strong breeze', 'Near gale', 'Gale', 'Strong gale',
      'Storm', 'Violent storm', 'Hurricane'
    ];
    return descriptions[Math.min(beaufort, 12)] || 'Unknown';
  };

  // Calculate Beaufort scale from speed if not provided
  const calculateBeaufort = (speedKmh) => {
    if (speedKmh < 1) return 0;
    if (speedKmh < 6) return 1;
    if (speedKmh < 12) return 2;
    if (speedKmh < 20) return 3;
    if (speedKmh < 29) return 4;
    if (speedKmh < 39) return 5;
    if (speedKmh < 50) return 6;
    if (speedKmh < 62) return 7;
    if (speedKmh < 75) return 8;
    if (speedKmh < 89) return 9;
    if (speedKmh < 103) return 10;
    if (speedKmh < 118) return 11;
    return 12;
  };

  const beaufort = beaufortScale || calculateBeaufort(speed);
  const windDescription = getWindDescription(beaufort);

  // Progress bar color based on wind strength
  const getProgressVariant = (beaufort) => {
    if (beaufort <= 3) return 'success';
    if (beaufort <= 6) return 'warning';
    return 'danger';
  };

  const progressVariant = getProgressVariant(beaufort);
  const progressPercentage = Math.min((beaufort / 12) * 100, 100);

  return (
    <Card className="h-100 bg-transparent border-light text-white text-center">
      <Card.Body>
        <Card.Title className="h6 text-light mb-3">
          💨 Wind Speed
        </Card.Title>
        <div className="h4 fw-bold mb-2">
          {speed} {unit}
        </div>
        <div className="text-light mb-3">
          <small>
            {speedMph} mph | {speedKnots} knots
          </small>
        </div>
        <ProgressBar 
          variant={progressVariant} 
          now={progressPercentage} 
          className="mb-3"
          style={{ height: '8px' }}
        />
        <div className="text-light">
          <strong>{windDescription}</strong>
        </div>
        <div className="text-light">
          <small>Beaufort {beaufort}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WindStrength;