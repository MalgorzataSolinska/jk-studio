import React from 'react';
import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const flags = [
    { code: 'US', alt: 'English', lng: 'en' },
    { code: 'PL', alt: 'Polski', lng: 'pl' },
  ];

  const handleLanguageToggle = () => {
    const newLang = i18n.language === 'en' ? 'pl' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button onClick={handleLanguageToggle} p={0} bg='transparent'>
      <Flag
        code={flags.find((flag) => flag.lng === i18n.language)?.code}
        alt={i18n.language}
        style={{
          width: '24px',
          height: '16px',
          
          
          margin: '5px 5px',
        }}
      />
    </Button>
  );
};

export default LanguageSelector;
