import Header from '../components/Header'
import React from 'react';
import {Box, Text, Heading} from '@chakra-ui/react'



function Blog() { 

return (
    <>
    <Header/>
    <Box id="about" p={5}>
      <Heading as="h2" size="xl" mb={4}>
        O nas
      </Heading>
      <Text>Nasza firma...</Text>
    </Box>
    </>
)}
 export default Blog;