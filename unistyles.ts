import { StyleSheet } from 'react-native-unistyles';

const light = {
  background: '#fff',
  primary: '#000',
  spacings: {
    lg: 20,
    md: 15,
    xs: 10,
  },
};

const dark = {
  background: '#000',
  primary: '#fff',
  spacings: {
    lg: 20,
    md: 15,
    xs: 10,
  },
};

interface Themes {
  readonly light: typeof light;
  readonly dark: typeof dark;
}

declare module 'react-native-unistyles' {
  // eslint-disable-next-line import/no-unused-modules, @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends Themes {}
}

StyleSheet.configure({
  themes: {
    light,
    dark,
  },
  settings: {
    adaptiveThemes: true,
  },
});
