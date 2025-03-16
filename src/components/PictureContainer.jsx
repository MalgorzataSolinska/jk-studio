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
      transition='all 0.2s ease-in-out'
      onClick={onClick}
      cursor='pointer'
    >
      <Flex h='flex' alignSelf='center'>
        <Box>
          <Link pt='1' cursor='pointer'>
            <Image src={src} maxH='flex' shadow='lg'  w='flex' />
          </Link>
        </Box>
      </Flex>
    </MotionBox>
  );
}
export default PictureContainer;
