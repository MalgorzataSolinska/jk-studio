// src/components/Article.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Image, Stack } from '@chakra-ui/react';
import Articles from '../data/articlesData';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';

const Article = () => {
  const articles = Articles();
  const { id } = useParams();
  const article = articles.find((article) => article.id.toString() === id);
  const { t } = useTranslation();

  if (!article) {
    return <Text>{t('blog.article')}</Text>;
  }

  return (
    <>
    <Header />
    <Box p={5}>
      <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>{article.title}</Heading>
      <Text mt={2} ml='5'>{article.date}</Text>
      <Stack spacing={5}>
        <Box>
          <Image
            src={article.image}
            alt={article.title}
            my={5}
            maxH={{ base: '300px', md: '400px' }} // Set a max height for responsiveness
            objectFit='cover' // Maintain aspect ratio and cover the box
            rounded='lg'
            shadow='lg'
            width="100%" // Make the image take the full width of its container
          />
        </Box>
        <Text textAlign='justify'>
          {article.content}
        </Text>
      </Stack>
    </Box>
    </>
  );
};

export default Article;
