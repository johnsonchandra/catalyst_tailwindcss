/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { flowRight as compose } from 'lodash';
import { graphql } from 'react-apollo';

import PageList from '../../../PageList';

import EmailSubscriber from '../../../../../entities/EmailSubscriber/api';
import jsonDefs from '../../../../../entities/EmailSubscriber/api/utils/getEmailSubscriberJSONdefs';
import parser from '../../../../../entities/EmailSubscriber/ui/utils/EmailSubscriberParser';

import tabs from './tabs';

import { addEmailSubscriber } from '../../../../../entities/EmailSubscriber/ui/utils/mutations.gql';

const EmailSubscriberListHistoryPage = (props) => {
  const { roles, createDoc } = props;
  return (
    <PageList
      Entity={EmailSubscriber}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles)}
      sort={{ updatedAt: 1 }}
      currentPageName="EmailSubscriber"
      currentTabName="History"
      publishName="listEmailSubscriberHistory"
      createDoc={createDoc}
      {...props}
    />
  );
};

EmailSubscriberListHistoryPage.propTypes = {
  createDoc: PropTypes.func.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default compose(
  graphql(addEmailSubscriber, {
    name: 'createDoc',
    options: ({ history }) => ({
      variables: {
        email: 'user@user.maya',
      },
      onCompleted: (mutation) => {
        history.push(`/EmailSubscriber/${mutation.addEmailSubscriber._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(EmailSubscriberListHistoryPage);
