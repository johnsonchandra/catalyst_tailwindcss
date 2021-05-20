/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../../components/Tabs';

import getNavs from '../../../getNavs';

import SidebarWithSearchAndAvatar from '../../../../components/SidebarWithSearchAndAvatar';
import OrgUsers from '../../../../../entities/Org/ui/components/OrgUsers';

import tabs from './tabs';

export default function OrgUsersPage(props) {
  const { roles, history, match } = props;
  return (
    <SidebarWithSearchAndAvatar
      currentPageName="Organization"
      navigations={getNavs(roles)}
      {...props}
    >
      <Tabs tabs={tabs(match.params && match.params._id)} current="Users" history={history} />
      <OrgUsers {...props} />
    </SidebarWithSearchAndAvatar>
  );
}

OrgUsersPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
