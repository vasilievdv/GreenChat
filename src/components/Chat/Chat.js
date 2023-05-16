import React, { useRef } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessageThunk } from './thunks';
import styles from './chat.module.css';

function Chat(props) {
  const requestData = useSelector((state) => state.requestData);
  const messageRef = useRef('');
  const messageInputRef = useRef(null);
  const dispatch = useDispatch();

  const onSubmitMessageForm = (event) => {
    event.preventDefault();
    const message = messageRef.current.value;
    const { instance, token, chatId } = requestData[0];
    const id = `${chatId}@c.us`;
    const requestPayload = { instance, token, message: { chatId: id, message } };
    dispatch(sendMessageThunk(requestPayload));
    messageInputRef.current.reset();
  };

  return (
    <Card className={styles.chat}>
      <Form onSubmit={onSubmitMessageForm} ref={messageInputRef}>
        <Form.Control
          type="message"
          placeholder="Enter a message"
          size="sm"
          className={styles.message}
          ref={messageRef}
        />
      </Form>
    </Card>
  );
}

export default Chat;
