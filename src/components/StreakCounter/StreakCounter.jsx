// import React, { useEffect, useState } from 'react';
// import { Container, Col, Row } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';


// const moment = require('moment');

// const StreakCounter = (props) => {
//   const [streak, setStreak] = useState(0);

//   const getEntries = () => {
//     props.dispatch({ type: 'GET_ENTRIES' });
//   };

//   useEffect(() => {
//     getEntries();
//   }, []);

//   const { user, entry } = props;
//   const entryLength = entry.length;

//   const getStreak = () => {
//     const dates = [];
//     entry.forEach((sub) => {
//       if (sub.submission_time !== null) { // this will get only dates
//         dates.push(moment(sub.submission_time));
//       }
//     });
//     let todayPost = 0; // will only add one no matter the value
//     let killswitch = 0;
//     const endDay = moment().startOf('day');
//     const startDay = moment().startOf('day').subtract(1, 'day');
//     while (killswitch < dates.length) {
//       // eslint-disable-next-line no-plusplus
//       for (let i = 0; i < dates.length; i++) {
//         if (dates[i].isBetween(startDay, endDay)) {
//           setStreak(streak + 1);
//           endDay.subtract(1, 'day');
//           startDay.subtract(1, 'day');
//           killswitch = 0;
//         } else if (dates[i].isBetween(moment().startOf('day'), moment())) {
//           todayPost += 1;
//           killswitch += 1;
//         } else {
//           killswitch += 1;
//         }// end if/else
//       }// end for loop
//     } // end while
//     if (todayPost !== 0) {
//       setStreak(streak + 1);
//     }
//   };
  // return (
    // <Container fluid="md">
    //   {entryLength && getStreak()}
    //   <Row>
    //     <Col>
    //       <h1 className="d-flex justify-content-center mt-5 mb-1">
    //         Welcome,
    //         {' '}
    //         {user.username}
    //         !
    //         {' '}
    //         {streak
    //           ? `You have written ${streak} days in a row!`
    //           : 'Time to start a new writing streak!'}
    //       </h1>
    //     </Col>
    //   </Row>
    // </Container>
{/* <text>Streak Counter</text>  ); */}
// };

// const mapStateToProps = (state) => ({
//   user: state.user,
//   entry: state.entry,
// });

// export default connect(mapStateToProps)(StreakCounter);