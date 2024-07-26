import React from 'react';
import {
  Flex,
  Box,
  Text,
  Button,
  Divider,
  Image,
  Skeleton,
  Stack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import HomeHeader from '../components/HomeHeader';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <HomeHeader />

      <Box maxW='8xl' mx='auto' px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
        <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
          <Box
            width={{ lg: 'sm' }}
            transform={{ base: 'translateY(-50%)', lg: 'none' }}
            bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
            mx={{ base: '6', md: '6', lg: '0' }}
            px={{ base: '6', md: '6', lg: '0' }}
            py={{ base: '6', md: '6', lg: '12' }}
          >
            <Stack spacing={{ base: '8', lg: '10' }}>
              <Stack spacing={{ base: '2', lg: '6' }}>
                <Heading fontWeight='normal' textAlign='center' fontFamily='Savoye' fontSize='40'>
                  Gładkość ciała i dbanie o Siebie
                </Heading>
                <Text textAlign='center' fontSize='md'>
                  {' '}
                  Skorzystaj z naszych zabiegów depilacji cukrowej i ciesz się gładką skórą{' '}
                </Text>

                <Flex direction='column' align='center'>
                  <Button
                    as={RouterLink}
                    to='/about'
                    bg='#B49CCC'
                    size='lg'
                    fontSize='md'
                    minW='300'
                    mt={{ base: '3', lg: '5' }}
                  >
                    DOWIEDZ SIĘ WIĘCEJ
                  </Button>
                  <Button
                    as={RouterLink}
                    to='https://booksy.com/pl-pl/242997_jk-studio_depilacja_8820_krakow#ba_s=sr_1'
                    target='_blank'
                    bg='#B49CCC'
                    size='lg'
                    fontSize='md'
                    minW='300'
                    mt={{ base: '5', lg: '7' }}
                  >
                    ZAREZERWUJ WIZYTĘ
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Box>
          <Flex flex='1' overflow='hidden'>
            <Image
              src='../images/pastacukrowa.png'
              alt='Pasta Cukrowa'
              fallback={<Skeleton />}
              maxH='450px'
              minW='300px'
              objectFit='cover'
              flex='1'
            />
            <Image
              display={{ base: 'none', sm: 'initial' }}
              src='../images/depilacja.png'
              alt='Depilacja'
              fallback={<Skeleton />}
              maxH='450px'
              objectFit='cover'
            />
          </Flex>
        </Stack>
      </Box>

      <Divider bg={'#b49dcd'} mb='10' />
    </>
  );
}

export default Home;
