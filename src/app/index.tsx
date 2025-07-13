import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Card } from '../components/Card';
import { Input } from '../components/Input';

const Index = () => (
  <View style={s.wrapper}>
    <Input />

    <Card>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </Card>
  </View>
);

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// eslint-disable-next-line import/no-unused-modules
export default Index;
