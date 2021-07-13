import React, {useEffect} from "react";
import StreakCounter from "../../components/StreakCounter/StreakCounter";
import { Link } from "react-router-dom";
import {Row} from 'react-bootstrap'
import { connect } from "react-redux";


const ProfilePage = (props) => {
    let user = {user};

    useEffect(() => {
      user = props.user;
      console.log(user);
    }, [props.user]);

    // const edit

  return (
    <div>
      <h1>My Info</h1>

      <Row>
        {" "}
        <text target>{user.username}</text>
        <button>Edit</button>
      </Row>
      <Row>
        {" "}
        <text>{JSON.stringify(user.current_streak)}</text>
        <button
          // onClick={() => {
          //   this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
          // }}
        >
          Edit
        </button>
      </Row>
      <Row>
        {" "}
        <text>{JSON.stringify(user.bio)}</text>
        <button>Edit</button>
      </Row>
      <Row>
        <text>{JSON.stringify(user.time_goal)}</text>
        <button>Edit</button>
      </Row>
      <Row>
        <text>{JSON.stringify(user.word_goal)}</text>
        <button>Edit</button>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProfilePage);
