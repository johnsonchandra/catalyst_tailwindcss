import EmailSubscriber from '../..';

import entityInsert from '../../../../../helpers/server/entityInsert';

const createEmailSubscriber = (args, party, tenant) => {
  const { email, ...rest } = args;
  const parsedEmail = email.toLowerCase();

  const emailSubscriber = EmailSubscriber.findOne({ email: parsedEmail });
  if (emailSubscriber) throw new Error('Email already registered!');

  const now = new Date();

  const newDoc = {
    email: parsedEmail,
    ...rest,
    type: 'Person',
    status: 'Draft',
  };

  const _id = entityInsert(
    EmailSubscriber,
    newDoc,
    'Create new EmailSubscriber',
    party,
    tenant.owner,
    now,
  );

  return { _id };
};

export default createEmailSubscriber;
