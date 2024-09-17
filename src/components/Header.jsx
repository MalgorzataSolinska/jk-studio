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
      <Flex justify='space-between' p={4} bg='white' boxShadow='md'>
        <Flex>
          <Link as={Link} to='/jk-studio/'>
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
            {useBreakpointValue({ base: t('header.reservation.default'), md: t('header.reservation.md')})}
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
          <Link to='/jk-studio/about'>{t('header.about')}</Link>
          <Link to='/jk-studio/offer'>{t('header.offer')}</Link>
          <Link to='/jk-studio/gallery'>{t('header.gallery')}</Link>
          <Link to='/jk-studio/blog'>{t('header.blog')}</Link>
          <Link to='/jk-studio/contact'>{t('header.contact')}</Link>
        </Stack>
      </Flex>
    </>
  );
}

export default Header;
