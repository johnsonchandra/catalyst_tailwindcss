import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';

// start COMMON
import CommonTypes from '../apps/common/entities/common_types';

import '../apps/common/entities/User/api/server/publications';
import UserTypes from '../apps/common/entities/User/api/server/types';
import UserQueries from '../apps/common/entities/User/api/server/queries';
import UserMutations from '../apps/common/entities/User/api/server/mutations';

import UserSettingTypes from '../apps/common/entities/UserSetting/api/server/types';
import UserSettingQueries from '../apps/common/entities/UserSetting/api/server/queries';
import UserSettingMutations from '../apps/common/entities/UserSetting/api/server/mutations';
import '../apps/common/entities/UserSetting/api/server';

import '../apps/common/entities/Tenant/api/server';
import '../apps/common/entities/Tenant/api/server/methods';
import '../apps/common/entities/Tenant/api/server/publications';
import TenantTypes from '../apps/common/entities/Tenant/api/server/types';
import TenantQueries from '../apps/common/entities/Tenant/api/server/queries';
import TenantMutations from '../apps/common/entities/Tenant/api/server/mutations';

import '../apps/common/entities/Counter/api/server';
import '../apps/common/entities/Counter/api/server/publications';
import CounterTypes from '../apps/common/entities/Counter/api/server/types';
import CounterQueries from '../apps/common/entities/Counter/api/server/queries';
import CounterMutations from '../apps/common/entities/Counter/api/server/mutations';

import '../apps/common/entities/Org/api/server';
import '../apps/common/entities/Org/api/server/methods';
import '../apps/common/entities/Org/api/server/publications';
import OrgTypes from '../apps/common/entities/Org/api/server/types';
import OrgQueries from '../apps/common/entities/Org/api/server/queries';
import OrgMutations from '../apps/common/entities/Org/api/server/mutations';

import '../apps/common/entities/File/api/server';
import '../apps/common/entities/File/api/server/methods';
import '../apps/common/entities/File/api/server/publications';
import FileTypes from '../apps/common/entities/File/api/server/types';
import FileQueries from '../apps/common/entities/File/api/server/queries';
import FileMutations from '../apps/common/entities/File/api/server/mutations';

import '../apps/common/entities/Notification/api/server';
import '../apps/common/entities/Notification/api/server/methods';
import '../apps/common/entities/Notification/api/server/publications';
import NotificationTypes from '../apps/common/entities/Notification/api/server/types';
import NotificationQueries from '../apps/common/entities/Notification/api/server/queries';
import NotificationMutations from '../apps/common/entities/Notification/api/server/mutations';

import '../apps/common/entities/EmailSubscriber/api/server';
// import '../apps/common/entities/EmailSubscriber/api/server/methods';
import '../apps/common/entities/EmailSubscriber/api/server/publications';
import EmailSubscriberTypes from '../apps/common/entities/EmailSubscriber/api/server/types';
import EmailSubscriberQueries from '../apps/common/entities/EmailSubscriber/api/server/queries';
import EmailSubscriberMutations from '../apps/common/entities/EmailSubscriber/api/server/mutations';

// end COMMON

// start EXAMPLE
import '../apps/example/entities/Document/api/server';
import '../apps/example/entities/Document/api/server/methods';
import '../apps/example/entities/Document/api/server/publications';
import DocumentTypes from '../apps/example/entities/Document/api/server/types';
import DocumentQueries from '../apps/example/entities/Document/api/server/queries';
import DocumentMutations from '../apps/example/entities/Document/api/server/mutations';
// end EXAMPLE

Meteor.users.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Meteor.users.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Match.TextOnly = Match.Where((text) => {
  check(text, String);
  return /^[a-zA-Z0-9\s\d./-]*$/.test(text);
});

