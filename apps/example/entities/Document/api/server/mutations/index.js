import addDocument from './addDocument';
import updateDocument from './updateDocument';
import removeDocument from './removeDocument';

import setDocumentStatusToDraft from './setDocumentStatusToDraft';
import setDocumentStatusToActive from './setDocumentStatusToActive';
import setDocumentStatusToClosed from './setDocumentStatusToClosed';

export default {
  addDocument: (root, args, context) =>
    addDocument({
      context,
      args,
    }),
  updateDocument: (root, args, context) =>
    updateDocument({
      context,
      args: args.inputDocument,
    }),
  removeDocument: (root, args, context) =>
    removeDocument({
      context,
      args,
    }),

  setDocumentStatusToDraft: (root, args, context) =>
    setDocumentStatusToDraft({
      context,
      args,
    }),
  setDocumentStatusToActive: (root, args, context) =>
    setDocumentStatusToActive({
      context,
      args,
    }),
  setDocumentStatusToClosed: (root, args, context) =>
    setDocumentStatusToClosed({
      context,
      args,
    }),
};
