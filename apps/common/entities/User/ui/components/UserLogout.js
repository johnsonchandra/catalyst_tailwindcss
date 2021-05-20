import { Meteor } from 'meteor/meteor';

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class UserLogout extends React.Component {
  componentDidMount() {
    const { setAfterLoginPath } = this.props;
    Meteor.logout(() => setAfterLoginPath(null));
  }

  render() {
    return (
      <>
        <h1>You are now logged OUT</h1>
        <p>
          <Link to="/">Home</Link>
        </p>
      </>
    );
  }
}

UserLogout.propTypes = {
  setAfterLoginPath: PropTypes.func.isRequired,
};

export default UserLogout;
