/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import PageList from '../../PageList';

import Document from '../../../../../example/entities/Document/api';
import jsonDefs from '../../../../../example/entities/Document/api/utils/getDocumentJSONdefs';
import parser from '../../../../../example/entities/Document/ui/utils/DocumentParser';

import tabs from './tabs';

import { addDocument } from '../../../../../example/entities/Document/ui/utils/mutations.gql';

const DocumentListCurrentPage = (props) => {
  const { roles, createDoc } = props;
  return (
    <PageList
      Entity={Document}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles)}
      sort={{ name: 1 }}
      currentPageName="Document"
      currentTabName="Current"
      publishName="listDocumentCurrent"
      createDoc={createDoc}
      {...props}
    />
  );
};

DocumentListCurrentPage.propTypes = {
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
)(DocumentListCurrentPage);
