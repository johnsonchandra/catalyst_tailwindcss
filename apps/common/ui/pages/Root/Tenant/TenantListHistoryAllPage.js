/* eslint-disable react/jsx-props-no-spreading  */

import React from 'react';

import PageList from '../../PageList';

import Tenant from '../../../../entities/Tenant/api';
import jsonDefs from '../../../../entities/Tenant/api/utils/getTenantJSONdefs';
import parser from '../../../../entities/Tenant/ui/utils/TenantParser';
import tabs from './tabs';

export default function TenantListHistoryAllPage(props) {
  return (
    <PageList
      Entity={Tenant}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs}
      sort={{ name: 1 }}
      currentPageName="Tenant"
      currentTabName="History"
      publishName="listTenantHistoryAll"
      {...props}
    />
  );
}
