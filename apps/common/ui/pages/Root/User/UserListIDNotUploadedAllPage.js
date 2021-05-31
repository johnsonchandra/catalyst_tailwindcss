/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PageUserList from '../../PageUserList';
import tabs from './tabs';

export default function UserListIDNotUploadedAllPage(props) {
  return (
    <PageUserList
      tabs={tabs}
      currentPageName="User All Tenant"
      currentTabName="ID Not Uploaded"
      publishName="listUserIDNotUploadedAll"
      {...props}
    />
  );
}
