/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap'
import { connect } from "react-redux";

import EntryList from '../../components/EntryList/EntryList';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import ProfileBioEdit from '../../components/ProfileBio/ProfileBioEdit';


const ProfilePage = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      {editMode ? 
       <ProfileBio /> : <ProfileBioEdit />
      }
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
