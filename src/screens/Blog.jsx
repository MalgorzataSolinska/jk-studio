// src/pages/Blog.js
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';
import { useTranslation } from 'react-i18next';

function Blog() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Box id='blog' p={5} maxW='container.lg' mx='auto'>
        <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>
        {t('blog.blog')}
        </Heading>
        <ArticleList />
      </Box>
    </>
  );
}

export default Blog;
