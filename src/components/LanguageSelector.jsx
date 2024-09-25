// src/components/LanguageSelector.js
import React, { useState } from 'react';
import { Button, Box, Collapse, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const flags = [
    { code: 'US', alt: 'English', lng: 'en' },
    { code: 'PL', alt: 'Polski', lng: 'pl' },
    // { code: 'UA', alt: 'Українська', lng: 'uk' },
   
  ];

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <Box position='relative'>
      <Button onClick={() => setIsOpen(!isOpen)} p={0} bg='transparent'>
        <Flag
          code={flags.find((flag) => flag.lng === i18n.language)?.code}
          alt={i18n.language}
          style={{
            width: '24px',
            height: '16px',
            border: '1px solid gray',
            borderRadius: '2px',
            margin:'20px',
          }} 
        />
      </Button>
      <Collapse in={isOpen}>
        <VStack spacing={1} position='absolute' top='100%' left='0' zIndex='1' bg='white' p={3} borderRadius='md' boxShadow='md'>
          {flags
            .filter((flag) => flag.lng !== i18n.language) 
            .map((flag) => (
              <Button key={flag.lng} onClick={() => handleLanguageChange(flag.lng)} variant='unstyled'>
                <Flag
                  code={flag.code}
                  alt={flag.alt}
                  style={{
                    width: '24px',
                    height: '16px',
                    border: '1px solid gray',
                    borderRadius: '2px',
                    margin:'20px',
                  }}
                />
              </Button>
            ))}
        </VStack>
      </Collapse>
    </Box>
  );
};

export default LanguageSelector;
