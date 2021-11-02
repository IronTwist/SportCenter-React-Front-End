import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProgramAction } from '../store/actions';

const Program = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const programIdInStore = useSelector((store) => store.domain.programs.data.items[id]);
  const program = useSelector(
    (store) => store.domain.programs.data.items[id],
  );

  useEffect(() => {
    if (typeof programIdInStore === 'undefined' || typeof program === 'undefined') {
      dispatch(getProgramAction(id));
    }
  });

  return (
    <>
      {typeof program !== 'undefined' ? (
        <div><h2>{program.name}</h2><br/>
          <div className="card ">
            <div className="card-header float-end">
              {id}
            </div>
            <div className="card-body">
              <div>Program starts on: {
                            new Intl.DateTimeFormat('en-GB', {
                              year: 'numeric',
                              month: 'long',
                              day: '2-digit',
                              hour: 'numeric',
                              minute: 'numeric',
                            }).format(new Date(program.startsAt))
                        }
              </div>

              <div>Program ends on: {
                            new Intl.DateTimeFormat('en-GB', {
                              year: 'numeric',
                              month: 'long',
                              day: '2-digit',
                              hour: 'numeric',
                              minute: 'numeric',
                            }).format(new Date(program.endsAt))
                        }
              </div>
              <button type="button" className="btn btn-primary">Enroll</button>
            </div>
            <div className="card-footer text-muted">
              ex: starts in # days
            </div>
          </div><br/><br/><br/>
        </div>
      )
        : null}
    </>
  );
};

export default Program;
