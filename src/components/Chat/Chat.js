import React from 'react';
import { Card, Form } from 'react-bootstrap';
import styles from './chat.module.css';

function Chat(props) {
  return (
    <Card className={styles.chat}>
      <Form.Control type="message" placeholder="Enter a message" size="sm" className={styles.message} />
    </Card>
  );
}

export default Chat;
