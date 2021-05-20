import addOrg from './addOrg';
import updateOrg from './updateOrg';
import removeOrg from './removeOrg';

import updateOrgRoles from './updateOrgRoles';

import setOrgStatusToDraft from './setOrgStatusToDraft';
import setOrgStatusToActive from './setOrgStatusToActive';
import setOrgStatusToClosed from './setOrgStatusToClosed';

import detailOrg from '../queries/detailOrg';

export default {
  addOrg: (root, args, context) =>
    addOrg({
      context,
      args,
    }),
  updateOrg: (root, args, context) =>
    updateOrg({
      context,
      args: args.inputOrg,
    }),
  removeOrg: (root, args, context) =>
    removeOrg({
      context,
      args,
    }),

  updateOrgRoles: async (parent, args, context) => {
    await updateOrgRoles({
      context,
      args,
    });

    return detailOrg({ _id: args.party._id, context });
  },

  setOrgStatusToDraft: (root, args, context) =>
    setOrgStatusToDraft({
      context,
      args,
    }),
  setOrgStatusToActive: (root, args, context) =>
    setOrgStatusToActive({
      context,
      args,
    }),
  setOrgStatusToClosed: (root, args, context) =>
    setOrgStatusToClosed({
      context,
      args,
    }),
};
