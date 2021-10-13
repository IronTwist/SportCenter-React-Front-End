import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
const Navbar = () => {
    const { user } = useSelector((state) => state.login.data);

    return <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Health Center</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    {user ?
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/programs">Programs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                        </>
                     : null
                    }
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item"> {!!user ?
                        <Link className="nav-link" to="/login">Logout</Link>
                        :
                        <Link className="nav-link" to="/login">Login</Link>
                        }
                    </li>
                </ul>

                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info text-black" type="submit">Search</button>
                </form>
            </div>
            &nbsp;{user? `Welcome ${user.name}`: 'Please login'}
        </div>
    </nav>
};

export default Navbar;
