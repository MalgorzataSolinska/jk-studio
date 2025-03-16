import React from 'react';
import { Box, Text, Flex, Divider, Link } from '@chakra-ui/react';
import ContactInformation from './ContactInformation';

function Footer() {
  return (
    <Box as='footer' w='100%' py='5' bg='#b49dcd'>
      <ContactInformation />
      <Divider bg={'#b49dcd'} mb='5' mt='5' />

      <Flex ml='4' justifyContent='space-between' alignItems='center' mt='2'>
        <Text fontSize='smaller' color='gray.900'>
          COPYRIGHT &copy; {new Date().getFullYear()} Created by {' '}
          <Link href='https://github.com/MalgorzataSolinska' textDecor='underline'  target='_blank' color='gray.700' isExternal>
            MalgorzataSolinska{' '}
          </Link>
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
