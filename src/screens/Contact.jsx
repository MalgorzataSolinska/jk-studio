import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Header from '../components/Header';
import { Box, Heading, Image, Skeleton } from '@chakra-ui/react';
import ContactInformation from '../components/ContactInformation';

import { Link } from '@chakra-ui/react';

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <Header />
      <Box id='contact' p={5}>
        <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>
        Kontakt
        </Heading>
      </Box>
      <ContactInformation  />

      <Box p={{ base: '10', md: '10' }}>
        <Link
          href='https://www.google.com/maps/place/JK+Studio/@50.0914824,19.942152,18z/data=!4m6!3m5!1s0x47165b6b8d9ee493:0xc5f1d1535048859!8m2!3d50.0917405!4d19.9432034!16s%2Fg%2F11w2wdy_4m?entry=ttu'
          target='_blank'
        >
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                borderRadius='md'
                src='../images/map.png'
                alt='Mapa'
                fallback={<Skeleton />}
                objectFit='cover'
                maxH={{ base: 'auto', md: '700' }}
                width='100%'
              />
            </motion.div>
          </div>
        </Link>
      </Box>
    </>
  );
}

export default Contact;
