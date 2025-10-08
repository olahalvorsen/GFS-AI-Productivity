import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const PeopleIcons = () => {
  // Mock data representing the people from the screenshot
  const people = [
    { name: 'Ola Halvorsen', initials: 'OH', role: 'Developer' },
    { name: 'Quynh Nguyen', initials: 'QN', role: 'Designer' },
    { name: 'Vibhor Gupta', initials: 'VG', role: 'Manager' },
    { name: 'Ali Mansouri', initials: 'AM', role: 'Engineer' },
    { name: 'Parth Patel', initials: 'PP', role: 'Developer' },
    { name: 'Wahida Nusrat', initials: 'WN', role: 'Analyst' },
    { name: 'Jason Li', initials: 'JL', role: 'Designer' },
    { name: 'Gi Sup Yun', initials: 'GY', role: 'Developer' }
  ];

  // Generate avatar colors based on name hash
  const getAvatarColor = (name) => {
    const colors = [
      '#007bff', '#28a745', '#dc3545', '#ffc107', 
      '#17a2b8', '#6f42c1', '#e83e8c', '#fd7e14'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <Card className="bg-transparent border-light text-white">
      <Card.Body>
        <Card.Title className="h6 text-light mb-3 text-center">
          👥 Team Weather Watchers
        </Card.Title>
        <Row className="g-2">
          {people.map((person, index) => (
            <Col key={index} xs={3} className="text-center">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-1"
                style={{
                  width: '45px',
                  height: '45px',
                  backgroundColor: getAvatarColor(person.name),
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                {person.initials}
              </div>
              <div style={{ fontSize: '10px' }} className="text-light">
                {person.name.split(' ')[0]}
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-3">
          <small className="text-light">
            🌤️ Monitoring weather conditions together
          </small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PeopleIcons;