import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';

const Logout = () => {
  useEffect(() => {
    setTimeout(() => window.location.reload(true), 1000);
  });

  return (
    <>
      <h3>Logout successful</h3>
      <div className="container-fluid">
        <Box sx={{ display: 'flex' }}>
          <CircularProgress /> Redirect to Login Page
        </Box>
      </div>
    </>
  );
};

export default Logout;
