/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../components/Tabs';

import getNavs from '../../Dashboard/getNavs';

import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';
import OrgProfile from '../../../../entities/Org/ui/components/OrgProfile';

import tabs from './tabs';

export default function OrgProfilePage(props) {
  const { roles, history, match } = props;
  return (
    <SidebarWithSearchAndAvatar
      currentPageName="Organization"
      navigations={getNavs(roles)}
      {...props}
    >
      <Tabs tabs={tabs(match.params && match.params._id)} current="Profile" history={history} />
      <OrgProfile {...props} />
    </SidebarWithSearchAndAvatar>
  );
}

OrgProfilePage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
