/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PageUserList from '../../PageUserList';

import tabs from './tabs';

export default function UserListApprovedHostPage(props) {
  return (
    <PageUserList
      tabs={tabs}
      currentPageName="User"
      currentTabName="Approved"
      publishName="listUserApprovedHost"
      {...props}
    />
  );
}
