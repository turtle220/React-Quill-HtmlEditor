import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';

const HTMLEditModal = ({isOpen, close, contentHTML, getValue}) => {
  const [content, setContent] = useState('');

  const saveChange = () => {
    getValue(content);
    close();
  }
  useEffect(()=>{

    setContent(contentHTML);
  },[contentHTML])
  return (
    <Modal isOpen={isOpen} toggle={close}>
      <ModalHeader toggle={close}>
        <p>HTML EDITOR</p>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Input type="textarea" name="text" defaultValue={contentHTML} onChange={(event) => setContent(event.target.value)} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
      <Button
        color="success"
        onClick={saveChange}
        // disabled={!content}
      >
        OK
      </Button>
      <Button
        color="danger"
        onClick={close}
      >
        Cancel
      </Button>
      </ModalFooter>
    </Modal>
  )
};

export default HTMLEditModal;