import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Row} from 'react-bootstrap'
import { connect } from "react-redux";


const ProfilePage = (props) => {
  let user = props.user;
  const [wordGoal, setWordGoal] = useState(user.word_goal);

  const editGoal = () => {
    // props.dispatch({
    //   type: "ADD_ENTRY",
    //   payload: {
    //     newGoal: wordGoal,
    //   },
    // });
  }
  return (
    <div>
      <h1>My Information</h1>

      <Row>
        {" "}
        <text target>{user.username}</text>
      </Row>
      <Row>
        {" "}
        <text>{JSON.stringify(user.current_streak)}</text>
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
        <button onClick={editGoal}>Edit</button>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProfilePage);
