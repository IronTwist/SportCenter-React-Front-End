import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import LockIcon from '@mui/icons-material/Lock';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Navbar = () => {
  const { user } = useSelector((state) => state.login.data);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ fontFamily: 'Festive' }}>Health Center</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Button size="small">
                <Link className="nav-link" to="/"><HomeWorkIcon /></Link>
              </Button>
            </li>

            {user
              ? (
                <>
                  <li className="nav-item">
                    <Button size="small">
                      <SportsTennisIcon />
                      <Link className="nav-link" to="/programs">Programs</Link>
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button size="small">
                      <PeopleSharpIcon />
                      <Link className="nav-link" to="/users">Users</Link>
                    </Button>
                  </li>
                </>
              )
              : null}
            <li className="nav-item">
              <Button size="small">
                <InfoIcon />
                <Link className="nav-link" to="/about">About</Link>
              </Button>
            </li>
            <li className="nav-item"> {user
              ? (
                <>
                  <Button size="small" onClick={handleClickOpen}>
                    <LockIcon />
                    <Link className="nav-link" to="#">Log out</Link>
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      Log Out
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Are you sure you want to log out?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Disagree</Button>
                      <Button onClick={handleClose} autoFocus>
                        <Link className="nav-link" to="/logout">Logout</Link>
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              )
              : (
                <Button size="small">
                  <LoginIcon />
                  <Link className="nav-link" to="/login">Login</Link>
                </Button>
              )}
            </li>
          </ul>
          {user ? `Welcome, ${user.name}` : 'Please login'}
          <span style={{ width: '10px' }}/>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info text-black w-50" type="submit"><SearchIcon />Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
