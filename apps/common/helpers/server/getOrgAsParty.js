import Org from '../../entities/Org/api';

const getOrgAsParty = (_id) => {
  const org = Org.findOne(_id);
  if (!org) throw new Error('Org not found!!!');
  return {
    name: org.name,
    shortname: org.shortname,
    logoUrl: org.logoUrl,
    type: 'Org',
  };
};

export default getOrgAsParty;
