import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import Header from '../components/Header'

function Gallery() {
  return (
    <>
    <Header/>
    <Box id="gallery" p={5}>
      <Heading as="h2" size="xl" mb={4}>
        Galeria
      </Heading>
      <Image src="images/salon1.jpg" alt="Salon" />
    </Box>
    </>
  );
}

export default Gallery;