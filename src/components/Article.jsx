// src/components/Article.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import articles from '../data/articlesData';
import Header from '../components/Header';

const Article = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id.toString() === id);

  if (!article) {
    return <Text>Artykuł nie znaleziony</Text>;
  }

  return (
    <>
      <Header />
      <Box p={5}>
        <Heading as='h1'>{article.title}</Heading>
        <Text mt={2}>{article.date}</Text>
        <Image src={article.image} alt={article.title} my={5} rounded='lg' shadow='lg' />
        <Text>{article.content}</Text>
      </Box>
    </>
  );
};

export default Article;
