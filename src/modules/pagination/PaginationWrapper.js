import React from 'react';

import PropTypes from 'prop-types';
import PaginationNav from './PaginationNav';
import PaginationNavTop from './PaginationNavTop';

const PaginationWrapper = ({ children, ...remainingProps }) => (
  <>
    <PaginationNavTop {...remainingProps} />
    { children }
    <PaginationNav {...remainingProps} />
  </>
);

PaginationWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PaginationWrapper;
