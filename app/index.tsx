import { Button, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useRouter } from 'expo-router';

const Index = () => {
  const { push } = useRouter();

  const handleModal = () => {
    push('/modal');
  };

  return (
    <View style={s.wrapper}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Open modal" onPress={handleModal} />
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// eslint-disable-next-line import/no-unused-modules
export default Index;
