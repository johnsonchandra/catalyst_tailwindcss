/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';

import getNavs from '../getNavs';

export default function DashboardAdmin(props) {
  const { roles } = props;

  return (
    <SidebarWithSearchAndAvatar currentPageName="Dashboard" navigations={getNavs(roles)} {...props}>
      <p>Ini Dashboard Admin</p>
    </SidebarWithSearchAndAvatar>
  );
}

DashboardAdmin.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
