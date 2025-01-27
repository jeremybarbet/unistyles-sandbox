import { useEffect, useState } from 'react';
import { AppState, Dimensions, Text, View } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

const Index = () => {
  const [, forceRender] = useState(0);

  const rtWidth = UnistylesRuntime.screen.width;
  console.log('-Unistyles Runtime width', rtWidth);

  const sWidth = Dimensions.get('screen').width;
  console.log('-Dimensions width', sWidth);

  useEffect(() => {
    const listener = AppState.addEventListener('change', () => {
      forceRender(prev => prev + 1);
    });

    return () => {
      listener.remove();
    };
  }, [rtWidth]);

  return (
    <View style={s.wrapper()}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
};

const s = StyleSheet.create((_, rt) => ({
  wrapper: () => {
    console.log('-Mini Runtime width', rt.screen.width);

    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
}));

// eslint-disable-next-line import/no-unused-modules
export default Index;
