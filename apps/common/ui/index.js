/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind/src/autoBind';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import withTrackerSsr from '../helpers/withTrackerSsr';
import initApp from '../helpers/initApp';

// common components
import NotAuthorized from './components/NotAuthorized';
import NotFound from './components/NotFound';
import Loading from './components/Loading';

import Authenticated from './components/RouteAuthenticated';
import Authorized from './components/RouteAuthorized';
import Public from './components/RoutePublic';

import UserLoginPage from './pages/User/Access/UserLoginPage';
import UserLogoutPage from './pages/User/Access/UserLogoutPage';
import UserSignupPage from './pages/User/Access/UserSignupPage';
import UserVerifyEmailPage from './pages/User/Access/UserVerifyEmailPage';
import UserForgetPasswordPage from './pages/User/Access/UserForgetPasswordPage';
import UserResetPasswordPage from './pages/User/Access/UserResetPasswordPage';

// app pages
import Home from './pages/Home';

// app authorized pages
import Dashboard from './pages/Home/Dashboard';

// Root Pages
import UserListUnverifiedAllPage from './pages/Root/User/UserListUnverifiedAllPage';
import UserListCurrentAllPage from './pages/Root/User/UserListCurrentAllPage';
import UserListOnlineAllPage from './pages/Root/User/UserListOnlineAllPage';

import OrgListDraftAllPage from './pages/Root/Org/OrgListDraftAllPage';
import OrgListCurrentAllPage from './pages/Root/Org/OrgListCurrentAllPage';
import OrgListCurrentFeatureAllPage from './pages/Root/Org/OrgListCurrentFeatureAllPage';
import OrgListHistoryAllPage from './pages/Root/Org/OrgListHistoryAllPage';

import TenantListDraftAllPage from './pages/Root/Tenant/TenantListDraftAllPage';
import TenantListCurrentAllPage from './pages/Root/Tenant/TenantListCurrentAllPage';
import TenantListHistoryAllPage from './pages/Root/Tenant/TenantListHistoryAllPage';

// Admin Pages
import UserListUnverifiedHostPage from './pages/Admin/User/UserListUnverifiedHostPage';
import UserListWaitingApprovalHostPage from './pages/Admin/User/UserListWaitingApprovalHostPage';
import UserListApprovedHostPage from './pages/Admin/User/UserListApprovedHostPage';
import UserListCurrentHostPage from './pages/Admin/User/UserListCurrentHostPage';
import UserListOnlineHostPage from './pages/Admin/User/UserListOnlineHostPage';

// Spv Pages
import OrgProfilePage from './pages/Spv/Org/Profile';
import OrgRolesPage from './pages/Spv/Org/Profile/Roles';
import OrgUsersPage from './pages/Spv/Org/Profile/Users';
import OrgListDraftHostPage from './pages/Spv/Org/List/OrgListDraftHostPage';
import OrgListCurrentHostPage from './pages/Spv/Org/List/OrgListCurrentHostPage';
import OrgListCurrentFeatureHostPage from './pages/Spv/Org/List/OrgListCurrentFeatureHostPage';
import OrgListHistoryHostPage from './pages/Spv/Org/List/OrgListHistoryHostPage';

// Member Pages
import DocumentDetailPage from './pages/Member/Document/Detail';
import DocumentListDraftPage from './pages/Member/Document/List/DocumentListDraftPage';
import DocumentListCurrentPage from './pages/Member/Document/List/DocumentListCurrentPage';
import DocumentListHistoryPage from './pages/Member/Document/List/DocumentListHistoryPage';

// User Pages
import UserProfilePage from './pages/User/Profile';
import UserRolesPage from './pages/User/Profile/Roles';
import UserIdCardPage from './pages/User/Profile/IdCard';

// Web Pages
import AboutPage from './pages/About';
import PeoplePage from './pages/People';
import BlogPage from './pages/Blog';
import PeopleProfilePage from './pages/People/Profile';
import BlogDetailPage from './pages/Blog/Detail';

class CommonApp extends React.Component {
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

    const { ready } = state;
    const { loading } = props;

    if (loading || !ready) return <Loading />;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            name="home"
            path="/"
            render={(routeProps) => <Home {...routeProps} {...props} {...state} />}
          />
          <Route
            exact
            name="about"
            path="/about"
            render={(routeProps) => <AboutPage {...routeProps} {...props} {...state} />}
          />
          <Route
            exact
            name="people"
            path="/people"
            render={(routeProps) => <PeoplePage {...routeProps} {...props} {...state} />}
          />
          <Route
            exact
            name="people_profile"
            path="/people/profile"
            render={(routeProps) => <PeopleProfilePage {...routeProps} {...props} {...state} />}
          />
          <Route
            exact
            name="blog"
            path="/blog"
            render={(routeProps) => <BlogPage {...routeProps} {...props} {...state} />}
          />
          <Route
            exact
            name="blog_detail"
            path="/blog/detail"
            render={(routeProps) => <BlogDetailPage {...routeProps} {...props} {...state} />}
          />

