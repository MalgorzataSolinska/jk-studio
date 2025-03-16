import React from 'react';
import { Box, Heading, TableContainer, Table, Tbody, Td, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import Header from '../components/Header';
import AnimatedTableRow from '../components/AnimatedTableRow'; 
import { useTranslation } from 'react-i18next';

function Offer() {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      <Box id='offer' p={5} maxW='container.lg' mx='auto'>
        <Heading as='h2' size='xl' mb='25' mt='15' ml='5'>
          {t('offer.pricing')}
        </Heading>

        {/* Rozwijana sekcja Sugaring */}
        <Accordion allowToggle border='white'>
          <AccordionItem>
            <h2>
              <AccordionButton _hover={{ bg: "#e1d8ec", transform: "scale(1.01)"  }} _expanded={{ bg: "#e1d8ec" }} bg='#f0ecf5' rounded='lg'  boxShadow='lg' transition="all 0.2s ease-in-out"  >
                <Box flex='1' textAlign='left' fontWeight='bold' color='gray.800' p={4} fontSize={{base:'medium', md:'large', lg:'larger'}}>
                  {t('offer.sugaring')}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <TableContainer mt={4}>
                <Table variant='simple' size={{ base: 'sm', md: 'md', lg: 'md' }}>
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
                        <Td textAlign='left'  whiteSpace="normal" fontSize='md'>
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
                    <Divider mb='10'  width='max-content'/>

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
                        <Td textAlign='left' whiteSpace="normal" fontSize='md'>
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
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Rozwijana sekcja Scrub */}
        <Accordion allowToggle border='white'mt='1'>
          <AccordionItem>
            <h2>
              <AccordionButton _hover={{ bg: "#e1d8ec", transform: "scale(1.01)" }} _expanded={{ bg: "#e1d8ec" }} bg='#f0ecf5' rounded='lg' boxShadow='lg' transition="all 0.2s ease-in-out">
                <Box flex='1' textAlign='left' fontWeight='bold'  color='gray.800' p={4} fontSize={{base:'medium', md:'large', lg:'larger'}}>
                  {t('offer.scrub')}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <TableContainer mt={4}>
                <Table variant='simple' size={{ base: 'sm', md: 'md', lg: 'md' }}>
                  <Tbody>
                    {[
                      { service: t("offer.fullBodyScrub"), time: '60 min', price: '200 PLN' },
                      { service: t('offer.handScrub'), time: '20 min', price: '35 PLN' },
                      { service: t('offer.handAndArmScrub'), time: '30 min', price: '50 PLN' },
                    ].map((item, index) => (
                      <AnimatedTableRow key={index}>
                        <Td textAlign='left' whiteSpace="normal" fontSize='md'>
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
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Rozwijana sekcja Massage  */}
        <Accordion allowToggle border='white' mt='1' mb='10'>
          <AccordionItem>
            <h2>
              <AccordionButton _hover={{ bg: "#e1d8ec", transform: "scale(1.01)" }} _expanded={{ bg: "#e1d8ec" }} bg='#f0ecf5' rounded='lg' boxShadow='lg' transition="all 0.20s ease-in-out">
                <Box flex='1' textAlign='left' fontWeight='bold'  color='gray.800' p={4} fontSize={{base:'medium', md:'large', lg:'larger'}}>
                  {t('offer.relaxingMassage')}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <TableContainer mt={4}>
                <Table variant='simple' size={{ base: 'sm', md: 'md', lg: 'md' }}>
                  <Tbody>
                    {[
                      {service: t('offer.relaxingMassages.kobido'), time: '60 min', price: '120 PLN'},
                      { service: t("offer.relaxingMassages.fullBodyMassage1h"), time: '60 min', price: '150 PLN' },
                      { service: t('offer.relaxingMassages.fullBodyMassage1.5h'), time: '90 min', price: '200 PLN' },
                      { service: t('offer.relaxingMassages.backMassage'), time: '30 min', price: '80 PLN' },
                      { service: t('offer.relaxingMassages.backAndLegMassage'), time: '60 min', price: '150 PLN' },
                      { service: t('offer.relaxingMassages.legMassage'), time: '40 min', price: '90 PLN' },
                      { service: t('offer.relaxingMassages.footMassage'), time: '20 min', price: '40 PLN' },
                      { service: t('offer.relaxingMassages.handMassage'), time: '15 min', price: '30 PLN' }
                    
                    ].map((item, index) => (
                      <AnimatedTableRow key={index}>
                        <Td textAlign='left' whiteSpace="normal" fontSize='md'>
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
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}

export default Offer;
