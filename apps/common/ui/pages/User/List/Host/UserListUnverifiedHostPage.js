/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PageUserList from '../../../PageUserList';

import tabs from './tabs';

export default function UserListUnverifiedHostPage(props) {
  return (
    <PageUserList
      tabs={tabs}
      currentPageName="User"
      currentTabName="Unverified"
      publishName="listUserUnverifiedHost"
      {...props}
    />
  );
}
