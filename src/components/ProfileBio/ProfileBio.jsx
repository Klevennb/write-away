/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Row, Col, Image } from 'react-bootstrap'
import { connect } from "react-redux";

const ProfileBio = (props) => {
    let user = props.user;
    const [wordGoal, setWordGoal] = useState(user.word_goal);

    useEffect(() => {
        console.log(user);

    }, [user])

    return (
        <div>
            <h1 style={{ margin: '30px' }}>{user.username}</h1>
            <Row style={{ marginLeft: '20px', marginRight: '20px' }}>
                {user.profile_pic &&

                    <Col xs={6} md={4}>
                        <Image src={user.profile_pic} roundedCircle />
                    </Col>
                }
                <Col>
                    <text>{user.bio ? JSON.stringify(user.bio) : "There doesn't seem to be anything here."}</text>
                </Col>
            </Row>

            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div className='row'>
                    <Row>
                        <Col>
                            <text>Current Streak: {JSON.stringify(user.current_streak)}</text>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <text>Time Goal: {JSON.stringify(user.time_goal)}</text>
                    </Col>
                    <Col>
                        <text>Word Goal: {JSON.stringify(user.word_goal)}</text>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps)(ProfileBio);
