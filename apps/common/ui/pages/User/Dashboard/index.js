/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import getNavs from '../../getNavs';

import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';

export default function DashboardUser(props) {
  const { roles } = props;
  return (
    <SidebarWithSearchAndAvatar currentPageName="Dashboard" navigations={getNavs(roles)} {...props}>
      <p>ini Dashboard User</p>
    </SidebarWithSearchAndAvatar>
  );
}

DashboardUser.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
