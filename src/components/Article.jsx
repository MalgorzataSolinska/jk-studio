import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Image, Stack, Button, Icon } from '@chakra-ui/react';
import Articles from '../data/articlesData';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import { MdArrowBack, MdArrowUpward } from 'react-icons/md';

const Article = () => {
  const articles = Articles();
  const { id } = useParams();
  const article = articles.find((article) => article.id.toString() === id);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  if (!article) {
    return <Text>{t('blog.article')}</Text>;
  }

  const handleGoBack = () => {
    navigate('/blog');
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Przewinięcie strony na górę
  };

  return (
    <>
      <Header />
      <Box p={5}>
        <Button
          leftIcon={<Icon as={MdArrowBack} />}
          onClick={handleGoBack}
          boxSize='6'
          variant='ghost'
          fontSize={{ base: 'large', md: 'x-large' }}
          rounded='lg'
          colorScheme='gray.800'
          mb='3'
          _hover={{
            transform: 'scale(1.2)',
            color: 'gray.700',
          }}
        ></Button>

        <Heading as='h2' size='xl' mb='3' mt='5' textAlign='center'>
          {article.title}
        </Heading>

        <Text fontSize='sm' color='gray.600' textAlign='center' mb={4}>
          {new Date(article.date).toLocaleDateString(i18n.language, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>

        <Stack spacing={5}>
          <Box align='center'>
            <Image
              src={article.image}
              alt={article.title}
              my={5}
              maxH={{ base: '300px', md: '400px' }}
              objectFit='cover'
              rounded='lg'
              shadow='lg'
              width='100%'
            />
          </Box>
          <Text textAlign='justify' fontSize='md' lineHeight='1.8' color='gray.800'>
            {article.content}
          </Text>
        </Stack>

        <Icon
          as={MdArrowUpward}
          onClick={scrollToTop}
          boxSize='6'
          variant='ghost'
          fontSize={{ base: 'medium', md: 'x-large' }}
          rounded='lg'
          colorScheme='gray.800'
          mb='3'
          _hover={{
            transform: 'scale(1.2)',
            color: 'gray.700',
          }}
        />
      </Box>
    </>
  );
};

export default Article;
