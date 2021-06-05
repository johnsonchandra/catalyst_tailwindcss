import { DocumentIcon, ArchiveIcon } from '@heroicons/react/outline';

const navigations = [
  {
    _id: 31,
    sequenceNr: 31,
    name: 'Document',
    linkUrl: '/Document/List/Current',
    icon: DocumentIcon,
  },
  {
    _id: 32,
    sequenceNr: 33,
    name: 'EmailSubscriber',
    linkUrl: '/EmailSubscriber/List/Current',
    icon: ArchiveIcon,
  },
];

export default navigations;
