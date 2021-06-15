/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind/src/autoBind';

import { Switch, Route } from 'react-router-dom';

import withTrackerSsr from '../../common/helpers/withTrackerSsr';
import initApp from '../../common/helpers/initApp';

// common components
import NotAuthorized from '../../common/ui/components/NotAuthorized';
import NotFound from '../../common/ui/components/NotFound';

import Authenticated from '../../common/ui/components/RouteAuthenticated';
import Authorized from '../../common/ui/components/RouteAuthorized';
import Public from '../../common/ui/components/RoutePublic';

import UserLoginPage from '../../common/ui/pages/User/Access/UserLoginPage';
import UserLogoutPage from '../../common/ui/pages/User/Access/UserLogoutPage';
import UserSignupPage from '../../common/ui/pages/User/Access/UserSignupPage';

// app pages
import Home from './pages/Home';

// app authorized pages
import Dashboard from './pages/Dashboard';

// Member Pages
import DocumentListDraftPage from '../../common/ui/pages/Document/List/DocumentListDraftPage';
import DocumentListCurrentPage from '../../common/ui/pages/Document/List/DocumentListCurrentPage';
import DocumentListHistoryPage from '../../common/ui/pages/Document/List/DocumentListHistoryPage';

// User Pages
import UserProfilePage from '../../common/ui/pages/User/Profile';
import UserRolesPage from '../../common/ui/pages/User/Profile/Roles';
import DocumentDetailPage from '../../common/ui/pages/Document/Detail';

// All Pages
import AboutPage from './pages/About';

class ExampleApp extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = { ready: false, afterLoginPath: null };
  }

  componentDidMount() {
    this.setPageReady();
  }

  setPageReady = () => {
    this.setState({ ready: true });
  };

  setAfterLoginPath = (afterLoginPath) => {
    this.setState({ afterLoginPath });
  };

  render() {
    const { props, state, setAfterLoginPath } = this;

    return (
      <Switch>
        <Route exact name="home" path="/" component={Home} />
        <Route exact name="about" path="/about" component={AboutPage} />

        <Authorized
          exact
          allowedRoles={['user', 'member', 'spv']}
          path="/dashboard"
          component={Dashboard}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* MEMBER */}
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Document/:_id"
          pathAfterFailure="/dashboard"
          component={DocumentDetailPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Document/List/Draft"
          pathAfterFailure="/dashboard"
          component={DocumentListDraftPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Document/List/Current"
          pathAfterFailure="/dashboard"
          component={DocumentListCurrentPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/Document/List/History"
          pathAfterFailure="/dashboard"
          component={DocumentListHistoryPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* USER */}
        <Authenticated
          exact
          path="/profile"
          component={UserProfilePage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authenticated
          exact
          path="/roles"
          component={UserRolesPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* ALL route */}
        <Public path="/signup" component={UserSignupPage} {...props} {...state} />
        <Public path="/login" component={UserLoginPage} {...props} {...state} />
        <Route
          path="/logout"
          render={(routeProps) => (
            <UserLogoutPage {...routeProps} setAfterLoginPath={setAfterLoginPath} />
          )}
          {...props}
          {...state}
        />

        <Route name="NotAuthorized" path="/NotAuthorized" component={NotAuthorized} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

ExampleApp.defaultProps = {
  loading: true,
  user: {},
  userId: '',
  emailAddress: '',
  emailVerified: false,
  authenticated: false,
  settings: {},
  roles: [],
  host: '',
};

ExampleApp.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
  userId: PropTypes.string,
  emailAddress: PropTypes.string,
  emailVerified: PropTypes.bool,
  authenticated: PropTypes.bool,
  settings: PropTypes.object,
  roles: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.string,
};

export default withTrackerSsr(() => initApp())(ExampleApp);
