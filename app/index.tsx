import { Button, View } from 'react-native';
import { StyleSheet, UnistylesRuntime, useUnistyles } from 'react-native-unistyles';

const Index = () => {
  const { rt } = useUnistyles();

  // OK
  // const themeName = rt.themeName;

  // OK
  // const themeName = rt.themeName === 'dark' ? 'light' : 'dark';

  return (
    <View style={s.wrapper}>
      <Button
        title="Switch theme"
        // OK
        // onPress={() => UnistylesRuntime.setTheme(themeName === 'dark' ? 'light' : 'dark')}
        // OK
        // onPress={() => UnistylesRuntime.setTheme(themeName)}
        // NOT OK
        onPress={() => UnistylesRuntime.setTheme(rt.themeName === 'dark' ? 'light' : 'dark')}
      />
    </View>
  );
};

const s = StyleSheet.create(theme => ({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
}));

// eslint-disable-next-line import/no-unused-modules
export default Index;
