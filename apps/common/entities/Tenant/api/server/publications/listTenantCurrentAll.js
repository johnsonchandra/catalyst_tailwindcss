import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Counts } from 'meteor/ros:publish-counts';

import getQueryAndProjection from '../processors/getQueryAndProjection';

import Tenant from '../..';

const publishName = 'listTenantCurrentAll';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    // this is just for tenant. if you dont need it, just look at listTenantDraft
    const { query, projection } = getQueryAndProjection(publishName, props, this);

    Counts.publish(this, `${publishName}Count`, Tenant.find(query), { fastCount: true });

    return Tenant.find(query, projection);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
