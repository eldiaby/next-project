import React from "react";
import { Card as BootstrapCard } from "react-bootstrap"; // Importing Bootstrap Card component

const Card = ({ id, title, body }) => {
  return (
    <BootstrapCard className="h-100">
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{body}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
