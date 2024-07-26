import React from 'react';
import {  Text , Flex, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <>
            <Link as={Link} to='/' >
              <Flex direction="column">
              <Text
              fontFamily="Broadway"
              fontWeight="medium"
              fontSize={{ base: 30, md: 40, xl: 50 }}
              mt="10px"
              color="gray.700"
              textAlign="center"
            >
              JK Studio
            </Text>
            <Text
              fontFamily="Savoye"
              fontWeight="medium"
              fontSize={{ base: 30, md: 40, xl: 50 }}
              mt="10px"
              color="gray.700"
              textAlign="center"
            >
              Profesjonalna depilacja pastą cukrową
            </Text>
        
              </Flex>
            </Link>
            <Divider bg={'#b49dcd'} />
     

        </>
    );
  }
  
  export default Header;