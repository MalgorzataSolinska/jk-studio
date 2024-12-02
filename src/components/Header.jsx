import React from 'react';
import { Flex, Stack, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';


function Header() {
  const { t } = useTranslation();
  return (
    <>
      <Flex mt='1' mr='1' justifyContent='right'>
        {' '}
        <LanguageSelector />
      </Flex>
      <Flex justify='space-between' p={4} >
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
            border='solid'
            borderColor='#f1e7fc'
            color='white'
            fontWeight='800'
            rounded='lg'
            _hover={{ bg: '#dbc1e5', transform: 'scale(1.02)' }}
          >
            {useBreakpointValue({ base: t('header.reservation.default'), md: t('header.reservation.md') })}
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
        boxShadow='lg'
        rounded='lg'
      >
        <Stack direction='row' spacing={4} mr={5} ml={5} >
          <Link to='/about'>{t('header.about')}</Link>
          <Link to='/offer'>{t('header.offer')}</Link>
          <Link to='/gallery'>{t('header.gallery')}</Link>
          <Link to='/blog'>{t('header.blog')}</Link>
          <Link to='/contact'>{t('header.contact')}</Link>
        </Stack>
      </Flex>
    </>
  );
}

export default Header;
