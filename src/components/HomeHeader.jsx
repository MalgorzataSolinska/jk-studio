import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';


function HomeHeader() {
  const { t } = useTranslation();
  return (
    <>
      <Flex mt='1' mr='1' justifyContent='right'>
        {' '}
        <LanguageSelector />
      </Flex>
      <Flex direction='column' boxShadow='md' mb='5'>
        <Text
          fontFamily='Broadway'
          fontWeight='medium'
          fontSize={{ base: 30, md: 40, xl: 50 }}
          mt='-20px'
          color='gray.700'
          textAlign='center'
        >
          JK Studio
        </Text>
        <Text
          fontFamily='Savoye'
          fontWeight='medium'
          fontSize={{ base: 30, md: 40, xl: 50 }}
          mt='10px'
          color='gray.700'
          textAlign='center'
        >
          {t('homeHeader.title')}
        </Text>
      </Flex>
    </>
  );
}

export default HomeHeader;
