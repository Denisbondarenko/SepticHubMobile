import { systemWeights } from 'react-native-typography';
import palettes from './palettes';
import { createTheme, DefaultTheme } from '@draftbit/ui';
export default createTheme({
  breakpoints: {},
  palettes,
  baseTheme: DefaultTheme,
  theme: {
    name: 'SepicHub Theme',
    colors: {
      background: {
        base: {
          default: palettes.Gray[50],
          dark: palettes.Gray[900],
        },
        brand: {
          default: palettes.Cyan[200],
          dark: palettes.Cyan[800],
        },
        danger: {
          default: palettes.Rose[50],
          dark: palettes.Rose[800],
        },
        info: {
          default: palettes.Blue[50],
          dark: palettes.Blue[800],
        },
        success: {
          default: palettes.Teal[50],
          dark: palettes.Teal[800],
        },
        warning: {
          default: palettes.Amber[50],
          dark: palettes.Amber[800],
        },
      },
      border: {
        base: {
          default: palettes.Gray[200],
          dark: palettes.Gray[800],
        },
        brand: {
          default: palettes.Cyan[300],
          dark: palettes.Cyan[500],
        },
        danger: {
          default: palettes.Rose[300],
          dark: palettes.Rose[500],
        },
        info: {
          default: palettes.Blue[300],
          dark: palettes.Blue[500],
        },
        success: {
          default: palettes.Teal[300],
          dark: palettes.Teal[500],
        },
        warning: {
          default: palettes.Amber[300],
          dark: palettes.Amber[500],
        },
      },
      branding: {
        accent: {
          default: palettes.Teal[200],
          dark: palettes.Teal[500],
        },
        primary: {
          default: palettes.Cyan[200],
          dark: palettes.Cyan[500],
        },
        secondary: {
          default: palettes.Blue[300],
          dark: palettes.Blue[500],
        },
      },
      foreground: {
        base: {
          default: palettes.Gray[50],
          dark: palettes.Gray[950],
        },
        brand: {
          default: palettes.Cyan[100],
          dark: palettes.Cyan[900],
        },
        danger: {
          default: palettes.Rose[700],
          dark: palettes.Rose[200],
        },
        info: {
          default: palettes.Blue[700],
          dark: palettes.Blue[200],
        },
        success: {
          default: palettes.Teal[700],
          dark: palettes.Teal[200],
        },
        warning: {
          default: palettes.Amber[700],
          dark: palettes.Amber[200],
        },
      },
      text: {
        danger: {
          default: palettes.Rose[500],
          dark: palettes.Rose[400],
        },
        light: {
          default: palettes.Gray[600],
          dark: palettes.Gray[400],
        },
        medium: {
          default: palettes.Gray[800],
          dark: palettes.Gray[200],
        },
        normal: {
          default: palettes.Gray[700],
          dark: palettes.Gray[300],
        },
        strong: {
          default: palettes.Gray[900],
          dark: palettes.Gray[100],
        },
        success: {
          default: palettes.Teal[500],
          dark: palettes.Teal[400],
        },
        warning: {
          default: palettes.Amber[500],
          dark: palettes.Amber[400],
        },
      },
    },
    typography: {
      body1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Merriweather_400Regular',
      },
      body2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 14,
        fontFamily: 'Merriweather_400Regular',
      },
      button: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.light ?? {}),
        fontWeight: '300',
        fontSize: 16,
        fontFamily: 'Merriweather_300Light',
      },
      caption: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 12,
        fontFamily: 'Merriweather_400Regular',
      },
      headline1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 42,
        fontFamily: 'Mulish_400Regular',
      },
      headline2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 36,
        fontFamily: 'Mulish_400Regular',
      },
      headline3: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 31,
        fontFamily: 'Mulish_400Regular',
      },
      headline4: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 26,
        fontFamily: 'Mulish_400Regular',
      },
      headline5: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 21,
        fontFamily: 'Mulish_400Regular',
      },
      headline6: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Mulish_400Regular',
      },
      overline: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 10,
        fontFamily: 'Merriweather_400Regular',
      },
      subtitle1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.light ?? {}),
        fontWeight: '300',
        fontSize: 16,
        fontFamily: 'Merriweather_300Light',
      },
      subtitle2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.light ?? {}),
        fontWeight: '300',
        fontSize: 14,
        fontFamily: 'Merriweather_300Light',
      },
    },
  },
});
