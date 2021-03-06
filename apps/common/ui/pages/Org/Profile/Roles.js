/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../components/Tabs';

import getNavs from '../../Dashboard/getNavs';

import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';
import OrgRoles from '../../../../entities/Org/ui/components/OrgRoles';

import tabs from './tabs';

export default function OrgRolesPage(props) {
  const { roles, match, history } = props;
  return (
    <SidebarWithSearchAndAvatar
      currentPageName="Organization"
      navigations={getNavs(roles)}
      {...props}
    >
      <Tabs tabs={tabs(match.params && match.params._id)} current="Roles" history={history} />
      <OrgRoles {...props} disabled={!(roles.indexOf('spv') > -1 || roles.indexOf('admin') > -1)} />
    </SidebarWithSearchAndAvatar>
  );
}

OrgRolesPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
