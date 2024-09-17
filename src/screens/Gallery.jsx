import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import Header from '../components/Header';
import PictureContainer from '../components/PictureContainer';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { useState } from 'react';


const images = [
  { src: '/jk-studio/images/Jana-kosmetyki.png', category: 'kosmetyki' },
  { src: '/jk-studio/images/pastacukrowa.png', category: 'kosmetyki' },
  { src: '/jk-studio/images/pasta-cukrowa.png', category: 'kosmetyki' },
  { src: '/jk-studio/images/kosmetyki.png', category: 'kosmetyki' },
  { src: '/jk-studio/images/pastacukrowa2.png', category: 'kosmetyki' },
  { src: '/jk-studio/images/pasta.cukrowa.png', category: 'kosmetyki' },
  { src: '/jk-studio/images/kosmetyki2.png', category: 'kosmetyki' },
  { src: '/jk-studio/images/gabinet.png', category: 'kosmetyki' },
  { src: '/jk-studio/images/depilacja.png', category: 'depilacja' },
  { src: '/jk-studio/images/depilacja-Jana.png', category: 'depilacja' },
  { src: '/jk-studio/images/talk.png', category: 'depilacja' },
  { src: '/jk-studio/images/depilacja-reka.png', category: 'depilacja' },
  { src: '/jk-studio/images/rezultatydepilacji.png', category: 'depilacja' },
  { src: '/jk-studio/images/rezultatydepilacji2.png', category: 'depilacja' },
  { src: '/jk-studio/images/Jana-certyfikaty.png', category: 'depilacja' },
];

function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };
  // const kosmetykiImages = images.filter((image) => image.category === 'kosmetyki');
  // const depilacjaImages = images.filter((image) => image.category === 'depilacja');

  return (
    <>
      <Header />
      <Box id='gallery' p='5'>
        <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>
          Galeria
        </Heading>
        <Box p={5}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            {images.map((image, index) => (
              <PictureContainer key={index} src={image.src} onClick={() => openLightbox(index)} />
            ))}
          </SimpleGrid>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex].src}
              nextSrc={images[(photoIndex + 1) % images.length].src}
              prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            />
          )}
        </Box>
      </Box>
    </>
  );
}

export default Gallery;
