/* eslint-disable no-unused-vars */
import React from 'react';
import StreakCounter from '../../components/StreakCounter/StreakCounter'
import { Link } from 'react-router-dom';

const HomePage = (props) => {
    const history = { props };
  return (
  <div>
    {/* <StreakCounter   history = { history } /> */}
        <button><Link to="/write">Write!</Link></button>

    {/* <Dashboard /> */}
  </div>
  )
  };

export default HomePage;