import React from 'react';

import moment from 'moment';
import { Button } from 'react-bootstrap';
import '../../../css/TablePrograms.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UpdateProgram from './UpdateProgram';
import emptyFn from '../../../data/helpFunctions';

const TablePrograms = ({ items, deleteItem, updateProgram }) => (
  <>
    <div className="programBoxColor">
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {
        typeof items !== 'undefined'
          ? items.map((program) => {
            const startsAt = moment(program.startsAt).format('MMMM Do YYYY, h:mm a').toString();
            const endsAt = moment(program.endsAt).format('MMMM Do YYYY, h:mm a').toString();
            const canceledAt = moment(program.canceledAt).format('MMMM Do YYYY, h:mm a').toString();

            return (
              <div className="col" key={program.id}>
                <div className="card h-80 shadow p-3 mb-5 bg-body rounded programBoxColor">
                  <div className="card-body shadow-sm p-3 mb-5 bg-body rounded">
                    <h5 className="card-title">
                      <span className="float-sm-start">#{program.id}</span>
                      <Link to={`/program/${program.id}`}>{program.name}</Link>
                    </h5>
                    <br />
                    <p className="card-text ">
                      <span>
                        <span style={{ fontWeight: 'bold' }}>Start date:</span> {startsAt}
                      </span><br />
                      <span>
                        <span style={{ fontWeight: 'bold' }}>End date:</span> {endsAt}
                      </span><br />
                      <span>
                        <span style={{ fontWeight: 'bold' }}>Status:</span>
                        {
                            program.canceledAt !== null
                              ? ` Inactive ${canceledAt}` : ' Active'
                        }
                      </span>
                    </p>
                  </div>
                  <UpdateProgram updateProgram={updateProgram} {...program}/>
                  <Button
                    onClick={() => deleteItem(program.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a
                        .5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0
                         0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0
                          0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg> Delete
                  </Button>
                </div>
              </div>
            );
          })
          : null
            }
      </div>
    </div>
  </>
);

TablePrograms.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    startsAt: PropTypes.string,
    endsAt: PropTypes.string,
    canceledAt: PropTypes.string,
  })),
  deleteItem: PropTypes.func,
  updateProgram: PropTypes.func,
};

TablePrograms.defaultProps = {
  items: [],
  deleteItem: emptyFn,
  updateProgram: emptyFn,
};

export default TablePrograms;
