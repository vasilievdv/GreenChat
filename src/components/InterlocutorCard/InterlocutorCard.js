import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './interlocutorCard.module.css';

function InterlocutorCard(props) {
  return (
    <Card className={styles.card}>
      <Card.Title>+7(999)111-11-11</Card.Title>
    </Card>
  );
}

export default InterlocutorCard;
