import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import styles from './main.module.css';
import UserControlPanel from '../UserControlPanel';
import Chat from '../Chat';

function Main(props) {
  return (
    <Card className={styles.mainCard}>
      <Row className={styles.row}>
        <Col><UserControlPanel /></Col>
        <Col><Chat /></Col>
      </Row>
    </Card>
  );
}

export default Main;
