/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PageUserList from '../../PageUserList';

import tabs from './tabs';

export default function UserListEmailUnverifiedHostPage(props) {
  return (
    <PageUserList
      tabs={tabs}
      currentPageName="User"
      currentTabName="Email Unverified"
      publishName="listUserEmailUnverifiedHost"
      {...props}
    />
  );
}
