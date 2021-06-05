import createIndex from '../../../../helpers/server/createIndex';
import EmailSubscriber from '..';

createIndex(EmailSubscriber, { email: 1, owner: 1 });
