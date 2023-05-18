import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import styles from './main.module.css';
import UserControlPanel from '../UserControlPanel';
import Chat from '../Chat';

function Main(props) {
  return (
    <Card className={styles.mainCard}>
      <Row className={styles.row}>
        <Col className={styles.row}><UserControlPanel /></Col>
        <Col className={styles.row}><Chat /></Col>
      </Row>
    </Card>
  );
}

export default Main;
