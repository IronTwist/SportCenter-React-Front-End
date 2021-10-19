import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import PropTypes from 'prop-types';

const AddProgram = ({ addProgram }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [startsAt, setStartsAt] = useState('No date');
  const [endsAt, setEndsAt] = useState('No date');

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    addProgram(name, startsAt, endsAt);
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" onClick={openModal} className="btn btn-success">Add Program</button>
      <Modal show={isOpen} onHide={closeModal}>
        <ModalHeader closeButton>
          <ModalTitle>Add new Program</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="Tennis, Dance,..." /><br/>
          <br />
          Start program:
          <DateTimePickerComponent
            placeholder="Choose date and time"
            onChange={(e) => setStartsAt(e.target.value)}
            format="yyy-MM-dd HH:mm"
          />

          End program:
          <DateTimePickerComponent
            placeholder="Choose date and time"
            onChange={(e) => setEndsAt(e.target.value)}
            format="yyy-MM-dd HH:mm"
          />

        </ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={handleSubmit}>
            Add program
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

AddProgram.propTypes = {
  addProgram: PropTypes.func.isRequired,
};

export default AddProgram;
