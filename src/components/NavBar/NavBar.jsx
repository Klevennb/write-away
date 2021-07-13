import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogoutButton/LogoutButton';
import './NavBar.css';

const Nav = (props) => {
  const user = { props };
  console.log(user.props.user);
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
        {/* <Link className="nav-link nav-item" to="/prompt-manager">
          Prompt Manager
        </Link> */}
        {/* <Link className="nav-link nav-item" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
