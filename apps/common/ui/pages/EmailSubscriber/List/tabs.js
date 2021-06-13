const tabsAll = [
  { _id: 1, name: 'Draft', linkUrl: '/EmailSubscriber/List/Draft' },
  { _id: 2, name: 'Current', linkUrl: '/EmailSubscriber/List/Current' },
];

const tabsSpv = [
  { _id: 1, name: 'Draft', linkUrl: '/EmailSubscriber/List/Draft' },
  { _id: 2, name: 'Current', linkUrl: '/EmailSubscriber/List/Current' },
  { _id: 3, name: 'History', linkUrl: '/EmailSubscriber/List/History' },
];

const tabs = (roles) =>
  roles.indexOf('spv') > -1 || roles.indexOf('admin') > -1 ? tabsSpv : tabsAll;

export default tabs;
