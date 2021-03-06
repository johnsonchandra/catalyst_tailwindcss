const getDocumentJSONdefs = (publishName, props) => {
  const queryOr = (options) => [
    { _id: options && options.search },
    { name: options && options.search },
    { nr: options && options.search },
  ];

  const defs = {
    detailDocument: {
      auth: ['member', 'spv'],
      query: { _id: props && props._id },
    },
    getDocument: {
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
    listDocumentDraft: {
      auth: ['member', 'spv'],
      query: { status: { $in: ['Draft', 'Queue'] } },
      queryOr: queryOr(props),
    },
    listDocumentCurrent: {
      auth: ['member', 'spv'],
      query: { status: 'Active' },
      queryOr: queryOr(props),
    },
    listDocumentHistory: {
      auth: ['spv'],
      query: { status: 'Closed' },
      queryOr: queryOr(props),
    },
    listDocumentProcessing: {
      auth: ['spv'],
      query: { status: 'Processing' },
      queryOr: queryOr(props),
    },
    addDocument: {
      auth: ['member', 'spv'],
    },
    updateDocument: {
      auth: ['member', 'spv'],
    },
    removeDocument: {
      auth: ['member', 'spv'], // only Draft can be removed so member right here is ok
    },
    setDocumentStatusToDraft: {
      auth: ['spv'],
    },
    setDocumentStatusToActive: {
      auth: ['spv'],
    },
    setDocumentStatusToClosed: {
      auth: ['spv'],
    },
  };
  if (defs[publishName]) return defs[publishName];

  throw new Error(`JSON defs for ${publishName} not found`);
};

export default getDocumentJSONdefs;
