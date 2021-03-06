import Document from '../../index';

import entityUpdate from '../../../../../../common/helpers/server/entityUpdate';

const processDocumentToActive = (document, party) => {
  if (document.status === 'Processing')
    throw new Error('Document is in other process. Please wait and repeat');

  if (!(document.status === 'Draft' || document.status === 'Queue' || document.status === 'Closed'))
    throw new Error(`Document status: ${document.status} may not be set to Active`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Document,
    { _id: document._id },
    {
      status: 'Processing',
    },
    'Processing processDocumentToActive',
    party,
    timestamp,
  );

  // add additional steps here if necessary

  timestamp = new Date();

  entityUpdate(
    Document,
    { _id: document._id },
    {
      status: 'Active',
    },
    'Set Document Status to Active',
    party,
    timestamp,
  );

  return Document.findOne(document._id);
};

export default processDocumentToActive;
