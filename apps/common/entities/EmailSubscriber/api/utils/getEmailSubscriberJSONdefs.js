const getEmailSubscriberJSONdefs = (publishName, props) => {
  const queryOr = (options) => [
    { _id: options && options.search },
    { name: options && options.search },
    { email: options && options.search },
  ];

  const defs = {
    detailEmailSubscriber: {
      auth: ['member', 'spv'],
      query: { _id: props && props._id },
    },
    getEmailSubscriber: {
      query: { _id: props && props._id },
      fields: {
        owner: 0,
        createdBy: 0,
        createdAt: 0,
        updatedBy: 0,
        updatedAt: 0,
        histories: 0,
      },
    },
    listEmailSubscriberDraft: {
      auth: ['member', 'spv'],
      query: { status: { $in: ['Draft', 'Queue'] } },
      queryOr: queryOr(props),
    },
    listEmailSubscriberCurrent: {
      auth: ['member', 'spv'],
      query: { status: 'Active' },
      queryOr: queryOr(props),
    },
    listEmailSubscriberHistory: {
      auth: ['spv'],
      query: { status: 'Closed' },
      queryOr: queryOr(props),
    },
    listEmailSubscriberProcessing: {
      auth: ['spv'],
      query: { status: 'Processing' },
      queryOr: queryOr(props),
    },
    addEmailSubscriber: {
      // auth: ['member', 'spv'],
    },
    updateEmailSubscriber: {
      auth: ['user', 'member', 'spv'],
    },
    removeEmailSubscriber: {
      auth: ['member', 'spv'],
    },
    setEmailSubscriberStatusToDraft: {
      auth: ['spv'],
    },
    setEmailSubscriberStatusToActive: {
      auth: ['member', 'spv'],
    },
    setEmailSubscriberStatusToClosed: {
      auth: ['spv'],
    },
  };
  if (defs[publishName]) return defs[publishName];

  throw new Error(`JSON defs for ${publishName} not found`);
};

export default getEmailSubscriberJSONdefs;
