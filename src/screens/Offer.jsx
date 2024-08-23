import React from 'react';
import { Box, Heading, TableContainer, Table, Tbody,  Td, Divider } from '@chakra-ui/react';
import Header from '../components/Header';
import AnimatedTableRow from '../components/AnimatedTableRow'; 
import { useTranslation } from 'react-i18next';

function Offer() {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      <Box id='offer' p={5}>
        <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>
          {t('offer.pricing')}
        </Heading>

        <Box mb={10}  mt='5'>
          <Heading as='h2' size='xl' textAlign='center' bg='#b49dcd' color='white' p={4}>
          {t('offer.sugaring')}
          </Heading>

          <TableContainer mt={4} >
            <Table variant='striped' size={{ base: 'sm', md: 'md', lg: 'md' }}>
              <Tbody>
                
                <AnimatedTableRow>
                  <Td colSpan={3} textAlign='center' fontWeight='bold' fontSize='xl'>
                  {t('offer.woman')}
                    
                  </Td>
                  </AnimatedTableRow>
               
                {[
                  { service: t('offer.upperLip'), time: '10 min', price: '20 PLN' },
                  { service: t('offer.armpits'), time: '20 min', price: '30 PLN' },
                  { service: t('offer.arms'), time: '40 min', price: '50 PLN' },
                  { service: t('offer.bikiniLine'), time: '45 min', price: '60 PLN' },
                  { service: t('offer.brazilianBikini'), time: '60 min', price: '150 PLN' },
                  { service: t('offer.calves'), time: '40 min', price: '70 PLN' },
                  { service: t('offer.legs'), time: '90 min', price: '150 PLN' },
                ].map((item, index) => (
                  <AnimatedTableRow key={index}>
                    <Td textAlign='left' fontSize='md'>
                      {item.service}
                    </Td>
                    <Td textAlign='right' fontSize='md'>
                      {item.time}
                    </Td>
                    <Td textAlign='right' fontSize='md'>
                      {item.price}
                    </Td>
                    </AnimatedTableRow>
                ))}
                <Divider bg={'#b49dcd'} mb='10' />

                <AnimatedTableRow>
                  <Td colSpan={3} textAlign='center' fontWeight='bold' fontSize='xl'>
                    {t('offer.man')}
                  </Td>
                  </AnimatedTableRow>
                {[
                  { service: t("offer.armpits"), time: '40 min', price: '30 PLN' },
                  { service: t('offer.chest'), time: '30 min', price: '70+ PLN' },
                  { service: t('offer.back'), time: '30 min', price: '60+ PLN' },
                  { service: t('offer.bikini'), time: '90 min', price: '200 PLN' },
                  { service: t('offer.calves'), time: '60 min', price: '100 PLN' },
                  { service: t('offer.thighs'), time: '60 min', price: '100 PLN' },
                  { service: t('offer.legs'), time: '90 min', price: '150 PLN' },
                ].map((item, index) => (
                  <AnimatedTableRow key={index}>
                    <Td textAlign='left' fontSize='md'>
                      {item.service}
                    </Td>
                    <Td textAlign='right' fontSize='md'>
                      {item.time}
                    </Td>
                    <Td textAlign='right' fontSize='md'>
                      {item.price}
                    </Td>
                    </AnimatedTableRow>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box mb={10}>
          <Heading as='h2' size='xl' textAlign='center' bg='#b49dcd' color='white' p={4}>
            {t('offer.scrub')}
          </Heading>

          <TableContainer mt={4}>
            <Table variant='striped' size={{ base: 'sm', md: 'md', lg: 'md' }}>
              <Tbody>
              <AnimatedTableRow>
                  <Td textAlign='left'>{t('offer.fullBodyScrub')}</Td>
                  <Td textAlign='right'>60 min</Td>
                  <Td textAlign='right'>200 PLN</Td>
                  </AnimatedTableRow>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default Offer;
