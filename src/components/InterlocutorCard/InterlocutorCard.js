import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './interlocutorCard.module.css';

function InterlocutorCard({ contactId }) {
  return (
    <a href="#">
      <Card className={styles.card}>
        <Card.Title>{contactId}</Card.Title>
      </Card>
    </a>
  );
}

export default InterlocutorCard;
