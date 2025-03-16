import React from 'react';
import { Flex, Box, Text, Button, Image, Skeleton, Stack, Heading } from '@chakra-ui/react';
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
            bg='white'
            mx={{ base: '6', md: '6', lg: '0' }}
            px={{ base: '6', md: '6', lg: '0' }}
            py={{ base: '6', md: '6', lg: '12' }}
            boxShadow={{base:'xl', lg:'xl'}}
            rounded='lg'transition="all 0.2s ease-in-out" 
          >
            <Stack spacing={{ base: '8', lg: '10' }}>
              <Stack spacing={{ base: '2', lg: '6' }}>
                <Heading fontWeight='normal' textAlign='center' fontFamily='Savoye' fontSize={{ base: 30, md: 40, xl: 50 }}>
                  {t('home.title')}
                </Heading>
                <Text textAlign='center' fontSize={{base:'sm', md:'md'}}>
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
                      _hover={{ bg: "#e1d8ec", transform:'scale(1.02)'}}  
                      bg='#f0ecf5'
                      size='lg'
                      rounded='lg'
                      boxShadow='xl'
                      fontSize='md'
                      minW='300'
                      mt={{ base: '3', lg: '5' }}
                      transition="all 0.2s ease-in-out" 
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
                      _hover={{ bg: "#e1d8ec" , transform:'scale(1.02)'}}   
                      bg='#f0ecf5'
                      size='lg'
                      rounded='lg'
                      boxShadow='xl'
                      fontSize='md'
                      minW='300'
                      mt={{ base: '5', lg: '7' }}
                      transition="all 0.2s ease-in-out" 
                    >
                      {t('home.reservationButton')}
                    </Button>
                  </motion.div>
                </Flex>
              </Stack>
            </Stack>
          </Box>
          <Flex flex='1' overflow='hidden' shadow={{lg:'xl'}} rounded={{lg:'lg'}} >
            <Image
              src='../images/pastacukrowa.png'
              alt='Pasta Cukrowa'
              fallback={<Skeleton />}
              maxH={{base: '460px', sm: '350px', md: '460px'}}
              minW='300px'
              objectFit='cover'
              flex='1'
            />
            <Image
              display={{ base: 'none', sm: 'initial' }}
              src='../images/depilacja.png'
              alt='Depilacja'
              fallback={<Skeleton />}
              maxH={{base: '460px', sm: '350px',md: '460px'}}
              objectFit='cover'
            />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
