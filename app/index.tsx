import { Pressable, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const Index = () => (
  <View style={s.wrapper}>
    <Pressable style={s.button}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View style={s.dropShadow} />
    </Pressable>
  </View>
);

const s = StyleSheet.create(theme => ({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',

    padding: 20,
  },

  dropShadow: {
    position: 'absolute',
    inset: 0,
    zIndex: -2,

    backgroundColor: theme.primary,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
}));

// eslint-disable-next-line import/no-unused-modules
export default Index;
