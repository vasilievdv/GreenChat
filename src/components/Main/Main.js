import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import styles from './main.module.css';
import UserControlPanel from '../UserControlPanel';

function Main(props) {
  return (
    <Card className={styles.chatCard}>
      <Row>
        <Col><UserControlPanel /></Col>
        <Col>2</Col>
      </Row>
    </Card>
  );
}

export default Main;
