const tabsAll = [
  { _id: 1, name: 'Draft', linkUrl: '/Document/List/Draft' },
  { _id: 2, name: 'Current', linkUrl: '/Document/List/Current' },
];

const tabsSpv = [
  { _id: 1, name: 'Draft', linkUrl: '/Document/List/Draft' },
  { _id: 2, name: 'Current', linkUrl: '/Document/List/Current' },
  { _id: 3, name: 'History', linkUrl: '/Document/List/History' },
];

const tabs = (roles) =>
  roles.indexOf('spv') > -1 || roles.indexOf('admin') > -1 ? tabsSpv : tabsAll;

export default tabs;
