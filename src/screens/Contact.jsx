import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import { Box, Heading, Image, Skeleton, Link } from '@chakra-ui/react';
import ContactInformation from '../components/ContactInformation';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inView]);
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Box id='contact' p={5}>
        <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>
          {t('contact.contact')}
        </Heading>
      </Box>
      <Box ml='5' mt='5' mr='5'>
        <ContactInformation />
      </Box>
      <Box p={{ base: '10', md: '10' }} position='relative'>
        <Link
          href='https://www.google.com/maps/place/JK+Studio/@50.0914824,19.942152,18z/data=!4m6!3m5!1s0x47165b6b8d9ee493:0xc5f1d1535048859!8m2!3d50.0917405!4d19.9432034!16s%2Fg%2F11w2wdy_4m?entry=ttu'
          target='_blank'
        >
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
            >
              <Image
                borderRadius='md'
                _hover={{ transform: "scale(1.02)" }}
                transition="all 0.2s ease-in-out"
                src='../images/mapa.png'
                alt='Mapa'
                fallback={<Skeleton />}
                objectFit='cover'
                maxH={{ base: 'auto', md: '700' }}
                width={{ md: '100%', lg: '80%' }}
                boxShadow='xl'
                rounded='20'
              />
            </motion.div>
            {showText && (
              <Box position='absolute' top='50px' left='50px' bg='white' p={2} borderRadius='md' boxShadow='lg' rounded='20'>
                {t('contact.open_map')}
              </Box>
            )}
          </div>
        </Link>
      </Box>
    </>
  );
}

export default Contact;