const schema = {
  typeDefs: gql`
    # start COMMON
    ${CommonTypes}
    ${UserTypes}
    ${UserSettingTypes}
    ${TenantTypes}
    ${CounterTypes}
    ${FileTypes}
    ${OrgTypes}
    ${NotificationTypes}
    ${EmailSubscriberTypes}
    # end COMMON

    # start EXAMPLE
    ${DocumentTypes}
    # end EXAMPLE

    type Query {
      # start COMMON

      ## User
      detailUser(_id: String): User
      listUserByOrg: [User]
      listUserSettingsByHost: [UserSetting]
      exportUserData: UserExportDataZip
      getUser: Party

      ## UserSetting
      userSettings: [UserSetting]
      userSettingsAll: [UserSetting]

      ## Tenant
      detailTenant(_id: String): Tenant

      ## Counter
      detailCounter(_id: String): Counter
      getCounter(_id: String): Counter

      ## Org
      detailOrg(_id: String): Org
      getOrg: Party

      ## File
      detailFile(_id: String): File
      getFile(_id: String): File
      listFileByRef(_id: String, type: String): [File]
      listFileByTypeId(_id: String, type: String): [File]

      ## Notification
      detailNotification(_id: String): Notification
      getNotification(_id: String): Notification

      ## EmailSubscriber
      detailEmailSubscriber(_id: String): EmailSubscriber
      getEmailSubscriber(_id: String): EmailSubscriber

      # end COMMON

      # start EXAMPLE

      detailDocument(_id: String): Document
      getDocument(_id: String): Document

      # end EXAMPLE
    }

    type Mutation {
      # start COMMON

      ## User
      updateUser(user: UserInput): User
      updateUserRoles(party: UserInput): User
      setUserSettingsByHostToTrue: User
      sendVerificationEmail: User
      forgotPassword(email: String!): User
      sendWelcomeEmail: User

      ## UserSetting
      addUserSetting(setting: UserSettingInput): UserSetting
      updateUserSetting(setting: UserSettingInput): UserSetting
      removeUserSetting(_id: String!, host: String): UserSetting

      ## Tenant
      addTenant: Tenant
      updateTenant(inputTenant: TenantInput): Tenant
      removeTenant(_id: String!): Tenant
      setTenantStatusToActive(_id: String!, description: String): Tenant
      setTenantStatusToClosed(_id: String!, description: String): Tenant

      ## Counter
      addCounter: Counter
      updateCounter(inputCounter: CounterInput): Counter
      removeCounter(_id: String!): Counter
      setCounterStatusToActive(_id: String!, description: String): Counter
      setCounterStatusToClosed(_id: String!, description: String): Counter

      ## Org
      addOrg(inputOrg: OrgInput): Org
      updateOrg(inputOrg: OrgInput): Org
      removeOrg(_id: String!): Org
      updateOrgRoles(party: OrgInput): Org
      setOrgStatusToDraft(_id: String!, description: String): Org
      setOrgStatusToActive(_id: String!, description: String): Org
      setOrgStatusToClosed(_id: String!, description: String): Org

      ## File
      addFile(_id: String!): File
      updateFile(inputFile: FileInput): File
      removeFile(_id: String!): File
      setFileStatusToActive(_id: String!, description: String): File
      setFileStatusToClosed(_id: String!, description: String): File

      ## Notification
      addNotification(_id: String!): Notification
      updateNotification(inputNotification: NotificationInput): Notification
      removeNotification(_id: String!): Notification
      setNotificationStatusToActive(_id: String!, description: String): Notification
      setNotificationStatusToClosed(_id: String!, description: String): Notification

      ## EmailSubscriber
      addEmailSubscriber(email: String!): EmailSubscriber
      updateEmailSubscriber(inputEmailSubscriber: EmailSubscriberInput): EmailSubscriber
      removeEmailSubscriber(_id: String!): EmailSubscriber
      setEmailSubscriberStatusToDraft(_id: String!, description: String): EmailSubscriber
      setEmailSubscriberStatusToActive(_id: String!, description: String): EmailSubscriber
      setEmailSubscriberStatusToClosed(_id: String!, description: String): EmailSubscriber

      # end COMMON

      # start EXAMPLE

      addDocument: Document
      updateDocument(inputDocument: DocumentInput): Document
      removeDocument(_id: String!): Document
      setDocumentStatusToDraft(_id: String!, description: String): Document
      setDocumentStatusToActive(_id: String!, description: String): Document
      setDocumentStatusToClosed(_id: String!, description: String): Document

      # end EXAMPLE
    }
  `,
  resolvers: {
    Query: {
      // start COMMON
      ...UserQueries,
      ...UserSettingQueries,
      ...TenantQueries,
      ...CounterQueries,
      ...OrgQueries,
      ...FileQueries,
      ...NotificationQueries,
      ...EmailSubscriberQueries,
      // end COMMON

      // start EXAMPLE
      ...DocumentQueries,
      // end EXAMPLE
    },
    Mutation: {
      // start COMMON
      ...UserMutations,
      ...UserSettingMutations,
      ...TenantMutations,
      ...CounterMutations,
      ...OrgMutations,
      ...FileMutations,
      ...NotificationMutations,
      ...EmailSubscriberMutations,
      // end COMMON

      // start EXAMPLE
      ...DocumentMutations,
      // end EXAMPLE
    },

    // start COMMON

    Org: {
      Users: UserQueries.listUserByOrg,
    },

    // end COMMON

    // start EXAMPLE

    // end EXAMPLE
  },
};

export default makeExecutableSchema(schema);
