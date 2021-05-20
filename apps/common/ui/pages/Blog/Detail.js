import React from 'react';

import NavbarWithImageBackground from '../../components/NavbarWithImageBackground';
import Footer from '../../components/Footer';
import BlogDetail2ColumnWithImage from '../../components/BlogDetail2ColumnWithImage';

import navigations from '../Home/navigations';

export default function BlogDetailPage() {
  window.scrollTo({ top: 0 });

  return (
    <NavbarWithImageBackground
      logoUrl="/mkcb_logo_with_name.png"
      logoUrlPopUp="/mkcb_logo_with_name.png"
      navigations={navigations}
      caption="People"
      description="Meet our Team"
    >
      <BlogDetail2ColumnWithImage />
      <Footer />
    </NavbarWithImageBackground>
  );
}
