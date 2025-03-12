import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import Header from '../components/Header';
import PictureContainer from '../components/PictureContainer';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const images = [
  { src: '/images/Jana-kosmetyki.png', category: 'kosmetyki' },
  { src: '/images/pastacukrowa.png', category: 'kosmetyki' },
  { src: '/images/pasta-cukrowa.png', category: 'kosmetyki' },
  { src: '/images/kosmetyki.png', category: 'kosmetyki' },
  { src: '/images/pastacukrowa2.png', category: 'kosmetyki' },
  { src: '/images/pasta.cukrowa.png', category: 'kosmetyki' },
  { src: '/images/kosmetyki2.png', category: 'kosmetyki' },
  { src: '/images/gabinet.png', category: 'kosmetyki' },
  { src: '/images/depilacja.png', category: 'depilacja' },
  { src: '/images/depilacja-Jana.png', category: 'depilacja' },
  { src: '/images/talk.png', category: 'depilacja' },
  { src: '/images/depilacja-reka.png', category: 'depilacja' },
  { src: '/images/rezultatydepilacji.png', category: 'depilacja' },
  { src: '/images/rezultatydepilacji2.png', category: 'depilacja' },
  { src: '/images/Jana-certyfikaty.png', category: 'depilacja' },
  { src: '/images/kobido.png' },
  { src: '/images/kobido_1.png' },
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

  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Box id='gallery' p='5'>
        <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>
          {t('gallery.gallery')}
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
