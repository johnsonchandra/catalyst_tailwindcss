/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Loading from '../../../../common/ui/components/Loading';

import DashboardMember from '../../../../common/ui/pages/Member/Dashboard';
import DashboardUser from '../../../../common/ui/pages/User/Dashboard';

export default function Dashboard(props) {
  const { roles, loggingIn } = props;

  if (loggingIn) return <Loading />;

  if (roles.indexOf('member') > -1) return <DashboardMember {...props} />;
  if (roles.indexOf('user') > -1) return <DashboardUser {...props} />;
}
