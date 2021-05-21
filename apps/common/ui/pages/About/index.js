/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PageWrapper from '../PageWrapper';
import CardListWithVerticalImage from '../../components/CardListWithVerticalImage';

const docs = [
  {
    _id: 1,
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imgUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    description:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    linkUrl: '/people/profile',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    _id: 2,
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imgUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=dYiZvcaBWW&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    description:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    linkUrl: '/people/profile',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    _id: 3,
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imgUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=dYiZvcaBWW&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    description:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    linkUrl: '/people/profile',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    _id: 4,
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imgUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=dYiZvcaBWW&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    description:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    linkUrl: '/people/profile',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    _id: 5,
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imgUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=dYiZvcaBWW&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    description:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    linkUrl: '/people/profile',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
];

export default function AboutPage(props) {
  return (
    <PageWrapper caption="About Us" description="lorem ipsum" {...props}>
      <CardListWithVerticalImage docs={docs} caption="About Us" description="lorem ipsum" />
    </PageWrapper>
  );
}
