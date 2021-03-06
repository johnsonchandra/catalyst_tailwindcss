import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Counts } from 'meteor/ros:publish-counts';

import getUserJSONdefs from '../../utils/getUserJSONdefs';
import getQueryAndProjectionForRootAdmin from '../../../../../helpers/getQueryAndProjectionForRootAdmin';

const publishName = 'listUserUnverifiedAll';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    const { query, projection } = getQueryAndProjectionForRootAdmin(
      publishName,
      { ...props, _id: Meteor.userId() },
      getUserJSONdefs,
    );

    Counts.publish(this, `${publishName}Count`, Meteor.users.find(query), { fastCount: true });

    return Meteor.users.find(query, projection);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
