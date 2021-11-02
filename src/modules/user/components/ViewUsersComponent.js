import React from 'react';

import '../../../css/TableUsers.scss';
import { Dropdown } from 'react-bootstrap';
import { BiEdit, FcContacts, FiTrash } from 'react-icons/all';
import PropTypes from 'prop-types';


const ViewUsersComponent = ({ total, items, deleteUserByAdmin }) => (
  <>
    <div className="container-fluid bg-primary">Total users: { total }</div>
    <div className="container bg-light">
      <div className="row py-5">
        <div className="col-12">
          <table id="userTable" className="table table-hover responsive nowrap" style={{ width: '100%' }} >
            <thead>
              <tr>
                <th>User Name</th>
                <th>CNP</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {
              typeof items !== 'undefined'
                ? items.map((user) => (
                  <tr key={user.id}>
                    <td>
                      { user.name }
                    </td>
                    <td>
                      { user.cnp }
                    </td>
                    <td>
                      { user.email }
                    </td>
                    <td>
                      {
                        user.roles[1] === 'ROLE_ADMIN' ? 'Admin' : null
                      }
                      {
                        user.roles[1] === 'ROLE_TRAINER' ? 'Trainer' : null
                      }
                      {
                        user.roles[1] !== 'ROLE_ADMIN' && user.roles[1] !== 'ROLE_TRAINER' ? 'User' : null
                      }
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" >
                          <FcContacts />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href={`/user/${user.id}`}><BiEdit /> Edit profile</Dropdown.Item>
                          <Dropdown.Item onClick={() => deleteUserByAdmin(user.id)}> <FiTrash />  Remove</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                )) : null
          }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
);

ViewUsersComponent.propTypes = {
  total: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    cnp: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
  })),
  deleteUserByAdmin: PropTypes.func.isRequired,
};

ViewUsersComponent.defaultProps = {
  total: 0,
  items: [],
};

export default ViewUsersComponent;
