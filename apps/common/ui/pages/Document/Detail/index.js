/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import getNavs from '../../Dashboard/getNavs';

import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';
import DocumentDetail from '../../../../../example/entities/Document/ui/components/DocumentDetail';

export default function DocumentDetailPage(props) {
  const { roles } = props;
  return (
    <SidebarWithSearchAndAvatar currentPageName="Document" navigations={getNavs(roles)} {...props}>
      <DocumentDetail {...props} />
    </SidebarWithSearchAndAvatar>
  );
}

DocumentDetailPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
