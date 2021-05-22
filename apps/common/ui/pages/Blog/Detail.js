/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PageWrapper from '../PageWrapper';
import BlogDetail2ColumnWithImage from '../../components/BlogDetail2ColumnWithImage';

export default function BlogDetailPage(props) {
  const contents = ['Paragraph 1', 'Paragraph 2'];
  return (
    <PageWrapper caption="People" description="Meet our Team" {...props}>
      <BlogDetail2ColumnWithImage
        title="Your Title"
        subtitle="Your Subtitle"
        synopsis="You can put your Synopsis here"
        contents={contents}
        imgUrl="/mkcb_logo_with_name.png"
      />
    </PageWrapper>
  );
}
