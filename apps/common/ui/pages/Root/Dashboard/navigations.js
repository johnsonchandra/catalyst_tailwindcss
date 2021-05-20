import { UserIcon, FolderIcon, UsersIcon } from '@heroicons/react/outline';

const navigations = [
  {
    sequenceNr: 91,
    name: 'User All Tenant',
    linkUrl: '/Root/User/List/Current/All',
    icon: UserIcon,
  },
  {
    sequenceNr: 93,
    name: 'Org All Tenant',
    linkUrl: '/Root/Org/List/Current/All',
    icon: UsersIcon,
  },
  { sequenceNr: 94, name: 'Tenant', linkUrl: '/Root/Tenant/List/Current/All', icon: FolderIcon },
];

export default navigations;
