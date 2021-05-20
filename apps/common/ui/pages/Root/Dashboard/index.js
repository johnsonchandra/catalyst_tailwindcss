/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';

import getNavs from '../../getNavs';

export default function DashboardRoot(props) {
  const { roles } = props;

  return (
    <SidebarWithSearchAndAvatar currentPageName="Dashboard" navigations={getNavs(roles)} {...props}>
      <p>Dashboard Root</p>
    </SidebarWithSearchAndAvatar>
  );
}

DashboardRoot.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
