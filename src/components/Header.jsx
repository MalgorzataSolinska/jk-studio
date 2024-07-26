import React from 'react';
import { Flex, Divider, Stack,  Text, Button, useBreakpointValue} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


function SimpleHeader() {
  const buttonText = useBreakpointValue({base:'REZERWACJA', md:'ZAREZERWUJ WIZYTĘ'});
  return (
    <>
      <Flex
    
      justify='space-between'
      p={4}
      bg="white"
      boxShadow="md"
      
    >
      <Flex>
        <Link as={Link} to='/'>
            <Text
              fontFamily='Broadway'
              fontWeight='medium'
              fontSize={{ base: 30, md: 40, xl: 50 }}
              ml='20px'
              mt='10px'
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
          top={{ base: '25px', md: '35px' }} 
          right={{ base: '10px', md: '20px' }} 
          opacity='0.8'
          zIndex='10'
          as={Link}
          target='_blank'
          to='https://booksy.com/pl-pl/242997_jk-studio_depilacja_8820_krakow#ba_s=sr_1'
          bg='#b49dcd'
          color='white'
          fontWeight='bold'
        >
          {buttonText}
        </Button>
        </Flex>
      </Flex>
      <Flex
        as='nav'
        justify='space-between'
        align='center'
        wrap='wrap'
        marginTop='10px'
        fontSize={{ base: 15, md: 20, xl: 25 }}
        boxShadow="md"
      >
       
        <Stack direction='row' spacing={4} mr={5} ml={5}>
          <Link to='/about'>O nas</Link>
          <Link to='/offer'>Oferta</Link>
          <Link to='/gallery'>Galeria</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Kontakt</Link>
        </Stack>
        <Divider bg={'#b49dcd'} />
      </Flex>
    </>
  );
}

export default SimpleHeader;
