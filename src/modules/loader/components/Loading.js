import React from 'react';
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import '../../../css/Overlay.css';

const Loading = ({ children, show }) => (
  <>
    {show && (
      <>
        <div id="overlay"/>
        <CircularProgress />
      </>
    )}
    {children}
  </>
);

Loading.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool,
};

Loading.defaultProps = {
  show: false,
};

export default Loading;
