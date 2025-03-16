// src/components/ArticleList.js
import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Link, Flex, Divider } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Articles from '../data/articlesData';
import { motion } from 'framer-motion';
const MotionBox = motion(Box);

const ArticleList = () => {
  const articles = Articles();
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={3} >
        {articles
          .slice()
          .reverse()
          .map((article) => (
            <MotionBox
              as={RouterLink}
              to={`/article/${article.id}`}
              key={article.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition='all 0.2s ease-in-out'
              p='2'
              spacing='5px'
              shadow='lg'
              position='relative'
              cursor='pointer'
              maxW='400px'
              h='fit-content'
            >
              <Flex>
                <Box>
                  <Link pt='1' cursor='pointer'>
                    <Image src={article.image}  shadow='lg' alt={article.title} alignSelf='center' />
                  </Link>
                </Box>
              </Flex>
              <Heading mt='10' fontSize='xl' textAlign='center'>
                {article.title}
              </Heading>
              <Divider mt='5'></Divider>
              <Text fontSize='small' textAlign='center'>
                {article.date}
              </Text>
            </MotionBox>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default ArticleList;
