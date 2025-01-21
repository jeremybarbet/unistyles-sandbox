import { StyleSheet } from 'react-native-unistyles';

const light = {
  primary: '#228BDB',
  secondary: '#519FDB',
};

const dark = {
  primary: '#22DB5D',
  secondary: '#51DB7D',
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
