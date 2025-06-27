import { ScrollView, Text, View } from 'react-native';
import { LinearTransition } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { Card } from '../components/Card';
import { Input } from '../components/Input';

const Index = () => (
  <ScrollView keyboardShouldPersistTaps="handled" style={s.wrapper} contentContainerStyle={s.contentContainer}>
    <Input />

    <Card layout={LinearTransition}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </Card>
  </ScrollView>
)

const s = StyleSheet.create(theme => ({
  wrapper: {
    backgroundColor: theme.background
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

// eslint-disable-next-line import/no-unused-modules
export default Index;
