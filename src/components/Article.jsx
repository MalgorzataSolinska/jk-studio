import React, { useRef, useState, useEffect } from 'react';
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
  const videoRef = useRef(null);
  const footerRef = useRef(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerPosition = footerRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (window.scrollY > 0.5 * windowHeight && footerPosition > windowHeight) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!article?.video) return;
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.addEventListener('ended', () => {
        videoRef.current.currentTime = 1;
        videoRef.current.play();
      });
    }
  }, [article]);

  const handleGoBack = () => {
    navigate('/blog');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!article) {
    return <Text>{t('blog.article')}</Text>;
  }

  return (
    <>
      <Header />
      <Box p={5} maxW='container.lg' mx='auto'>
        {/* Przycisk powrotu */}
        <Button
          leftIcon={<Icon as={MdArrowBack} />}
          onClick={handleGoBack}
          boxSize='10'
          variant='ghost'
          fontSize={{ base: 'x-large', md: 'x-large' }}
          rounded='lg'
          position="absolute"
          colorScheme='gray.800'
          mb='3'
          left={{base:'2', sm:'2', md: '5'}}
          _hover={{ transform: 'scale(1.2)', color: 'gray.700' }}
        />

        {/* Tytuł artykułu */}
        <Heading as='h2' size='xl' mb='3' mt='5' textAlign='center'>
          {article.title}
        </Heading>

        {/* Data artykułu */}
        <Text fontSize='sm' color='gray.600' textAlign='center' mb={4}>
          {new Date(article.date).toLocaleDateString(i18n.language, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>

        {/* Multimedia: Wideo lub obrazek */}
        <Box maxW='container.lg' mx='auto' width='100%'>
          {article.video ? (
            <Box
              position='relative'
              maxH={{ base: '300px', md: '400px' }}
              display='flex'
              alignItems='center'
              justifyContent='center'
              overflow='hidden'
              width='100%'
            >
              <video
                ref={videoRef}
                src={article.video}
                width='100%'
                height='100%'
                style={{ objectFit: 'cover' }}
                playsInline
                muted
                autoPlay
                loop
              />
            </Box>
          ) : (
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
          )}
        </Box>

        {/* Treść artykułu */}
        <Stack spacing={5} maxW='container.lg' mx='auto' width='100%'>
          <Text textAlign='justify' fontSize='md' lineHeight='1.8' color='gray.800'>
            {article.content}
          </Text>
        </Stack>

    
        <button ref={footerRef} bg='gray.50' textAlign='center'>
          <Icon
          
            boxSize='6'
            as={MdArrowUpward}
            onClick={scrollToTop}
            left={{base:'2', sm:'2', md: '5'}}
            _hover={{ transform: 'scale(1.2)', color: 'gray.700' }}
            position="absolute"
          />
        </button>


        
        {showScrollToTop && (
          <Icon
            as={MdArrowUpward}
            onClick={scrollToTop}
            boxSize='6'
            variant='ghost'
            rounded='lg'
            colorScheme='gray.800'
            position='fixed'
            bottom='4'
            left={{base:'2', sm:'2', md: '5'}}
            zIndex={10}
            _hover={{ transform: 'scale(1.2)', color: 'gray.700' }}
          />
        )}
      </Box>
    </>
  );
};

export default Article;
