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
        <Stack direction={{ base:'column', md: 'row' }} spacing={{ base: '10', md: '10' }}>
        <Image  
              src={article.image} alt={article.title} my={5} maxW={{md:'300px'}}  rounded='lg' shadow='lg' />
        <Text>{article.content}</Text>
        
          </Stack>
        </Box>
      
    </>
  );
};

export default Article;
