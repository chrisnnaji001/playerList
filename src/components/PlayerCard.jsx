import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PlayerCard = ({ name, team, jerseyNumber, age, imageUrl, nationality }) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-3">
      <Card.Img variant="top" src={imageUrl} alt={`${name}'s image`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
        <Card.Text>
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age} <br />
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
