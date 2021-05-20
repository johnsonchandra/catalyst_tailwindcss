/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Loading from '../../components/Loading';

import DashboardRoot from '../Root/Dashboard';
import DashboardAdmin from '../Admin/Dashboard';
import DashboardSpv from '../Spv/Dashboard';
import DashboardMember from '../Member/Dashboard';
import DashboardUser from '../User/Dashboard';

export default function Dashboard(props) {
  const { roles, loggingIn } = props;

  if (loggingIn) return <Loading />;

  if (roles.indexOf('root') > -1) return <DashboardRoot {...props} />;
  if (roles.indexOf('admin') > -1) return <DashboardAdmin {...props} />;
  if (roles.indexOf('spv') > -1) return <DashboardSpv {...props} />;
  if (roles.indexOf('member') > -1) return <DashboardMember {...props} />;
  if (roles.indexOf('user') > -1) return <DashboardUser {...props} />;
}
