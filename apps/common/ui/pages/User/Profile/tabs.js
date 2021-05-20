const tabsSelf = [
  { _id: 1, name: 'Profile', linkUrl: '/profile' },
  { _id: 2, name: 'Roles', linkUrl: '/roles' },
];

const tabs = (userId) => [
  { _id: 1, name: 'Profile', linkUrl: `/User/${userId}` },
  { _id: 2, name: 'Roles', linkUrl: `/User/${userId}/Roles` },
];

export default (userId) => (userId ? tabs(userId) : tabsSelf);
