import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import WritePage from './pages/WritePage/WritePage';
import Nav from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage/ProfilePage';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <ProtectedRoute exact path="/home" component={HomePage} />
            <ProtectedRoute exact path="/write" component={WritePage} />
            <ProtectedRoute exact path="/profile" component={ProfilePage} />
            {/* <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/write" component={EditorContainer} />
            <ProtectedRoute exact path="/edit-writing" component={EditEntry} /> */}
            {/* <ProtectedRoute
              exact
              path="/prompt-manager"
              component={PromptManager}
            /> */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default connect()(App);