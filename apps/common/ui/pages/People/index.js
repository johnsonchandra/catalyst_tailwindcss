/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PageWrapper from '../PageWrapper';
import CardListSmallAvatar from '../../components/CardListSmallAvatar';

const avatars = [
  {
    _id: 1,
    name: 'Agus Kadir',
    role: 'Full Stack Developer',
    imgUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkUrl: '/people/profile',
  },
  {
    _id: 2,
    name: 'Susi Widyastuti',
    role: 'UI/UX',
    imgUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkUrl: '/people/profile',
  },
  {
    _id: 3,
    name: 'Seno Bayu Mas',
    role: 'Project Manager',
    imgUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkUrl: '/people/profile',
  },
  {
    _id: 4,
    name: 'Seno Bayu Mas',
    role: 'Infrastructure Engineer',
    imgUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkUrl: '/people/profile',
  },
  {
    _id: 5,
    name: 'Seno Bayu Mas',
    role: 'Tukang Panjat Tiang',
    imgUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkUrl: '/people/profile',
  },
  {
    _id: 6,
    name: 'Seno Bayu Mas',
    role: 'Position E',
    imgUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkUrl: '/people/profile',
  },
  {
    _id: 7,
    name: 'Seno Bayu Mas',
    role: 'Position F',
    imgUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkUrl: '/people/profile',
  },
  {
    _id: 8,
    name: 'Seno Bayu Mas',
    role: 'Position G',
    imgUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkUrl: '/people/profile',
  },
  {
    _id: 9,
    name: 'Seno Bayu Mas',
    role: 'Position H',
    imgUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkUrl: '/people/profile',
  },
];

export default function PeoplePage(props) {
  return (
    <PageWrapper caption="People" description="Meet our Team" {...props}>
      <CardListSmallAvatar docs={avatars} caption="People" description="adfadf lorem ipsum" />
    </PageWrapper>
  );
}
