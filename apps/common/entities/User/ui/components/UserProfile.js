/* eslint-disable jsx-a11y/label-has-associated-control */
import { Accounts } from 'meteor/accounts-base';

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, withApollo } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';
import Validation from '../../../../ui/components/Validation';
import Anon from '../../../../ui/components/Anon';

import { detailUser } from '../utils/queries.gql';

import { updateUser as updateUserMutation } from '../utils/mutations.gql';

class UserProfile extends React.Component {
  handleSubmit = (form) => {
    const { updateUser, data } = this.props;
    updateUser({
      variables: {
        user: {
          _id: data.detailUser._id,
          email: form.email.value,
          profile: {
            fullname: form.fullname.value,
            shortname: form.shortname.value,
            phone: form.phone.value,
            about: form.about.value,
          },
        },
      },
    });

    if (
      form.currentPassword &&
      form.currentPassword.value &&
      form.newPassword &&
      form.newPassword.value
    ) {
      Accounts.changePassword(form.currentPassword.value, form.newPassword.value, (error) => {
        if (error) {
          alert(error.reason);
        } else {
          form.currentPassword.value = ''; // eslint-disable-line no-param-reassign
          form.newPassword.value = ''; // eslint-disable-line no-param-reassign
        }
      });
    }
  };

  render() {
    const { data, match } = this.props;
    if (data.loading) return <Loading />;
    if (!data.detailUser)
      return (
        <BlankState title="No Profile found" subtitle="Make sure you have enough user right" />
      );

    return (
      <Validation
        rules={{
          fullname: {
            required: true,
          },
          shortname: {
            required: true,
          },
          phone: {
            required: true,
            mobilephoneID: true,
          },
          email: {
            required: true,
            email: true,
          },
          currentPassword: {
            required: () =>
              // Only required if newPassword field has a value.
              document.querySelector('[name="newPassword"]').value.length > 0,
          },
          newPassword: {
            required() {
              // Only required if currentPassword field has a value.
              return document.querySelector('[name="currentPassword"]').value.length > 0;
            },
            minlength: 6,
          },
        }}
        messages={{
          fullname: {
            required: "What's your full name?",
          },
          shortname: {
            required: "What's your nick name?",
          },
          phone: {
            required: "What's your phone number?",
            mobilephoneID: 'Please input valid Indonesian mobile phone number',
          },
          email: {
            required: 'Need an email address here.',
            email: 'Is this email address correct?',
          },
          currentPassword: {
            required: 'Need your current password if changing.',
          },
          newPassword: {
            required: 'Need your new password if changing.',
          },
        }}
        submitHandler={(form) => this.handleSubmit(form)}
      >
        <form
          className="space-y-8 divide-y divide-gray-200"
          ref={(form) => (this.form = form)}
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Personal Information
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
                    htmlFor="fullname"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Full Name
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      autoComplete="fullname"
                      defaultValue={data.detailUser.fullname}
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
                      defaultValue={data.detailUser.shortname}
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
                      defaultValue={data.detailUser.emailAddress}
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
                      defaultValue={data.detailUser.phone}
                      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    About
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      defaultValue={data.detailUser.about}
                      className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Write a few sentences about yourself.
                    </p>
                  </div>
                </div>

                {!(match.params && match.params._id && match.params._id) && (
                  <>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="currentPassword"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Current Password
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          id="currentPassword"
                          name="currentPassword"
                          type="password"
                          className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="newPassword"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        New Password
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </Validation>
    );
  }
}

UserProfile.propTypes = {
  data: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailUser, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateUserMutation, {
    name: 'updateUser',
    options: () => ({
      refetchQueries: [{ query: detailUser }],
      onCompleted: () => {
        alert('Profile updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(withApollo(UserProfile));
