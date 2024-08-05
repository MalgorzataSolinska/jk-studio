import React from 'react';
import { Flex, Stack, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

function Header() {
  return (
    <>
      <Flex mt='1' mr='1' justifyContent='right'>
        {' '}
        <LanguageSelector />
      </Flex>
      <Flex justify='space-between' p={4} bg='white' boxShadow='md'>
        <Flex>
          <Link as={Link} to='/'>
            <Text
              fontFamily='Broadway'
              fontWeight='medium'
              fontSize={{ base: 30, md: 35, lg: 40 }}
              ml='20px'
              mt='-40px'
              color={'gray.700'}
            >
              JK Studio
            </Text>
          </Link>
        </Flex>

        <Flex>
          <Button
            maxW={{ base: '60', md: '180' }}
            fontSize='12'
            position='fixed'
            top={{ base: '138px', md: '160px', lg: '180px' }}
            right={{ base: '20px', md: '20px' }}
            opacity='0.9'
            zIndex='10'
            as={Link}
            target='_blank'
            to='https://booksy.com/pl-pl/242997_jk-studio_depilacja_8820_krakow#ba_s=sr_1'
            bg='#b49dcd'
            color='white'
            fontWeight='bold'
          >
            {useBreakpointValue({ base: 'REZERWACJA', md: 'ZAREZERWUJ WIZYTĘ' })}
          </Button>
        </Flex>
      </Flex>
      <Flex
        as='nav'
        justify='space-between'
        align='center'
        wrap='wrap'
        marginTop='5px'
        fontSize={{ base: 15, md: 17, lg: 20 }}
        boxShadow='md'
      >
        <Stack direction='row' spacing={4} mr={5} ml={5}>
          <Link to='/about'>O nas</Link>
          <Link to='/offer'>Oferta</Link>
          <Link to='/gallery'>Galeria</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Kontakt</Link>
        </Stack>
      </Flex>
    </>
  );
}

export default Header;
