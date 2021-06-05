import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import EmailSubscriber from '../..';

import getEmailSubscriberJSONdefs from '../../utils/getEmailSubscriberJSONdefs';
import pubProcessor from '../../../../../helpers/server/pubProcessor';

const publishName = 'listEmailSubscriberHistory';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    return pubProcessor(EmailSubscriber, publishName, getEmailSubscriberJSONdefs, props, this);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
