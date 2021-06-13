import { UserIcon, FolderIcon, UsersIcon } from '@heroicons/react/outline';

const navigations = [
  {
    _id: 91,
    sequenceNr: 91,
    name: 'User All Tenant',
    linkUrl: '/User/List/Online/All',
    icon: UserIcon,
  },
  {
    _id: 92,
    sequenceNr: 92,
    name: 'Org All Tenant',
    linkUrl: '/Org/List/Current/All',
    icon: UsersIcon,
  },
  {
    _id: 93,
    sequenceNr: 93,
    name: 'Tenant',
    linkUrl: '/Tenant/List/Current/All',
    icon: FolderIcon,
  },
];

export default navigations;
