/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PageWrapper from '../PageWrapper';
import BlogDetail2ColumnWithImage from '../../components/BlogDetail2ColumnWithImage';

export default function BlogDetailPage(props) {
  return (
    <PageWrapper caption="People" description="Meet our Team" {...props}>
      <BlogDetail2ColumnWithImage />
    </PageWrapper>
  );
}
