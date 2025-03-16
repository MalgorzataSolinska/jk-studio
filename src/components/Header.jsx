import React from 'react';
import { Flex, Stack, Text, Box, useBreakpointValue, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <>
      <Flex position='relative '>
        <Flex
          as='header'
          position='fixed'
          top='0'
          left='0'
          width='100%'
          bg='gray.50'
          zIndex='10'
          flexDirection={{ base: 'column', sm: 'row' }}
          align='center'
          boxShadow='lg'
          p={3}
        >
          {/* Flaga w prawym górnym rogu */}
          <Flex position='absolute' right='0.5rem'>
            <LanguageSelector />
          </Flex>

          {/* Logo */}
          <Flex flex='1' justify={{ base: 'center', sm: 'flex-start' }}>
            <Link as={Link} to='/'>
              <Text
                fontFamily='Broadway'
                fontWeight='medium'
                fontSize={{ base: 20, sm: 25 }}
                color={'gray.700'}
                marginBottom={{ base: '0.7rem', sm: '0' }}
              >
                JK Studio
              </Text>
            </Link>
          </Flex>
          <Flex
          flex='1'
          justify={{ base: 'center', sm: 'flex-end' }}
          align='center'
          marginRight={{ base: '0', sm: '50px' }}
          as='nav'
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          fontSize={{ base: 13, sm: 14, md: 15, lg: 16 }}
          w='100%'
          mt='1'
        >
          <Stack direction='row' spacing={4} shouldWrapChildren={false}>
            <Link to='/about'>{t('header.about')}</Link>
            <Link to='/offer'>{t('header.offer')}</Link>
            <Link to='/gallery'>{t('header.gallery')}</Link>
            <Link to='/blog'>{t('header.blog')}</Link>
            <Link to='/contact'>{t('header.contact')}</Link>
          </Stack>
        </Flex>

          <Flex>
            <Button
              maxW={{ base: '60', md: '180' }}
              fontSize='12'
              position='fixed'
              top={{ base: '110',sm: '90', md: '90px', lg: '90px' }}
              right={{ base: '20px', md: '20px' }}
              opacity='0.8'
              zIndex='10'
              as={Link}
              target='_blank'
              to='https://booksy.com/pl-pl/242997_jk-studio_depilacja_8820_krakow#ba_s=sr_1'
              bg='gray.50'
              border='solid'
              borderWidth='1px'
              color='gray.900'
              fontWeight='bold'
              rounded='lg'
              _hover={{
                fontWeight: 'extra-bold',
                transform: 'scale(1.05)',
                opacity: '1',
              }}
            >
              {useBreakpointValue({
                base: t('header.reservation.default'),
                md: t('header.reservation.md'),
              })}
            </Button>
          </Flex>
        </Flex>
       
      </Flex>

      <Box paddingTop={{ base: '80px', sm: '60px' }} />
    </>
  );
}

export default Header;
