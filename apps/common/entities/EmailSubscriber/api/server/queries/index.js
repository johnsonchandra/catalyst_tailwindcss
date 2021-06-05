import detailEmailSubscriber from './detailEmailSubscriber';

export default {
  detailEmailSubscriber: (parent, args, context) =>
    detailEmailSubscriber({
      context,
      _id: (parent && parent.EmailSubscriberId) || args._id,
      publishName: 'detailEmailSubscriber',
    }),
  getEmailSubscriber: (parent, args, context) =>
    detailEmailSubscriber({
      context,
      _id: (parent && parent.EmailSubscriberId) || args._id,
      publishName: 'getEmailSubscriber',
    }),
};
