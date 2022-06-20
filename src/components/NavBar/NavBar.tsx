import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogoutButton/LogoutButton';
import './NavBar.css';

const Nav: FC = (props: any) => {
  const user = { props };
  return (
    <div className="navbar navbar-expand-md navcolor">
      <Link to="/home">
        <h2 className="nav-title">Write Away</h2>
      </Link>
      <div className="navbar-nav ml-auto">
        <Link className="nav-link nav-item" to="/home">
          {user.props.user.id ? "Home" : "Login / Register"}
        </Link>
        {user.props.user.id && (
          <>
            <Link className="nav-link nav-item" to="/profile">
              Profile
            </Link>
          </>
        )}
        {user.props.user.id && (
          <>
            <LogOutButton className=" nav-item nav-link" />
          </>
        )}
        <Link className="nav-link nav-item" to="/about">
          About
        </Link>
        {/* <Link className="nav-link nav-item" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state: { user: any; }) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);