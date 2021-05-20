import React from 'react';

import NavbarWithImageBackground from '../../../../common/ui/components/NavbarWithImageBackground';
import CardListWithVerticalImage from '../../../../common/ui/components/CardListWithVerticalImage';
import CardListSmallAvatar from '../../../../common/ui/components/CardListSmallAvatar';

import navigations from '../Home/navigations';

const docs = [
  {
    _id: 1,
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imgUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    description:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
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
    twitterUrl: '#',
    linkedinUrl: '#',
  },
];

const avatars = [
  {
    _id: 1,
    name: 'Agus Kadir',
    role: 'Jubir Pokja Energi',
    imgUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    _id: 2,
    name: 'Susi Widyastuti',
    role: 'Jubir Pokja Outreach',
    imgUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    _id: 3,
    name: 'Seno Bayu Mas',
    role: 'Jubir Pokja A',
    imgUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    _id: 4,
    name: 'Seno Bayu Mas',
    role: 'Jubir Pokja C',
    imgUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    _id: 5,
    name: 'Seno Bayu Mas',
    role: 'Jubir Pokja D',
    imgUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    _id: 6,
    name: 'Seno Bayu Mas',
    role: 'Jubir Pokja E',
    imgUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    _id: 7,
    name: 'Seno Bayu Mas',
    role: 'Jubir Pokja F',
    imgUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    _id: 8,
    name: 'Seno Bayu Mas',
    role: 'Jubir Pokja G',
    imgUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    _id: 9,
    name: 'Seno Bayu Mas',
    role: 'Jubir Pokja H',
    imgUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
];

export default function AboutPage() {
  window.scrollTo({ top: 0 });

  return (
    <NavbarWithImageBackground
      navigations={navigations}
      caption="About Us"
      description="lorem ipsum"
    >
      <CardListWithVerticalImage docs={docs} caption="About Us" description="lorem ipsum" />
      <CardListSmallAvatar docs={avatars} caption="People" description="adfadf lorem ipsum" />
    </NavbarWithImageBackground>
  );
}
