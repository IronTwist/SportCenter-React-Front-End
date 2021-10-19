import React from 'react';
import PropTypes from 'prop-types';

const PaginationNav = ({ currentPaginationNavData, paginationChangeNav }) => {
  const { curPage: currentPage, curPerPage: currentPerPage } = currentPaginationNavData;
  const { totalElements } = currentPaginationNavData;
  const totalPages = Math.ceil(totalElements / currentPerPage);

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        {currentPage > 1 ? (
          <li className="page-item">
            <button
              type="button"
              className="page-link"
              onClick={() => paginationChangeNav(currentPage > 1 ? currentPage - 1 : 1, currentPerPage)}
            >Previous
            </button>
          </li>
        )
          : null}
        {currentPage > 1
          ? (
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => paginationChangeNav(currentPage > 1 ? currentPage - 1 : 1, currentPerPage)}
              >{(currentPage - 1)}
              </button>
            </li>
          )
          : null}
        <li className="page-item active">
          <button type="button" className="page-link">{currentPage}</button>
        </li>
        {currentPage < totalPages
          ? (
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => paginationChangeNav(currentPage < totalPages
                  ? currentPage + 1
                  : currentPage, currentPerPage)}
              >{(currentPage + 1)}
              </button>
            </li>
          )
          : null}
        { currentPage < totalPages
          ? (
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => paginationChangeNav(currentPage < totalPages
                  ? currentPage + 1
                  : currentPage, currentPerPage)}
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
  currentPaginationNavData: PropTypes.shape({
    curPage: PropTypes.number,
    curPerPage: PropTypes.number,
    totalElements: PropTypes.number,
  }),
  paginationChangeNav: PropTypes.func.isRequired,
};

PaginationNav.defaultProps = {
  currentPaginationNavData: PropTypes.shape({
    curPage: PropTypes.number,
    curPerPage: PropTypes.number,
    totalElements: PropTypes.number,
  }),
};

export default PaginationNav;
