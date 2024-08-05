// src/pages/Blog.js
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';

function Blog() {
  return (
    <>
      <Header />
      <Box id='blog' p={5}>
        <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>
          Blog
        </Heading>
        <ArticleList />
      </Box>
    </>
  );
}

export default Blog;
