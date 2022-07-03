import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogoutButton/LogoutButton';
import './NavBar.css';

const Nav: FC = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <div className="navbar navbar-expand-md navcolor justify-content-between">
      <Link to="/home">
        <h2 className="nav-title">Write Away</h2>
      </Link>
      <div className="navbar-nav ml-auto">
        <Link className="nav-link nav-item" to="/home">
          {user.id ? "Home" : "Login / Register"}
        </Link>
        {user.id && (
        <Link className="nav-link nav-item" to="/write">
           Write
        </Link>
        )}
        {user.id && (
          <>
            <Link className="nav-link nav-item" to="/profile">
              Profile
            </Link>
          </>
        )}
        {user.id && (
          <>
            <LogOutButton className=" nav-item nav-link" />
          </>
        )}
        <Link className="nav-link nav-item" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Nav;
