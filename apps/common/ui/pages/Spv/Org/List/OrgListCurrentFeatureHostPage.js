/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { flowRight as compose } from 'lodash';
import { graphql } from 'react-apollo';

import PageList from '../../../PageList';

import Org from '../../../../../entities/Org/api';
import jsonDefs from '../../../../../entities/Org/api/utils/getOrgJSONdefs';
import parser from '../../../../../entities/Org/ui/utils/OrgParser';
import tabs from './tabs';

import { addOrg } from '../../../../../entities/Org/ui/utils/mutations.gql';

const OrgListCurrentFeatureHostPage = (props) => {
  const { createDoc } = props;

  return (
    <PageList
      Entity={Org}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs}
      sort={{ name: 1 }}
      currentPageName="Organization"
      currentTabName="Current Feature"
      publishName="listOrgCurrentFeatureHost"
      createDoc={createDoc}
      {...props}
    />
  );
};

OrgListCurrentFeatureHostPage.propTypes = {
  createDoc: PropTypes.func.isRequired,
};

export default compose(
  graphql(addOrg, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/Org/${mutation.addOrg._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(OrgListCurrentFeatureHostPage);
