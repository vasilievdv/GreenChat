import React, { useRef, useState } from 'react';
import {
  Button,
  Form, InputGroup,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import InterlocutorCard from '../InterlocutorCard';
import styles from './UserControlPanel.module.css';
import { requestDataAC } from './actions';
import { clearPhone } from '../../utilities';

function UserControlPanel(props) {
  const [contactList, setContactList] = useState([]);
  const instanceRef = useRef('');
  const tokenRef = useRef('');
  const idRef = useRef('');
  const contactRef = useRef(null);

  const dispatch = useDispatch();

  const onSubmitContactForm = (event) => {
    event.preventDefault();
    const currentPhoneNumber = idRef.current.value;
    setContactList([...contactList, currentPhoneNumber]);
    const id = clearPhone(currentPhoneNumber);
    const token = tokenRef.current.value;
    const instance = instanceRef.current.value;
    dispatch(requestDataAC({ instance, token, chatId: id }));
    contactRef.current.reset();
  };

  return (
    <div className={styles.identForm}>
      <InputGroup className="mb-3" size="sm">
        <Form.Control placeholder="IdInstance" aria-label="idInstance" ref={instanceRef} className={styles.formControl} />
        <Form.Control placeholder="ApiTokenInstance" aria-label="apiTokenInstance" ref={tokenRef} />
      </InputGroup>
      <Form className={styles.contact} onSubmit={onSubmitContactForm} ref={contactRef}>
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
      {contactList.map((contact, id) => <InterlocutorCard contactId={contact} key={id} />)}
    </div>
  );
}

export default UserControlPanel;
