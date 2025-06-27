import { useUnistyles } from 'react-native-unistyles';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

const Layout = () => {
  const { theme } = useUnistyles();

  return (
    <>
      <ThemeProvider
        value={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: theme.background,
          }
        }}
      >
        <Stack />
      </ThemeProvider>
    </>
  )
};

// eslint-disable-next-line import/no-unused-modules
export default Layout;
