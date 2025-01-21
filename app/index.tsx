import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { TextComponent } from '@/components/TextComponent';

const Index = () => (
  <View style={s.wrapper}>
    <TextComponent name="Some text" style={s.text} />
  </View>
);

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'red',
  },
});

// eslint-disable-next-line import/no-unused-modules
export default Index;
