import React from 'react';
import { Box, Heading, Text, Image, Skeleton, Flex, Stack } from '@chakra-ui/react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref: textRef1, inView: textInView1 } = useInView({ triggerOnce: true });
  const { ref: textRef2, inView: textInView2 } = useInView({ triggerOnce: true });

  const { ref: imageRef1, inView: imageInView1 } = useInView({ triggerOnce: true });
  const { ref: imageRef2, inView: imageInView2 } = useInView({ triggerOnce: true });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <Header />
      <Box id='about' p={5}>
        <Heading as='h2' size='xl' mb='5' mt='15' ml='5'>
          O nas
        </Heading>
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }}>
          <Stack
            mt='5'
            mr='5'
            mb='5'
            ml='5'
            textAlign='justify'
            as={motion.div}
            ref={textRef1}
            initial='hidden'
            animate={textInView1 ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 2 }}
          >
            <Text mb='5'>
              Gabinet JK Studio powstał z myślą o osobach ceniących komfort i profesjonalizm. Nasz personel z pełnym
              zaangażowaniem stara się zapewnić wszystkim klientom pełną satysfakcję poprzez perfekcyjną obsługę i
              przyjazną atmosferę. Priorytet stanowi higiena i bezpieczeństwo podczas każdego zabiegu.
            </Text>
            <Text mb='5'>
              Salon oferuje depilację pastą cukrową, która jest bardzo skuteczną metodą usuwania owłosienia na całym
              ciele. Zabieg jest bezpieczny i sprawdza się w przypadku każdego rodzaju skóry - nawet wrażliwej.
            </Text>
            <Text mb='5'>
              W naszym salonie zapewniamy pełne zrozumienie dla naszych klientów. Chcesz przyjść z dzieckiem? To żaden
              problem — dysponujemy kącikiem zabaw z klockami i kolorowankami. A może masz przy sobie pupila? Serdecznie
              zapraszamy!
            </Text>
          </Stack>

          <motion.div
            ref={imageRef1}
            initial='hidden'
            animate={imageInView1 ? 'visible' : 'hidden'}
            variants={imageVariants}
            transition={{ duration: 2 }}
          >
            <Image
              src='../images/gabinet.png'
              alt='Gabinet'
              fallback={<Skeleton />}
              maxH='500px'
              minW={{ base: '250px', md: '350px', lg: '500px' }}
              objectFit='cover'
              flex='2'
              height='100%'
              width='100%'
              boxShadow='xl'
            />
          </motion.div>
        </Flex>
        <Heading as='h2' size='xl' mb='5' mt='55' ml='5'>
          Personel
        </Heading>
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }}>
          <Stack
            mt='5'
            mr='5'
            mb='5'
            ml='5'
            textAlign='justify'
            as={motion.div}
            ref={textRef2}
            initial='hidden'
            animate={textInView2 ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 2 }}
          >
            <Text mb='5' fontSize='xl' fontWeight='bold'>
              JANA
            </Text>
            <Text mb='5' fontWeight='bold'>
              Właścicielka salonu
            </Text>
            <Text mb='5'>
              Doceniana przez Klientów za wysoką jakość wykonywanych usług. Doświadczenie w depilacji pastą cukrową
              zdobywa od 2015 roku i ciągle podnosi swoje umiejętności. W pracy - perfekcjonistka maksymalnie skupiona
              na tym co robi. Prywatnie - szczęśliwa Mama cudownej dziewczynki. Zawsze pełna energii i uśmiechnięta.
            </Text>
          </Stack>
          <motion.div
            ref={imageRef2}
            initial='hidden'
            animate={imageInView2 ? 'visible' : 'hidden'}
            variants={imageVariants}
            transition={{ duration: 2 }}
          >
            <Image
              src='../images/Jana-właścicielka.png'
              alt='Gabinet'
              fallback={<Skeleton />}
              maxH='500px'
              minW={{ base: '250px', md: '350px', lg: '500px' }}
              objectFit='cover'
              flex='2'
              height='100%'
              width='100%'
              boxShadow='xl'
            />
          </motion.div>
        </Flex>
      </Box>
    </>
  );
}

export default About;
