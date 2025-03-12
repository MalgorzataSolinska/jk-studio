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

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    // Funkcja nasłuchująca przewijania strony
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollToTop(true); // Pokazuje strzałkę po przewinięciu jednej wysokości okna
      } else {
        setShowScrollToTop(false); // Ukrywa strzałkę, jeśli jesteśmy na górze
      }
    };

    // Dodanie nasłuchiwania na scroll
    window.addEventListener('scroll', handleScroll);

    // Usunięcie nasłuchiwacza po zakończeniu działania komponentu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!article?.video) return;

    // Jeśli jest wideo, odtwarzaj je od razu
    if (videoRef.current) {
      videoRef.current.play();

      // Dodaj nasłuchiwanie na zakończenie wideo
      videoRef.current.addEventListener('ended', () => {
        // Po zakończeniu wideo, ustawiamy je na początek
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

        {/* Jeśli artykuł ma wideo, pokazujemy je, w przeciwnym razie obrazek */}
        {article.video ? (
          <Box
            position='relative'
            maxH={{ base: '300px', md: '400px' }}
            display='flex'
            alignItems='center'
            justifyContent='center'
            overflow='hidden'
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
              loop // Zapętlenie wideo
            />
          </Box>
        ) : (
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
        )}

        <Stack spacing={5}>
          <Text textAlign='justify' fontSize='md' lineHeight='1.8' color='gray.800'>
            {article.content}
          </Text>
        </Stack>

        {/* Dodanie strzałki widocznej po przewinięciu */}
        {showScrollToTop && (
          <Icon
            as={MdArrowUpward}
            onClick={scrollToTop}
            boxSize='6'
            variant='ghost'
            fontSize={{ base: 'large', md: 'x-large' }}
            rounded='lg'
            colorScheme='gray.800'
            position='fixed'
            bottom={4}
            left={4}
            zIndex={10}
            _hover={{
              transform: 'scale(1.2)',
              color: 'gray.700',
            }}
          />
        )}
      </Box>
    </>
  );
};

export default Article;
