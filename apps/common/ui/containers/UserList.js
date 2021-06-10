import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/ros:publish-counts';

import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';

import withTrackerSsr from '../../helpers/withTrackerSsr';

const UserList = (props) => {
  const {
    loading,
    docs,
    total,
    perPage,
    currentPage,
    onChangePage,
    settings,
    componentTable,
    componentPagination,
    parser,
    roles,
  } = props;

  if (loading) return <Loading />;

  return (
    <>
      {React.createElement(componentTable, {
        docs: parser(docs, settings, roles),
        caption: `Last Updated: ${new Date().toLocaleString()}`,
      })}
      {React.createElement(componentPagination, {
        currentPage,
        onChangePage,
        perPage,
        total,
      })}
    </>
  );
};

UserList.defaultProps = {
  loading: true,
  docs: [],
  total: 0,
  perPage: 12,
  currentPage: 1,
  onChangePage: () => {},
};

UserList.propTypes = {
  loading: PropTypes.bool,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  docs: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
  perPage: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func,
  settings: PropTypes.object.isRequired,
  parser: PropTypes.func.isRequired,
  componentTable: PropTypes.func.isRequired,
  componentPagination: PropTypes.func.isRequired,
};

export default withTrackerSsr((props) => {
  let params = { ...props };

  if (Meteor.isClient) {
    const { search, perPage, currentPage, sort, publishName, jsonDefs } = props;
    const options = {
      search,
      perPage,
      currentPage,
      sort: sort || {
        updatedAt: 1,
      },
    };

    const subscription = Meteor.subscribe(publishName, options);
    const loading = !subscription.ready();

    const docs = Meteor.users
      .find(
        { ...jsonDefs(publishName, { _id: Meteor.userId() }).query },
        {
          sort: options.sort,
        },
      )
      .fetch();

    const total = Counts.get(`${publishName}Count`);

    params = {
      ...params,
      loading,
      docs,
      total,
    };
  }
  return params;
})(UserList);
