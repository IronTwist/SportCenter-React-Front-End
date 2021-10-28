import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Loading from '../../loader/components/Loading';

const UpdateProgram = ({ id, name, startsAt, endsAt, updateProgram }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nameUpdate, setNameUpdate] = useState(name);
  const [startsAtUpdate, setStartsAtUpdate] = useState(startsAt);
  const [endsAtUpdate, setEndsAtUpdate] = useState(endsAt);
  const isLoading = useSelector((store) => store.domain.programs.loading);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    updateProgram(id, nameUpdate, startsAtUpdate, endsAtUpdate);
    setIsOpen(false);
  };

  return (
    <>
      <Button type="button" onClick={openModal} className="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75
             2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0
             .196-.12l6.813-6.814z"
          />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5
            0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg> Edit
      </Button>
      <Loading show={isLoading}>
        <Modal show={isOpen} onHide={closeModal}>
          <ModalHeader closeButton>
            <ModalTitle>Update Program</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              defaultValue={name}
              onChange={(e) => setNameUpdate(e.target.value)}
              placeholder="Tennis, Dance,..."
            /><br/>
            <br />
            Start program:
            <DateTimePickerComponent
              placeholder="Choose date and time"
              value={startsAt}
              onChange={(e) => setStartsAtUpdate(e.target.value)}
              format="yyy-MM-dd HH:mm"
            />

            End program:
            <DateTimePickerComponent
              placeholder="Choose date and time"
              value={endsAt}
              onChange={(e) => setEndsAtUpdate(e.target.value)}
              format="yyy-MM-dd HH:mm"
            />

          </ModalBody>
          <ModalFooter>
            <Button variant="primary" onClick={handleSubmit}>
              Update program
            </Button>
          </ModalFooter>
        </Modal>
      </Loading>
    </>
  );
};

UpdateProgram.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  startsAt: PropTypes.string.isRequired,
  endsAt: PropTypes.string.isRequired,
  updateProgram: PropTypes.func.isRequired,
};

export default UpdateProgram;
