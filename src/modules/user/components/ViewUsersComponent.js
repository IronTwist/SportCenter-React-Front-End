import React from "react";
import "../../../css/TableUsers.css";
import {Dropdown} from "react-bootstrap";
import {BiEdit,FcContacts, FiTrash} from "react-icons/all";


const ViewUsersComponent = ({total, items }) => {

    return (
      <>
          <div className="container-fluid bg-primary">Total users: { total }</div>
          <div className="container bg-light">
              <div className="row py-5">
                  <div className="col-12">
                      <table id="userTable" className="table table-hover responsive nowrap" style={{width: "100%"}} >
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
                              typeof items !== 'undefined'?
                              items.map((user) => {
                                  return (
                                    <>
                                        <tr>
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
                                                   user.roles[1] === 'ROLE_ADMIN'?
                                                       'Admin' : user.roles[1] === 'ROLE_TRAINER'?
                                                       'Trainer': 'User'
                                                }
                                            </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" >
                                                        <FcContacts />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1"><BiEdit /> Edit profile</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2"> <FiTrash />  Remove</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    </>
                                  );
                              }) : null
                          }

                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </>
    );
}

export default ViewUsersComponent;