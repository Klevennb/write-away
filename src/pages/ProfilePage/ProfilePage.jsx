/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import Swal from 'sweetalert2';

import EntryList from '../../components/EntryList/EntryList';


const ProfilePage = (props) => {
  let user = props.user;
  const [wordGoal, setWordGoal] = useState(user.word_goal);

  const editInformation = (e) => {
    const response = editProfile(e.target.value);
    console.log('edit', e.target.value, response);
    // if (e.target.value === 'word_goal') {
      // dispatch({ type: "EDIT_GOAL", payload: entry });

    // }
  }
  const editProfile = (infoToEdit) => {
    Swal.fire({
      title: `Edit your ${infoToEdit}`,
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Save',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        console.log('login', login);
        setWordGoal(login)
        return true
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(() => {
      setWordGoal()
      console.log('In Swal Then');
      return true
    })
  }
  return (
    <div>
      <h1 style={{ margin: '30px' }}>{user.username}'s Information</h1>

      <div style={{ marginLeft: '20px', marginRight: '20px' }}>
        <div className='row'>  
          <Row>
            <Col>          
              <text>My Bio: {user.bio ? JSON.stringify(user.bio): "There doesn't seem to be anything here."}</text>
              <button value="bio">Edit Bio</button>
            </Col>
          </Row>
          <Row>
            <Col>          
            <text>Current Streak: {JSON.stringify(user.current_streak)}</text>  
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <text>Time Goal: {JSON.stringify(user.time_goal)}</text>
            <button value="timew_goal">Edit Time Goal</button>
          </Col>
          <Col>
            <text>Word Goal: {JSON.stringify(user.word_goal)}</text>
            <button value="word_goal" onClick={editInformation}>Edit Word Goal</button>
          </Col>
        </Row>
      </div>

<div style={{ margin: '30px' }}>
        <h1 >My Entries: </h1>

      <EntryList type='user' />
</div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProfilePage);
