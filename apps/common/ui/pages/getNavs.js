import _ from 'lodash';

import root from './Root/Dashboard/navigations';
import admin from './Admin/Dashboard/navigations';
import spv from './Spv/Dashboard/navigations';
import member from './Member/Dashboard/navigations';
import user from './User/Dashboard/navigations';

const navs = {
  root,
  admin,
  spv,
  member,
  user,
};

export default function getNavs(roles) {
  return _.sortBy(_.flattenDeep(roles.map((role) => navs[role])), ['sequenceNr']);
}
