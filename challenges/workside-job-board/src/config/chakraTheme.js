import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  colors: {
    veryDarkBlue: '#15192A',
    brightBlue: { 200: '#005DF9' },
    darkBlue: '#191F30',
    paleBlue: '#1F273C',
    brandGray: '#8F9BB3'
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif'
  },
  textStyles: {
    h2: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    h3: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    h4: {
      fontSize: '16px',
      color: 'brandGray',
      fontWeight: 'normal'
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', 'veryDarkBlue')(props)
      },
      label: {
        touchAction: 'none'
      }
    })
  },
  breakpoints: {
    sm: '414px', // mobile (0-414)
    md: '768px', // landscape mobile (415-768)
    lg: '1024px', // tablet (769-1024)
    xl: '1440px', // desktop (1025-1440)
    '2xl': '1920px' // desktop (1441-1920)
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
});

export default theme;
