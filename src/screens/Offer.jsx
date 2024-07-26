import React from 'react';
import { Box, Heading, TableContainer, Table, Tbody, Tr, Td, Button, Link, Flex, Divider } from '@chakra-ui/react';
import Header from '../components/Header';

function Offer() {
  return (
    <>
      <Header />

      <Box id='offer' p={5}>
        <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>
          Cennik
        </Heading>

        <Box mb={10} mr='5' ml='5' mt='5'>
          <Heading as='h2' size='xl' textAlign='center' bg='#b49dcd' color='white' p={4}>
            Depilacja pastą cukrową
          </Heading>

          <TableContainer mt={4} >
            <Table variant='striped' size={{ base: 'sm', md: 'md', lg: 'md' }}>
              <Tbody>
                <Tr>
                  <Td colSpan={3} textAlign='center' fontWeight='bold' fontSize='xl'>
                    KOBIETA
                  </Td>
                </Tr>
                {[
                  { service: 'Wąsik', time: '10 min', price: '20 PLN' },
                  { service: 'Pachy', time: '20 min', price: '30 PLN' },
                  { service: 'Ręce', time: '40 min', price: '50 PLN' },
                  { service: 'Linia bikini', time: '45 min', price: '60 PLN' },
                  { service: 'Bikini brazylijskie', time: '60 min', price: '150 PLN' },
                  { service: 'Łydki', time: '40 min', price: '70 PLN' },
                  { service: 'Całe nogi', time: '90 min', price: '150 PLN' },
                ].map((item, index) => (
                  <Tr key={index}>
                    <Td textAlign='left' fontSize='md'>
                      {item.service}
                    </Td>
                    <Td textAlign='right' fontSize='md'>
                      {item.time}
                    </Td>
                    <Td textAlign='right' fontSize='md'>
                      {item.price}
                    </Td>
                  </Tr>
                ))}
                <Divider bg={'#b49dcd'} mb='10' />

                <Tr>
                  <Td colSpan={3} textAlign='center' fontWeight='bold' fontSize='xl'>
                    MĘŻCZYZNA
                  </Td>
                </Tr>
                {[
                  { service: 'Pachy', time: '40 min', price: '30 PLN' },
                  { service: 'Klatka piersiowa', time: '30 min', price: '70+ PLN' },
                  { service: 'Plecy', time: '30 min', price: '60+ PLN' },
                  { service: 'Bikini', time: '90 min', price: '200 PLN' },
                  { service: 'Łydki', time: '60 min', price: '100 PLN' },
                  { service: 'Uda', time: '60 min', price: '100 PLN' },
                  { service: 'Całe nogi', time: '90 min', price: '150 PLN' },
                ].map((item, index) => (
                  <Tr key={index}>
                    <Td textAlign='left' fontSize='md'>
                      {item.service}
                    </Td>
                    <Td textAlign='right' fontSize='md'>
                      {item.time}
                    </Td>
                    <Td textAlign='right' fontSize='md'>
                      {item.price}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box mb={10}>
          <Heading as='h2' size='xl' textAlign='center' bg='#b49dcd' color='white' p={4}>
            Peeling
          </Heading>

          <TableContainer mt={4}>
            <Table variant='striped' size={{ base: 'sm', md: 'md', lg: 'md' }}>
              <Tbody>
                <Tr>
                  <Td textAlign='left'>Peeling całego ciała</Td>
                  <Td textAlign='right'>60 min</Td>
                  <Td textAlign='right'>200 PLN</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default Offer;
