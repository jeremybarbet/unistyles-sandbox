import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const Index = () => (
  <View style={s.wrapper}>
    <Text>Edit app/index.tsx to edit this screen.</Text>
    <View style={s.box} />
  </View>
);

const s = StyleSheet.create((_, rt) => ({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    width: 30,
    height: 30,

    backgroundColor: rt.isPortrait ? 'red' : 'blue',
  },
}));

// eslint-disable-next-line import/no-unused-modules
export default Index;
