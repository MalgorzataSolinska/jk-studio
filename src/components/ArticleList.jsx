// src/components/ArticleList.js
import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Link, Flex, Divider } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import articles from '../data/articlesData';
import { motion } from 'framer-motion';
const MotionBox = motion(Box);

const ArticleList = () => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
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
              p='5'
              spacing='5px'
              borderWidth='1px'
              rounded='lg'
              shadow='lg'
              position='relative'
              cursor='pointer'
              w='fit-content'
              h='fit-content'
            >
              <Flex>
                <Box>
                  <Link pt='1' cursor='pointer'>
                    <Image src={article.image} alt={article.title} alignSelf='center' />
                  </Link>
                </Box>
              </Flex>
              <Heading mt='10' fontSize='xl' textAlign='center' >
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
