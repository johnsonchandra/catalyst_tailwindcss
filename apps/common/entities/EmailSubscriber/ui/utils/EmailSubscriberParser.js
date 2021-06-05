import parseDocs from '../../../../helpers/parseDocs';
import { iso } from '../../../../helpers/dates';

const EmailSubscriberParser = (docs, settings) => {
  return parseDocs(docs, [
    { from: '_id', to: '_id' },
    { from: 'name', to: 'name' },
    { from: 'email', to: 'email' },
    { from: 'type', to: 'type' },
    { from: 'status', to: 'status' },
    {
      from: (doc) => doc.updatedAt && iso(doc.updatedAt, settings.timezone, 'LLLL'),
      to: 'updatedAt',
    },
    {
      from: (doc) => `/EmailSubscriber/${doc._id}`,
      to: 'linkUrl',
    },
  ]);
};

export default EmailSubscriberParser;
