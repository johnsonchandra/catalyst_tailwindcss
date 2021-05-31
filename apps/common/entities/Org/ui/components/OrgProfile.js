/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, withApollo } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';
import Anon from '../../../../ui/components/Anon';

import { detailOrg } from '../utils/queries.gql';

import {
  updateOrg,
  removeOrg,
  setOrgStatusToDraft,
  setOrgStatusToActive,
  setOrgStatusToClosed,
} from '../utils/mutations.gql';

class OrgProfile extends React.Component {
  handleSubmit = (form) => {
    const { updateDoc, data } = this.props;
    const inputOrg = {
      _id: data.detailOrg._id,
      nr: form.nr.value,
      name: form.name.value,
      shortname: form.shortname.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      zipCode: form.zipCode.value,
      city: form.city.value,
      state: form.state.value,
      country: form.country.value,
      type: form.type.value,
      description: form.description.value,
    };
    updateDoc({
      variables: {
        inputOrg,
      },
    });
  };

  handleRemove = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { data, removeDoc } = this.props;
    if (
      confirm(`Organization ${data.detailOrg.name} will permanently DELETED!!! ARE YOU SURE???`)
    ) {
      removeDoc({
        variables: {
          _id: data.detailOrg._id,
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

    if (confirm(`Organization [ ${data.detailOrg.name} ] will be set to ${status}?`)) {
      actions[status]({
        variables: {
          _id: data.detailOrg._id,
        },
      });
    }
  };

  render() {
    const { data } = this.props;
    if (data.loading) return <Loading />;
    if (!data.detailOrg)
      return <BlankState title="No Profile found" subtitle="Make sure you have enough right" />;

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
                Organization Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                  Profile Photo
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="flex items-center">
                    <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <Anon />
                    </span>
                    <button
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="cover_photo"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Cover photo
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
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
                    defaultValue={data.detailOrg.nr}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

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
                    defaultValue={data.detailOrg.name}
                    required
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="shortname"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Short Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="shortname"
                    name="shortname"
                    type="text"
                    autoComplete="shortname"
                    defaultValue={data.detailOrg.shortname}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Email address
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    defaultValue={data.detailOrg.email}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Phone
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="phone"
                    defaultValue={data.detailOrg.phone}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Address
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    defaultValue={data.detailOrg.address}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Zip Code
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    autoComplete="zipCode"
                    defaultValue={data.detailOrg.zipCode}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  City/District
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="city"
                    defaultValue={data.detailOrg.city}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  State/Province
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="state"
                    name="state"
                    type="text"
                    autoComplete="state"
                    defaultValue={data.detailOrg.state}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Country
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country"
                    defaultValue={data.detailOrg.country}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Tipe
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <select
                    id="type"
                    name="type"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    defaultValue={data.detailOrg.type || 'Pokja'}
                  >
                    {['Company', 'Department', 'Division', 'Organization'].map((tipe) => (
                      <option key={tipe}>{tipe}</option>
                    ))}
                  </select>
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
                    defaultValue={data.detailOrg.description}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Write a few sentences about the Organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            {data.detailOrg.status === 'Draft' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={this.handleRemove}
              >
                Delete
              </button>
            )}
            {data.detailOrg.status === 'Active' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Draft')}
              >
                Set to Draft
              </button>
            )}
            {(data.detailOrg.status === 'Draft' || data.detailOrg.status === 'Closed') && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Active')}
              >
                Set to Active
              </button>
            )}
            {data.detailOrg.status === 'Active' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Closed')}
              >
                Set to Closed
              </button>
            )}
            {data.detailOrg.status === 'Draft' && (
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

OrgProfile.propTypes = {
  data: PropTypes.object.isRequired,
  updateDoc: PropTypes.func.isRequired,
  removeDoc: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
};

export default compose(
  graphql(detailOrg, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateOrg, {
    name: 'updateDoc',
    options: () => ({
      onCompleted: () => {
        alert('Organization Updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeOrg, {
    name: 'removeDoc',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('Organization Deleted!');
        history.push('/Spv/Org/List/Draft/Host');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setOrgStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Organization Status set to Draft!');
        history.push('/Spv/Org/List/Draft/Host');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setOrgStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Organization Status set to Active!');
        history.push('/Spv/Org/List/Current/Host');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setOrgStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Organization Status set to Closed!');
        history.push('/Org/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(withApollo(OrgProfile));
