import { extendTheme, ThemeConfig } from '@chakra-ui/react';
// "7" full component made in 7th lecture
const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme = extendTheme({ config });

export default theme;