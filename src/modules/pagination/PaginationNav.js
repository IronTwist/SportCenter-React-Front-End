import React from 'react';
import PropTypes from 'prop-types';

const PaginationNav = ({ curPage, curPerPage, totalElements, paginationChangeNav }) => {
  const totalPages = Math.ceil(totalElements / curPerPage);

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        {curPage > 1 ? (
          <li className="page-item">
            <button
              type="button"
              className="page-link"
              onClick={() => paginationChangeNav(curPage > 1 ? curPage - 1 : 1, curPerPage)}
            >Previous
            </button>
          </li>
        )
          : null}
        {curPage > 1
          ? (
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => paginationChangeNav(curPage > 1 ? curPage - 1 : 1, curPerPage)}
              >{(curPage - 1)}
              </button>
            </li>
          )
          : null}
        <li className="page-item active">
          <button type="button" className="page-link">{curPage}</button>
        </li>
        {curPage < totalPages
          ? (
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => paginationChangeNav(curPage < totalPages
                  ? curPage + 1
                  : curPage, curPerPage)}
              >{(curPage + 1)}
              </button>
            </li>
          )
          : null}
        { curPage < totalPages
          ? (
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => paginationChangeNav(curPage < totalPages
                  ? curPage + 1
                  : curPage, curPerPage)}
              >Next
              </button>
            </li>
          )
          : null}
      </ul>
    </nav>
  );
};

PaginationNav.propTypes = {
  curPage: PropTypes.number.isRequired,
  curPerPage: PropTypes.number.isRequired,
  totalElements: PropTypes.number,
  paginationChangeNav: PropTypes.func.isRequired,
};

PaginationNav.defaultProps = {
  totalElements: 0,
};

export default PaginationNav;
