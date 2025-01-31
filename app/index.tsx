import { Button, View } from 'react-native';
import { StyleSheet, UnistylesRuntime, useUnistyles } from 'react-native-unistyles';

import { Card } from '@/components/Card';
import { Typography } from '@/components/Typography';

const Index = () => {
  const { rt } = useUnistyles();
  const themeName = rt.themeName;

  return (
    <View style={s.wrapper}>
      <Card>
        <Typography>Hello world!</Typography>
      </Card>

      <Button title="Switch theme" onPress={() => UnistylesRuntime.setTheme(themeName === 'dark' ? 'light' : 'dark')} />
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
