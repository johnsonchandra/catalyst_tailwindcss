/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PageUserList from '../../PageUserList';
import tabs from './tabs';

export default function UserListEmailUnverifiedAllPage(props) {
  return (
    <PageUserList
      tabs={tabs}
      currentPageName="User All Tenant"
      currentTabName="Email Unverified"
      publishName="listUserEmailUnverifiedAll"
      {...props}
    />
  );
}
