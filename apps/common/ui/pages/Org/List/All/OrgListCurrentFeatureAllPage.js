/* eslint-disable react/jsx-props-no-spreading  */

import React from 'react';

import PageList from '../../../PageList';

import Org from '../../../../../entities/Org/api';
import jsonDefs from '../../../../../entities/Org/api/utils/getOrgJSONdefs';
import parser from '../../../../../entities/Org/ui/utils/OrgParser';
import tabs from './tabs';

export default function OrgListCurrentFeatureAllPage(props) {
  return (
    <PageList
      Entity={Org}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs}
      sort={{ name: 1 }}
      currentPageName="Org All Tenant"
      currentTabName="Current Feature"
      publishName="listOrgCurrentFeatureAll"
      {...props}
    />
  );
}
