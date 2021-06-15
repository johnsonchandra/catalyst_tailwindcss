import { Meteor } from 'meteor/meteor';

const getUserAsParty = (_id) => {
  const user = Meteor.users.findOne(_id);
  if (!user) throw new Error('User not found!!!');
  return {
    name: user.profile.fullname,
    shortname: user.profile.shortname,
    type: 'Member',
  };
};

export default getUserAsParty;
