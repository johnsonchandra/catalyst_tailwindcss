import { Meteor } from 'meteor/meteor';

import './api';
import './graphql';

import './fixtures_User';
import './fixtures_Org';
import './fixtures_Tenant';
import './fixtures_UserSetting';

import './accounts';
import './browserPolicy';
import './email';
import './files';
import './slingshot';

import './ssr';

// toggle this if you want cron
// import './cronjobs';

// Publish all role-assignments
// eslint-disable-next-line consistent-return
Meteor.publish(null, function publishRole() {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  this.ready();
});

Meteor.startup(() => {
  console.info('server ready');
});
