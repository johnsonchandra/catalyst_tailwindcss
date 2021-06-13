/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { flowRight as compose } from 'lodash';
import { graphql } from 'react-apollo';

import PageList from '../../PageList';

import Document from '../../../../../example/entities/Document/api';
import jsonDefs from '../../../../../example/entities/Document/api/utils/getDocumentJSONdefs';
import parser from '../../../../../example/entities/Document/ui/utils/DocumentParser';

import tabs from './tabs';

import { addDocument } from '../../../../../example/entities/Document/ui/utils/mutations.gql';

const DocumentListHistoryPage = (props) => {
  const { roles, createDoc } = props;
  return (
    <PageList
      Entity={Document}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles)}
      sort={{ name: 1 }}
      currentPageName="Document"
      currentTabName="History"
      publishName="listDocumentHistory"
      createDoc={createDoc}
      {...props}
    />
  );
};

DocumentListHistoryPage.propTypes = {
  createDoc: PropTypes.func.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default compose(
  graphql(addDocument, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/Document/${mutation.addDocument._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(DocumentListHistoryPage);
