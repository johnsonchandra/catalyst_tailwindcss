import React from 'react';

import {
  RefreshIcon,
  ShieldCheckIcon,
  ScaleIcon,
  UsersIcon,
  GlobeIcon,
  SunIcon,
} from '@heroicons/react/outline';
import NavbarWithImageBackground from '../../components/NavbarWithImageBackground';
import Footer from '../../components/Footer';
import NewsletterForm from '../../components/NewsletterForm';

import navigations from './navigations';
import FAQListWithOffset from '../../components/FAQListWithOffset';
import TestimonialWithImage from '../../components/TestimonialWithImage';
import CardListWithSmallIcon from '../../components/CardListWithSmallIcon';
import HeroWithQuoteAndStats from '../../components/HeroWithQuoteAndStats';

export default function HomePublic() {
  window.scrollTo({ top: 0 });

  const stats = [
    { _id: 1, label: 'Founded', value: '2017' },
    { _id: 2, label: 'Employees', value: '8' },
    { _id: 3, label: 'Clients', value: '5' },
    { _id: 4, label: 'Raised', value: '$77B' },
  ];

  const features = [
    {
      _id: 1,
      name: 'Feature 1',
      description: 'Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: GlobeIcon,
    },
    {
      _id: 2,
      name: 'Feature 2',
      description: 'Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: ScaleIcon,
    },
    {
      _id: 3,
      name: 'Feature 3',
      description: 'Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: UsersIcon,
    },
    {
      _id: 4,
      name: 'Feature 4',
      description: 'Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: ShieldCheckIcon,
    },
    {
      _id: 5,
      name: 'Feature 5',
      description: '“Yuhuuu.” Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: RefreshIcon,
    },
    {
      _id: 6,
      name: 'Feature 6',
      description: 'Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: SunIcon,
    },
  ];

  const faqs = [
    {
      _id: 1,
      question: 'How do you boil water?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      _id: 2,
      question: 'Why do you need water?',
      answer:
        'You boil it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      _id: 3,
      question: 'Can you grow water?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
  ];

  return (
    <NavbarWithImageBackground
      navigations={navigations}
      logoUrl="/mkcb_logo_with_name.png"
      logoUrlPopUp="/mkcb_logo_with_name.png"
      caption="Catalyst Engine"
      description="Now with Tailwindcss"
    >
      <HeroWithQuoteAndStats
        stats={stats}
        quote="hallo asdfsdff"
        caption="We empower You"
        name="Ikhwan Saputra"
        content="asdfasdf asdfasdf asdfasdf asdfasdf asdf"
        synopsis="hjsadf kajhsdf kasj df"
      />
      <CardListWithSmallIcon
        docs={features}
        subtitle="Develop Faster"
        title="Boilerplate to speed up your development"
        description="lorem ipsum"
      />
      <TestimonialWithImage />
      <FAQListWithOffset docs={faqs} linkUrl="mailto:info@mayacatalyst.com" />
      <NewsletterForm />
      <Footer />
    </NavbarWithImageBackground>
  );
}
