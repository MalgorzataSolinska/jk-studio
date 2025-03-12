import { useTranslation } from 'react-i18next';
import { Stack, Text, Divider, Box } from '@chakra-ui/react';

const Articles = () => {
  const { t } = useTranslation();
  const howIsTheProcedure = [
    {
      title: 'blog.howIsTheProcedure.part1_title',
      content: ['blog.howIsTheProcedure.part1', 'blog.howIsTheProcedure.part1_1', 'blog.howIsTheProcedure.part1_2'],
    },
    {
      title: 'blog.howIsTheProcedure.part2_title',
      content: [
        'blog.howIsTheProcedure.part2_1',
        'blog.howIsTheProcedure.part2_2',
        'blog.howIsTheProcedure.part2_3',
        'blog.howIsTheProcedure.part2_4',
      ],
    },
    { title: 'blog.howIsTheProcedure.part3_title', content: 'blog.howIsTheProcedure.part3' },
    { title: 'blog.howIsTheProcedure.part4_title', content: 'blog.howIsTheProcedure.part4' },
  ];

  const alexandria_product = [
    { title: 'blog.alexandria_product.part1_title', content: 'blog.alexandria_product.part1' },
    { title: 'blog.alexandria_product.part2_title', content: 'blog.alexandria_product.part2' },
    { title: 'blog.alexandria_product.part3_title', content: 'blog.alexandria_product.part3' },
    { title: 'blog.alexandria_product.part4_title', content: 'blog.alexandria_product.part4' },
    { title: 'blog.alexandria_product.part5_title', content: 'blog.alexandria_product.part5' },
  ];
  const whySugarPaste = [
    { title: 'blog.whySugarPaste.part1_title', content: 'blog.whySugarPaste.part1' },
    { title: 'blog.whySugarPaste.part2_title', content: 'blog.whySugarPaste.part2' },
    { title: 'blog.whySugarPaste.part3_title', content: 'blog.whySugarPaste.part3' },
    { title: 'blog.whySugarPaste.part4_title', content: 'blog.whySugarPaste.part4' },
  ];

  const preparing_for_proceure = [
    { title: 'blog.preparing_for_procedures.part1_title', content: 'blog.preparing_for_procedures.part1' },
    { title: 'blog.preparing_for_procedures.part2_title', content: 'blog.preparing_for_procedures.part2' },
    { title: 'blog.preparing_for_procedures.part3_title', content: 'blog.preparing_for_procedures.part3' },
    { title: 'blog.preparing_for_procedures.part4_title', content: 'blog.preparing_for_procedures.part4' },
    { title: 'blog.preparing_for_procedures.part5_title', content: 'blog.preparing_for_procedures.part5' },
    { title: 'blog.preparing_for_procedures.part6_title', content: 'blog.preparing_for_procedures.part6' },
    { title: 'blog.preparing_for_procedures.part7_title', content: 'blog.preparing_for_procedures.part7' },
  ];
  const kobido = [
    {
      title: 'blog.kobido.part2_title',
      content: [
        'blog.kobido.part2_1',
        'blog.kobido.part2_2',
        'blog.kobido.part2_3',
        'blog.kobido.part2_4',
        'blog.kobido.part2_5',
      ],
    },
    {
      title: 'blog.kobido.part3_title',
      content: [
        'blog.kobido.part3_1',
        'blog.kobido.part3_2',
        'blog.kobido.part3_3',
        'blog.kobido.part3_4',
        'blog.kobido.part3_5',
        'blog.kobido.part3_6',
      ],
    },
    { title: 'blog.kobido.part4_title', content: 'blog.kobido.part4' },
  ];

  const articles = [
    {
      id: 1,
      title: t('blog.procedure'),
      date: '2024-12-18',
      image: '/images/Jana-kosmetyki.png',
      content: (
        <Stack spacing={6} p={4} maxW='800px' mx='auto'>
          <Text fontSize='lg' color='gray.600'>
            {t('blog.howIsTheProcedure.subtitle')}
          </Text>
          <Divider />
          {howIsTheProcedure.map((section, index) => (
            <Box key={index}>
              <Text fontWeight='bold' fontSize='xl' mb={2}>
                {t(section.title)}
              </Text>
              {Array.isArray(section.content) ? (
                section.content.map((contentItem, idx) => (
                  <Text key={idx} fontSize='md' color='gray.700'>
                    {t(contentItem)}
                  </Text>
                ))
              ) : (
                <Text fontSize='md' color='gray.700'>
                  {t(section.content)}
                </Text>
              )}
            </Box>
          ))}
        </Stack>
      ),
    },

    {
      id: 2,
      title: t('blog.why_sugar_paste'),
      date: '2024-08-02',
      image: '/images/pasta-cukrowa.png',
      content: (
        <Stack spacing={6} p={4} maxW='800px' mx='auto'>
          <Text fontSize='lg' color='gray.600'>
            {t('blog.whySugarPaste.subtitle')}
          </Text>

          <Divider />

          {whySugarPaste.map((section, index) => (
            <Box key={index}>
              <Text fontWeight='bold' fontSize='xl' mb={2}>
                {t(section.title)}
              </Text>
              <Text fontSize='md' color='gray.700'>
                {t(section.content)}
              </Text>
            </Box>
          ))}

          <Divider />

          <Text fontSize='lg' fontWeight='medium' mb='10' color='gray.700'>
            {t('blog.whySugarPaste.summary')}
          </Text>
        </Stack>
      ),
    },
    {
      id: 3,
      title: t('blog.alexandria_products'),
      date: '2024-08-02',
      image: '/images/kosmetyki.png',
      content: (
        <Stack spacing={6} p={4} maxW='800px' mx='auto'>
          <Text fontSize='lg' color='gray.600'>
            {t('blog.alexandria_product.subtitle')}
          </Text>

          <Divider />

          {alexandria_product.map((section, index) => (
            <Box key={index}>
              <Text fontWeight='bold' fontSize='xl' mb={2}>
                {t(section.title)}
              </Text>
              <Text fontSize='md' color='gray.700'>
                {t(section.content)}
              </Text>
            </Box>
          ))}

          <Divider />

          <Text fontSize='lg' fontWeight='medium' mb='10' color='gray.700'>
            {t('blog.alexandria_product.summary')}
          </Text>
        </Stack>
      ),
    },
    {
      id: 4,
      title: t('blog.preparing_for_procedure'),

      date: '2024-08-10',
      image: '/images/depilacja.png',
      content: (
        <Stack spacing={6} p={4} maxW='800px' mx='auto'>
          <Text fontSize='lg' color='gray.600'>
            {t('blog.preparing_for_procedures.subtitle')}
          </Text>

          <Divider />

          {preparing_for_proceure.map((section, index) => (
            <Box key={index}>
              <Text fontWeight='bold' fontSize='xl' mb={2}>
                {t(section.title)}
              </Text>
              <Text fontSize='md' color='gray.700'>
                {t(section.content)}
              </Text>
            </Box>
          ))}

          <Divider />

          <Text fontSize='lg' fontWeight='medium' mb='10' color='gray.700'>
            {t('blog.preparing_for_procedures.summary')}
          </Text>
        </Stack>
      ),
    },
    {
      id: 5,
      title: t('blog.kobido.kobido'),
      date: '2025-03-12',
      image: '/images/kobido.png',
      video: '/images/kobido.mp4',
      content: (
        <Stack spacing={6} p={4} maxW='800px' mx='auto'>
          <Text fontSize='lg' color='gray.600'>
            {t('blog.kobido.subtitle')}
          </Text>

          <Divider />

          {kobido.map((section, index) => (
            <Box key={index}>
              <Text fontWeight='bold' fontSize='xl' mb={2}>
                {t(section.title)}
              </Text>
              {Array.isArray(section.content) ? (
                section.content.map((contentItem, idx) => (
                  <Text key={idx} fontSize='md' color='gray.700'>
                    {t(contentItem)}
                  </Text>
                ))
              ) : (
                <Text fontSize='md' color='gray.700'>
                  {t(section.content)}
                </Text>
              )}
            </Box>
          ))}

          <Divider />

          <Text fontSize='lg' fontWeight='medium' mb='10' color='gray.700'>
            {t('blog.kobido.summary')}
          </Text>
        </Stack>
      ),
    },
  ];
  return articles;
};
export default Articles;
