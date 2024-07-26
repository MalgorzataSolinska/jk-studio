import React from 'react';
import { Box, Text, Flex, Divider } from '@chakra-ui/react';
import ContactInformation from './ContactInformation'


function Footer() {

  return (
    <Box as='footer' w='100%' py='5' bg='#b49dcd' >
      <ContactInformation/>
      <Divider bg={'#b49dcd'} mb='5' mt='5' />

      <Flex ml='4' justifyContent='space-between' alignItems='center' mt='2'>
        <Text fontSize='smaller' color='white'>
          COPYRIGHT &copy; {new Date().getFullYear()} JK Studio
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
