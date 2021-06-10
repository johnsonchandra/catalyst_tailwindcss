import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Counts } from 'meteor/ros:publish-counts';

import getEmailSubscriberQueryAndProjection from '../processors/getEmailSubscriberQueryAndProjection';

import EmailSubscriber from '../..';

const publishName = 'listEmailSubscriberCurrent';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    // this is just for emailSubscriber. if you dont need it, just look at listEmailSubscriberDraft
    const { query, projection } = getEmailSubscriberQueryAndProjection(publishName, props, this);

    Counts.publish(this, `${publishName}Count`, EmailSubscriber.find(query), { fastCount: true });

    return EmailSubscriber.find(query, projection);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
