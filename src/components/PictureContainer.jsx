import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
const MotionBox = motion(Box);

function PictureContainer({ src, onClick }) {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      p='5'
      spacing='5px'
      w='fit-content'
      h='fit-content'
      borderWidth='1px'
      rounded='lg'
      shadow='lg'
      position='relative'
      onClick={onClick}
      cursor='pointer'
    >
      <Flex h='flex' alignSelf='center'>
        <Box>
          <Link pt='1' cursor='pointer'>
            <Image src={src} maxH='flex' w='flex' />
          </Link>
        </Box>
      </Flex>
    </MotionBox>
  );
}
export default PictureContainer;
