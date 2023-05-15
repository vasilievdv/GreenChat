import React, { useRef } from 'react';
import {
  Button,
  Form, InputGroup,
} from 'react-bootstrap';
import InterlocutorCard from '../InterlocutorCard';
import styles from './UserControlPanel.module.css';

function UserControlPanel(props) {
  const instanceRef = useRef('');
  const tokenRef = useRef('');
  const idRef = useRef('');

  console.log(tokenRef.current.value, instanceRef.current.value);

  return (
    <div className={styles.identForm}>
      <InputGroup className="mb-3" size="sm">
        <Form.Control placeholder="IdInstance" aria-label="idInstance" ref={instanceRef} />
        <Form.Control placeholder="ApiTokenInstance" aria-label="apiTokenInstance" ref={tokenRef} />
      </InputGroup>
      <Form className={styles.chatInput}>
        <InputGroup className="mb-3" size="sm">
          <Button variant="success" type="submit">
            Start chatting with
          </Button>
          <Form.Control
            aria-label="id"
            placeholder="+7(999)111-11-11"
            ref={idRef}
          />
        </InputGroup>
      </Form>
      <InterlocutorCard />
    </div>
  );
}

export default UserControlPanel;
