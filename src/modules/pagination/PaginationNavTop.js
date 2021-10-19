import React from 'react';
import PropTypes from 'prop-types';

const PaginationNavTop = ({ curPage, curPerPage, totalElements, paginationChangeNav }) => {
  const totalPages = Math.ceil(totalElements / curPerPage);

  const changePage = (newPage) => {
    paginationChangeNav(Number(newPage), curPerPage);
  };

  const changePerPage = (newPerPage) => {
    paginationChangeNav(curPage, Number(newPerPage));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-12 col-sm-6 col-md-8">
            <div className="input-group mb-3 float-md-right" style={{ width: '250px', marginLeft: '30px' }}>
              <input
                className="form-control"
                type="number"
                id="pageId"
                min="1"
                defaultValue={curPerPage}
                onChange={(e) => changePerPage(e.target.value)}
              />
              <div className="input-group-prepend">
                <span className="input-group-text">elem/page(total: {totalElements})</span>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4">
            <div className="input-group mb-3 float-md-right" style={{ width: '270px', marginLeft: '30px' }}>
              <input
                className="form-control"
                type="number"
                id="pageId"
                min="1"
                max={totalPages.toString()}
                value={curPage.toString()}
                onChange={(e) => changePage(e.target.value)}
              />
              <div className="input-group-prepend">
                <span className="input-group-text">current page/total: {totalPages}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PaginationNavTop.propTypes = {
  curPage: PropTypes.number.isRequired,
  curPerPage: PropTypes.number.isRequired,
  totalElements: PropTypes.number,
  paginationChangeNav: PropTypes.func.isRequired,
};

PaginationNavTop.defaultProps = {
  totalElements: 0,
};

export default PaginationNavTop;
