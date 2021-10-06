import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Modal, ModalBody, ModalFooter, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";
import {useDispatch} from "react-redux";
import {addProgramAsync} from "../../../store/asyncActions";

const AddProgram = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState('');
    const [startsAt, setStartsAt] = useState('No date');
    const [endsAt, setEndsAt] = useState('No date');

    const dispatch = useDispatch();

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProgramAsync(
            name,
            new Date(startsAt).toISOString().slice(0,19),
            new Date(endsAt).toISOString().slice(0,19)
        ));
        setIsOpen(false);
    }

    return (
      <>
        <button type="button" onClick={openModal} className="btn btn-success">Add Program</button>
          <Modal show={isOpen} onHide={closeModal}>
              <ModalHeader closeButton>
                  <ModalTitle>Add new Program</ModalTitle>
              </ModalHeader>
              <ModalBody>
                  <label htmlFor="name">Name: </label>
                  <input type="text" id="name" onChange={(e) => setName(e.target.value)}  placeholder="Tennis, Dance,..." /><br/>
                  <br />
                  Start program:
                  <DateTimePickerComponent
                      placeholder="Choose date and time"
                      onChange={(e) => setStartsAt(e.target.value)}
                      format="yyy-MM-dd HH:mm"
                  >
                  </DateTimePickerComponent>

                  End program:
                  <DateTimePickerComponent
                      placeholder="Choose date and time"
                      onChange={(e) => setEndsAt(e.target.value)}
                      format="yyy-MM-dd HH:mm"
                  >
                  </DateTimePickerComponent>

              </ModalBody>
              <ModalFooter>
                  <Button variant="primary" onClick={handleSubmit}>
                      Add program
                  </Button>
              </ModalFooter>
          </Modal>
      </>
    );
}

export default AddProgram;