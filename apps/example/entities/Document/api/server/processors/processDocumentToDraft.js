import Document from '../../index';

import entityUpdate from '../../../../../../common/helpers/server/entityUpdate';

const processDocumentToClosed = (document, party) => {
  if (document.status === 'Processing')
    throw new Error('Document is in other process. Please wait and repeat');

  if (document.status !== 'Active')
    throw new Error(`Document status: ${document.status} may not be set to Draft`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Document,
    { _id: document._id },
    {
      status: 'Processing',
    },
    'Processing processDocumentToDraft',
    party,
    timestamp,
  );

  timestamp = new Date();

  // add additional steps here if necessary

  entityUpdate(
    Document,
    { _id: document._id },
    {
      status: 'Draft',
    },
    'Set Document Status to Draft',
    party,
    timestamp,
  );

  return Document.findOne(document._id);
};

export default processDocumentToClosed;
