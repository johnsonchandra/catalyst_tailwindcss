/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, withApollo } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../../common/ui/components/Loading';
import BlankState from '../../../../../common/ui/components/BlankState';

import { detailDocument } from '../utils/queries.gql';

import {
  updateDocument as updateDocumentMutation,
  removeDocument as removeDocumentMutation,
  setDocumentStatusToDraft,
  setDocumentStatusToActive,
  setDocumentStatusToClosed,
} from '../utils/mutations.gql';

import { iso } from '../../../../../common/helpers/dates';

class DocumentDetail extends React.Component {
  handleSubmit = (form) => {
    const { updateDocument, data } = this.props;
    updateDocument({
      variables: {
        inputDocument: {
          _id: data.detailDocument._id,
          nr: form.nr.value,
          name: form.name.value,
          trxDate: form.trxDate.value,
          amount: parseFloat(form.amount.value),
          description: form.description.value,
        },
      },
    });
  };

  handleRemove = () => {
    const { removeDocument, data } = this.props;
    if (
      confirm(
        `Document [ ${data.detailDocument.name} ] will permanently DELETED!!! ARE YOU SURE???`,
      )
    ) {
      removeDocument({
        variables: {
          _id: data.detailDocument._id,
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

    if (confirm(`Document [ ${data.detailDocument.name} ] will be set to ${status}?`)) {
      actions[status]({
        variables: {
          _id: data.detailDocument._id,
        },
      });
    }
  };

  render() {
    const { data, settings } = this.props;
    if (data.loading) return <Loading />;
    if (!data.detailDocument)
      return <BlankState title="No Document found" subtitle="Make sure you have enough right" />;

    const disabled = !(data.detailDocument.status === 'Draft');

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
                {data.detailDocument.name}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                [ {data.detailDocument.type} ] [ {data.detailDocument.status} ]
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
                    defaultValue={data.detailDocument.name}
                    disabled={disabled}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="nr"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Nr
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="nr"
                    name="nr"
                    type="text"
                    autoComplete="nr"
                    defaultValue={data.detailDocument.nr}
                    disabled={disabled}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="trxDate"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Trx Date
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="trxDate"
                    name="trxDate"
                    type="datetime-local"
                    defaultValue={iso(
                      data.detailDocument.trxDate,
                      settings.timezone,
                      'YYYY-MM-DD[T]HH:mm',
                    )}
                    disabled={disabled}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Amount
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    defaultValue={data.detailDocument.amount}
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
                    defaultValue={data.detailDocument.description}
                    disabled={disabled}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Write a few sentences about this document.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            {data.detailDocument.status === 'Draft' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={this.handleRemove}
              >
                Delete
              </button>
            )}
            {data.detailDocument.status === 'Active' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Draft')}
              >
                Set to Draft
              </button>
            )}
            {(data.detailDocument.status === 'Draft' ||
              data.detailDocument.status === 'Closed') && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Active')}
              >
                Set to Active
              </button>
            )}
            {data.detailDocument.status === 'Active' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Closed')}
              >
                Set to Closed
              </button>
            )}
            {data.detailDocument.status === 'Draft' && (
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

DocumentDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateDocument: PropTypes.func.isRequired,
  removeDocument: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailDocument, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateDocumentMutation, {
    name: 'updateDocument',
    options: () => ({
      refetchQueries: [{ query: detailDocument }],
      onCompleted: () => {
        alert('Document updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeDocumentMutation, {
    name: 'removeDocument',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('Document deleted!');
        history.push('/Document/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setDocumentStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Document Status set to Draft!');
        history.push('/Document/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setDocumentStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Document Status set to Active!');
        history.push('/Document/List/Current');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setDocumentStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Document Status set to Closed!');
        history.push('/Document/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(withApollo(DocumentDetail));
