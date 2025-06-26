import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const Index = () => (
  <View style={s.wrapper}>
    <Text>Edit app/index.tsx to edit this screen.</Text>
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
