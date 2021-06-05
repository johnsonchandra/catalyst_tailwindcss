/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, withApollo } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import { detailEmailSubscriber } from '../utils/queries.gql';

import {
  updateEmailSubscriber as updateEmailSubscriberMutation,
  removeEmailSubscriber as removeEmailSubscriberMutation,
  setEmailSubscriberStatusToDraft,
  setEmailSubscriberStatusToActive,
  setEmailSubscriberStatusToClosed,
} from '../utils/mutations.gql';

class EmailSubscriberDetail extends React.Component {
  handleSubmit = (form) => {
    const { updateEmailSubscriber, data } = this.props;
    updateEmailSubscriber({
      variables: {
        inputEmailSubscriber: {
          _id: data.detailEmailSubscriber._id,
          name: form.name.value,
          email: form.email.value,
          description: form.description.value,
        },
      },
    });
  };

  handleRemove = () => {
    const { removeEmailSubscriber, data } = this.props;
    if (confirm(`EmailSubscriber will permanently DELETED!!! ARE YOU SURE???`)) {
      removeEmailSubscriber({
        variables: {
          _id: data.detailEmailSubscriber._id,
        },
      });
    }
  };

  handleStatus = (status) => {
    const { setStatusToDraft, setStatusToActive, setStatusToClosed, data } = this.props;

    const actions = {
      Draft: setStatusToDraft,
      Active: setStatusToActive,
      Closed: setStatusToClosed,
    };

    if (confirm(`EmailSubscriber will be set to ${status}?`)) {
      actions[status]({
        variables: {
          _id: data.detailEmailSubscriber._id,
        },
      });
    }
  };

  render() {
    const { data } = this.props;
    if (data.loading) return <Loading />;
    if (!data.detailEmailSubscriber)
      return (
        <BlankState title="No EmailSubscriber found" subtitle="Make sure you have enough right" />
      );

    const disabled = !(data.detailEmailSubscriber.status === 'Draft');

    return (
      <form
        className="space-y-8 divide-y divide-gray-200"
        ref={(form) => (this.form = form)}
        onSubmit={(event) => {
          event.preventDefault();
          this.handleSubmit(this.form);
        }}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {data.detailEmailSubscriber.email}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                [ {data.detailEmailSubscriber.type} ] [ {data.detailEmailSubscriber.status} ]
              </p>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    defaultValue={data.detailEmailSubscriber.name}
                    disabled={disabled}
                    required
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Email
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    defaultValue={data.detailEmailSubscriber.email}
                    disabled={disabled}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Description
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    defaultValue={data.detailEmailSubscriber.description}
                    disabled={disabled}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Write a few sentences about this emailSubscriber.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            {data.detailEmailSubscriber.status === 'Draft' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={this.handleRemove}
              >
                Delete
              </button>
            )}
            {data.detailEmailSubscriber.status === 'Active' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Draft')}
              >
                Set to Draft
              </button>
            )}
            {(data.detailEmailSubscriber.status === 'Draft' ||
              data.detailEmailSubscriber.status === 'Closed') && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Active')}
              >
                Set to Active
              </button>
            )}
            {data.detailEmailSubscriber.status === 'Active' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Closed')}
              >
                Set to Closed
              </button>
            )}
            {data.detailEmailSubscriber.status === 'Draft' && (
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </form>
    );
  }
}

EmailSubscriberDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateEmailSubscriber: PropTypes.func.isRequired,
  removeEmailSubscriber: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
};

export default compose(
  graphql(detailEmailSubscriber, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateEmailSubscriberMutation, {
    name: 'updateEmailSubscriber',
    options: () => ({
      refetchQueries: [{ query: detailEmailSubscriber }],
      onCompleted: () => {
        alert('EmailSubscriber updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeEmailSubscriberMutation, {
    name: 'removeEmailSubscriber',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('EmailSubscriber deleted!');
        history.push('/EmailSubscriber/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setEmailSubscriberStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('EmailSubscriber Status set to Draft!');
        history.push('/EmailSubscriber/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setEmailSubscriberStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('EmailSubscriber Status set to Active!');
        history.push('/EmailSubscriber/List/Current');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setEmailSubscriberStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('EmailSubscriber Status set to Closed!');
        history.push('/EmailSubscriber/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(withApollo(EmailSubscriberDetail));
