import React from 'react';
import { Box, Heading, Text, Image, Skeleton, Flex, Stack } from '@chakra-ui/react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

function About() {
  const { ref: textRef1, inView: textInView1 } = useInView({ triggerOnce: true });
  const { ref: textRef2, inView: textInView2 } = useInView({ triggerOnce: true });

  const { ref: imageRef1, inView: imageInView1 } = useInView({ triggerOnce: true });
  const { ref: imageRef2, inView: imageInView2 } = useInView({ triggerOnce: true });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const { t } = useTranslation();
  return (
    <>
      <Header
        position='fixed'
        top='0'
        left='0'
        width='100%'
        zIndex='1000'
        bg='gray.800' 
        color='white'
        p='4'
      />

      <Box id='about' p={5} maxW='container.lg' mx='auto'>
        <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>
          {t('about.aboutUs.aboutUs')}
        </Heading>
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }}>
          <motion.div
            ref={textRef1}
            initial='hidden'
            animate={textInView1 ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            <Stack mt='5' mr='5' mb='5' ml='5' textAlign='justify'>
              <Text mb='5'>{t('about.aboutUs.about_us_part1')}</Text>
              <Text mb='5'>{t('about.aboutUs.about_us_part2')}</Text>
              <Text mb='5'>{t('about.aboutUs.about_us_part3')}</Text>
            </Stack>
          </motion.div>
          <motion.div
            ref={imageRef1}
            initial='hidden'
            animate={imageInView1 ? 'visible' : 'hidden'}
            variants={imageVariants}
            transition={{ duration: 1 }}
          >
            <Image
              src='../images/gabinet.png'
              alt='Gabinet'
              fallback={<Skeleton />}
              maxH='500px'
              minW={{ base: '250px', sm: '300px', md: '350px' }}
              objectFit='cover'
              flex='2'
              height='100%'
              width='100%'
              boxShadow='xl'
            />
          </motion.div>
        </Flex>
        <Heading as='h2' size='xl' mb='5' mt='55' ml='5'>
          {t('about.team.team')}
        </Heading>
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }}>
          <motion.div
            ref={textRef2}
            initial='hidden'
            animate={textInView2 ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            <Stack mt='5' mr='5' mb='5' ml='5' textAlign='justify'>
              <Text mb='5' fontSize='xl' fontWeight='bold'>
                {t('about.team.ownerName')}
              </Text>
              <Text mb='5' fontWeight='bold'>
                {t('about.team.ownerTitle')}
              </Text>
              <Text mb='5'>{t('about.team.ownerDescription')}</Text>
            </Stack>
          </motion.div>
          <motion.div
            ref={imageRef2}
            initial='hidden'
            animate={imageInView2 ? 'visible' : 'hidden'}
            variants={imageVariants}
            transition={{ duration: 2 }}
          >
            <Image
              src='../images/Jana-właścicielka.png'
              alt='Jana'
              fallback={<Skeleton />}
              maxH='500px'
              minW={{ base: '250px', sm: '300px', md: '350px' }}
              objectFit='cover'
              flex='2'
              height='100%'
              width='100%'
              boxShadow='xl'
            />
          </motion.div>
        </Flex>
      </Box>
    </>
  );
}

export default About;
