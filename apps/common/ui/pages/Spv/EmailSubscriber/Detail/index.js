/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import getNavs from '../../../getNavs';

import SidebarWithSearchAndAvatar from '../../../../components/SidebarWithSearchAndAvatar';
import EmailSubscriberDetail from '../../../../../entities/EmailSubscriber/ui/components/EmailSubscriberDetail';

export default function EmailSubscriberDetailPage(props) {
  const { roles } = props;
  return (
    <SidebarWithSearchAndAvatar
      currentPageName="EmailSubscriber"
      navigations={getNavs(roles)}
      {...props}
    >
      <EmailSubscriberDetail {...props} />
    </SidebarWithSearchAndAvatar>
  );
}

EmailSubscriberDetailPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
