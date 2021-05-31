/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PageUserList from '../../PageUserList';

import tabs from './tabs';

export default function UserListIDNotUploadedHostPage(props) {
  return (
    <PageUserList
      tabs={tabs}
      currentPageName="User"
      currentTabName="ID Not Uploaded"
      publishName="listUserIDNotUploadedHost"
      {...props}
    />
  );
}
