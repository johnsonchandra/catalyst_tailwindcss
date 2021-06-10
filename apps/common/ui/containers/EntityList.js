import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/ros:publish-counts';

import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';

import withTrackerSsr from '../../helpers/withTrackerSsr';

const EntityList = (props) => {
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
  } = props;

  if (loading) return <Loading />;

  return (
    <>
      {React.createElement(componentTable, {
        docs: parser(docs, settings),
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

EntityList.defaultProps = {
  loading: true,
  docs: [],
  total: 0,
  perPage: 12,
  currentPage: 1,
  onChangePage: () => {},
};

EntityList.propTypes = {
  loading: PropTypes.bool,
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
    const { search, perPage, currentPage, sort, publishName, jsonDefs, Entity } = props;
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

    const docs = Entity.find(
      { ...jsonDefs(publishName).query },
      {
        sort: options.sort,
      },
    ).fetch();

    const total = Counts.get(`${publishName}Count`);

    params = {
      ...params,
      loading,
      docs,
      total,
    };
  }
  return params;
})(EntityList);
