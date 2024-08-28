import React from "react";
import { Card as BootstrapCard, Button } from "react-bootstrap";

const Card = ({ id, title, body, image }) => {
  const handleViewDetails = () => {
    // Navigate to the details page
    window.location.href = `/product/${id}`;
  };

  return (
    <BootstrapCard className="h-100">
      <BootstrapCard.Img variant="top" src={image} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{body}</BootstrapCard.Text>
        <Button variant="primary" onClick={handleViewDetails}>
          View Details
        </Button>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