          <Authorized
            exact
            allowedRoles={['user', 'member', 'spv']}
            path="/dashboard"
            component={Dashboard}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />

          {/* ROOT */}

          <Authorized
            exact
            allowedRoles={['root']}
            path="/Root/User/List/Unverified/All"
            pathAfterFailure="/dashboard"
            component={UserListUnverifiedAllPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['root']}
            path="/Root/User/List/Current/All"
            pathAfterFailure="/dashboard"
            component={UserListCurrentAllPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['root']}
            path="/Root/User/List/Online/All"
            pathAfterFailure="/dashboard"
            component={UserListOnlineAllPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />

          <Authorized
            exact
            allowedRoles={['root']}
            path="/Root/Org/List/Draft/All"
            pathAfterFailure="/dashboard"
            component={OrgListDraftAllPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['root']}
            path="/Root/Org/List/Current/All"
            pathAfterFailure="/dashboard"
            component={OrgListCurrentAllPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['root']}
            path="/Root/Org/List/CurrentFeature/All"
            pathAfterFailure="/dashboard"
            component={OrgListCurrentFeatureAllPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['root']}
            path="/Root/Org/List/History/All"
            pathAfterFailure="/dashboard"
            component={OrgListHistoryAllPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />

          <Authorized
            exact
            allowedRoles={['root']}
            path="/Root/Tenant/List/Draft/All"
            pathAfterFailure="/dashboard"
            component={TenantListDraftAllPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['root']}
            path="/Root/Tenant/List/Current/All"
            pathAfterFailure="/dashboard"
            component={TenantListCurrentAllPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['root']}
            path="/Root/Tenant/List/History/All"
            pathAfterFailure="/dashboard"
            component={TenantListHistoryAllPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />

          {/* ADMIN */}
          <Authorized
            exact
            allowedRoles={['admin']}
            path="/Admin/User/List/Unverified/Host"
            pathAfterFailure="/dashboard"
            component={UserListUnverifiedHostPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['admin']}
            path="/Admin/User/List/WaitingApproval/Host"
            pathAfterFailure="/dashboard"
            component={UserListWaitingApprovalHostPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['admin']}
            path="/Admin/User/List/Approved/Host"
            pathAfterFailure="/dashboard"
            component={UserListApprovedHostPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['admin']}
            path="/Admin/User/List/Current/Host"
            pathAfterFailure="/dashboard"
            component={UserListCurrentHostPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['admin']}
            path="/Admin/User/List/Online/Host"
            pathAfterFailure="/dashboard"
            component={UserListOnlineHostPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />

          <Authorized
            exact
            allowedRoles={['admin']}
            path="/User/:_id"
            pathAfterFailure="/dashboard"
            component={UserProfilePage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['admin']}
            path="/User/:_id/Roles"
            pathAfterFailure="/dashboard"
            component={UserRolesPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['admin']}
            path="/User/:_id/idcard"
            pathAfterFailure="/dashboard"
            component={UserIdCardPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />

          {/* SPV */}
          <Authorized
            exact
            allowedRoles={['spv', 'admin']}
            path="/Org/:_id"
            pathAfterFailure="/dashboard"
            component={OrgProfilePage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['spv', 'admin']}
            path="/Org/:_id/Roles"
            pathAfterFailure="/dashboard"
            component={OrgRolesPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['spv', 'admin']}
            path="/Org/:_id/Users"
            pathAfterFailure="/dashboard"
            component={OrgUsersPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['spv', 'admin']}
            path="/Spv/Org/List/Draft/Host"
            pathAfterFailure="/dashboard"
            component={OrgListDraftHostPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['spv', 'admin']}
            path="/Spv/Org/List/Current/Host"
            pathAfterFailure="/dashboard"
            component={OrgListCurrentHostPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['spv', 'admin']}
            path="/Spv/Org/List/CurrentFeature/Host"
            pathAfterFailure="/dashboard"
            component={OrgListCurrentFeatureHostPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['spv', 'admin']}
            path="/Spv/Org/List/History/Host"
            pathAfterFailure="/dashboard"
            component={OrgListHistoryHostPage}
            setAfterLoginPath={setAfterLoginPath}
            {...props}
            {...state}
          />
          <Authorized
            exact
            allowedRoles={['spv', 'admin']}
            path="/Spv/Org/List/History/Host"
            pathAfterFailure="/dashboard"
            component={OrgListHistoryHostPage}
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
          <Authenticated
            exact
            path="/idcard"
            component={UserIdCardPage}
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
          <Route path="/verify-email/:token" component={UserVerifyEmailPage} />
          <Public path="/forgetpassword" component={UserForgetPasswordPage} {...props} {...state} />
          <Public
            name="reset-password"
            path="/reset-password/:token"
            component={UserResetPasswordPage}
            {...props}
            {...state}
          />
          <Route name="NotAuthorized" path="/NotAuthorized" component={NotAuthorized} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

CommonApp.defaultProps = {
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

CommonApp.propTypes = {
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

export default withTrackerSsr(() => initApp())(CommonApp);
