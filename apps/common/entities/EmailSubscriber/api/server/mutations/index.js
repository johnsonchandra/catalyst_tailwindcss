import addEmailSubscriber from './addEmailSubscriber';
import updateEmailSubscriber from './updateEmailSubscriber';
import removeEmailSubscriber from './removeEmailSubscriber';

import setEmailSubscriberStatusToDraft from './setEmailSubscriberStatusToDraft';
import setEmailSubscriberStatusToActive from './setEmailSubscriberStatusToActive';
import setEmailSubscriberStatusToClosed from './setEmailSubscriberStatusToClosed';

export default {
  addEmailSubscriber: (root, args, context) =>
    addEmailSubscriber({
      context,
      args,
    }),
  updateEmailSubscriber: (root, args, context) =>
    updateEmailSubscriber({
      context,
      args: args.inputEmailSubscriber,
    }),
  removeEmailSubscriber: (root, args, context) =>
    removeEmailSubscriber({
      context,
      args,
    }),

  setEmailSubscriberStatusToDraft: (root, args, context) =>
    setEmailSubscriberStatusToDraft({
      context,
      args,
    }),
  setEmailSubscriberStatusToActive: (root, args, context) =>
    setEmailSubscriberStatusToActive({
      context,
      args,
    }),
  setEmailSubscriberStatusToClosed: (root, args, context) =>
    setEmailSubscriberStatusToClosed({
      context,
      args,
    }),
};
