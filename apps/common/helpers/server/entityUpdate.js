import UserLog from '../../entities/UserLog/api';

const entityUpdate = (Entity, condition, doc, description, party, now, options, push) => {
  const timestamp = now || new Date();

  UserLog.insert({
    userId: party._id,
    condition: JSON.stringify(condition),
    doc: JSON.stringify(doc),
    description,
    timestamp,
    type: 'entityUpdate',
  });

  return Entity.update(
    condition,
    {
      $set: {
        ...doc,
        updatedBy: party.name,
        updatedAt: timestamp,
      },
      $push: {
        histories: {
          party,
          timestamp,
          doc: JSON.stringify(doc),
          description,
        },
        ...push,
      },
    },
    options,
  );
};

export default entityUpdate;
