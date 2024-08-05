import React from 'react';
import { Text, Stack, Flex, IconButton } from '@chakra-ui/react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function ContactInformation() {
  return (
    <Stack
      justifyContent={{ base: 'normal', md: 'space-around', lg: 'normal' }}
      direction={{ base: 'column', md: 'row', lg: 'row' }}
      spacing={{ base: '10', md: '0', lg: '0' }}
      fontFamily='Comfortaa'
      ml={{ base: '10', md: '4', lg: '10' }}
      mr={{ base: '10', md: '4' }}
    >
      <Stack direction='column' textColor='black' align='flex-start'>
        <Text fontSize='xl' fontWeight='bold' mb='4'>
          {' '}
          SALON{' '}
        </Text>
        <Text fontWeight='bold'> JK Studio </Text>
        <Text mb='-2'> ul. Bałtycka 2 </Text>
        <Text> 31-214 Kraków </Text>
        <Text> Pn-Nd: 10:00 - 21:00 </Text>
      </Stack>
      <Stack direction='column' textColor='black' align='flex-start' ml={{ lg: '16' }}>
        <Text fontSize='lg' fontWeight='bold' mb='4'>
          {' '}
          KONTAKT{' '}
        </Text>
        <Link href='tel:+48502765640' _hover={{ textDecoration: 'underline' }}>
          {' '}
          +48 502 765 640{' '}
        </Link>
        <Link href='mailto:depilacja.jkstudio@gmail.com' _hover={{ textDecoration: 'underline' }}>
          depilacja.jkstudio@gmail.com
        </Link>

        <Link
          as={ReactLink}
          _hover={{ textDecoration: 'underline' }}
          to='https://booksy.com/pl-pl/242997_jk-studio_depilacja_8820_krakow#ba_s=sr_1'
          target='_blank'
        >
          {' '}
          Rezerwacje
        </Link>
      </Stack>
      <Stack direction='column' textColor='black' align='flex-start' ml={{ lg: '16' }}>
        <Text fontSize='lg' fontWeight='bold' mb='4'>
          {' '}
          ŚLEDŹ NAS{' '}
        </Text>
        <Flex>
          <IconButton
            as='a'
            bg='transparent'
            href='https://www.instagram.com/jkstudiokrakow?igsh=amx1d3hnbTZycHF2'
            target='_blank'
            aria-label='Instagram'
            icon={<FaInstagram fontSize='1.25rem' />}
            mt='-2'
            mr='4'
          />
          <IconButton
            as='a'
            bg='transparent'
            href='https://www.instagram.com/jkstudiokrakow?igsh=amx1d3hnbTZycHF2'
            target='_blank'
            aria-label='Facebook'
            icon={<FaFacebook fontSize='1.25rem' />}
            mt='-2'
          />
        </Flex>
      </Stack>
    </Stack>
  );
}

export default ContactInformation;
