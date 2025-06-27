import Animated, { interpolateColor, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { Pressable } from './Pressable';

export const Input = () => {
  const focused = useSharedValue(0);
  const theme = useAnimatedTheme();

  const boxStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(focused.value, [0, 1], [theme.value.primary, theme.value.secondary]),
  }));

  const handlePress = () => {
    focused.value = 1;
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[s.box, boxStyle]} />
    </Pressable>
  );
};

const s = StyleSheet.create({
  box: {
    padding: 10,
    marginBottom: 20,
  },
});
