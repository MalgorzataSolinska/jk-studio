import { extendTheme } from '@chakra-ui/react';



const theme = extendTheme({
  colors: {
    customPurple: 
      '#b49dcd'
  },
  
  fonts: {
    body: 'Comfortaa',
    heading: 'Comfortaa',
    
  },
  styles: {
    global: {
      '@font-face': [
        {
          fontFamily: 'Broadway',
          src: `url('/fonts/Broadway.ttf') format('truetype')`,
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
        {
          fontFamily: 'Savoye',
          src: `url('/fonts/savoyeletplain.ttf') format('truetype')`,
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
        {
         
          fontFamily: 'Comfortaa',
          src: `url('/fonts/Comfortaa-VariableFont_wght.ttf') format('truetype')`,
          fontWeight: 'normal',
          fontStyle: 'normal',
          
        },
      ],
    },
  },
});

export default theme;
