import parseDocs from '../../../../helpers/parseDocs';
import { iso } from '../../../../helpers/dates';

const TenantParser = (docs, settings) => {
  return parseDocs(docs, [
    { from: '_id', to: '_id' },
    { from: 'host', to: 'host' },
    { from: 'name', to: 'name' },
    { from: 'type', to: 'type' },
    { from: 'status', to: 'status' },
    {
      from: (doc) => doc.updatedAt && iso(doc.updatedAt, settings.timezone, 'LLLL'),
      to: 'Updated At',
    },
    {
      from: (doc) => `/Root/Tenant/${doc._id}${doc.status === 'Draft' ? '/edit' : ''}`,
      to: 'linkUrl',
    },
  ]);
};

export default TenantParser;
