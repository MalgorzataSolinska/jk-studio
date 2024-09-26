import React from 'react';
import { Flex, Box, Text, Button, Image, Skeleton, Stack, Heading, useColorModeValue } from '@chakra-ui/react';
import HomeHeader from '../components/HomeHeader';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

function Home() {
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  const { ref: button, inView: buttonInView } = useInView({ triggerOnce: true });
  const { t } = useTranslation();
  return (
    <>
      <HomeHeader />

      <Box maxW='8xl' mx='auto' px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
        <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
          <Box
            width={{ lg: 'sm' }}
            transform={{ base: 'translateY(-50%)', lg: 'none' }}
            bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
            mx={{ base: '6', md: '6', lg: '0' }}
            px={{ base: '6', md: '6', lg: '0' }}
            py={{ base: '6', md: '6', lg: '12' }}
          >
            <Stack spacing={{ base: '8', lg: '10' }}>
              <Stack spacing={{ base: '2', lg: '6' }}>
                <Heading fontWeight='normal' textAlign='center' fontFamily='Savoye' fontSize='40'>
                  {t('home.title')}
                </Heading>
                <Text textAlign='center' fontSize='md'>
                  {' '}
                  {t('home.description')}{' '}
                </Text>

                <Flex direction='column' align='center'>
                  <motion.div
                    ref={button}
                    variants={buttonVariants}
                    initial='hidden'
                    animate={buttonInView ? 'visible' : 'hidden'}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  >
                    <Button
                      as={RouterLink}
                      to='/about'
                      bg='#B49CCC'
                      size='lg'
                      fontSize='md'
                      minW='300'
                      mt={{ base: '3', lg: '5' }}
                    >
                      {t('home.knowMoreButton')}
                    </Button>
                  </motion.div>
                  <motion.div
                    ref={button}
                    variants={buttonVariants}
                    initial='hidden'
                    animate={buttonInView ? 'visible' : 'hidden'}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  >
                    <Button
                      as={RouterLink}
                      to='https://booksy.com/pl-pl/242997_jk-studio_depilacja_8820_krakow#ba_s=sr_1'
                      target='_blank'
                      bg='#B49CCC'
                      size='lg'
                      fontSize='md'
                      minW='300'
                      mt={{ base: '5', lg: '7' }}
                    >
                      {t('home.reservationButton')}
                    </Button>
                  </motion.div>
                </Flex>
              </Stack>
            </Stack>
          </Box>
          <Flex flex='1' overflow='hidden'>
            <Image
              src='../images/pastacukrowa.png'
              alt='Pasta Cukrowa'
              fallback={<Skeleton />}
              maxH='450px'
              minW='300px'
              objectFit='cover'
              flex='1'
            />
            <Image
              display={{ base: 'none', sm: 'initial' }}
              src='../images/depilacja.png'
              alt='Depilacja'
              fallback={<Skeleton />}
              maxH='450px'
              objectFit='cover'
            />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
