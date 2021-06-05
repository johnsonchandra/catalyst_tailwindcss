import sanitizeHtml from 'sanitize-html';

import EmailSubscriber from '../../index';

import cleanseDocDiff from '../../../../../helpers/cleanseDocDiff';
import entityUpdate from '../../../../../helpers/server/entityUpdate';

const editEmailSubscriber = (args, emailSubscriber, party) => {
  if (emailSubscriber.status === 'Processing')
    throw new Error('EmailSubscriber is in other process. Please wait and repeat');

  if (!(emailSubscriber.status === 'Draft' || emailSubscriber.status === 'Queue'))
    throw new Error(`EmailSubscriber status: ${emailSubscriber.status} cannot be edited anymore`);

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    EmailSubscriber,
    { _id: emailSubscriber._id },
    {
      status: 'Processing',
    },
    'Processing editEmailSubscriber',
    party,
  );

  // eslint-disable-next-line no-param-reassign
  if (args.email) args.email = args.email.toLowerCase();

  const newDoc = cleanseDocDiff(args, emailSubscriber);
  newDoc.description = newDoc.description ? sanitizeHtml(newDoc.description) : newDoc.description;
  newDoc.status = emailSubscriber.status;

  entityUpdate(
    EmailSubscriber,
    { _id: emailSubscriber._id },
    newDoc,
    `EmailSubscriber updated, status back to ${emailSubscriber.status}`,
    party,
  );
  return EmailSubscriber.findOne(args._id);
};

export default editEmailSubscriber;
