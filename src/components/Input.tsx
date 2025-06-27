import { useRef } from 'react';
import { TextInput } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { Pressable } from './Pressable';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const Input = () => {
  const focused = useSharedValue(0);
  const inputRef = useRef<TextInput>(null);
  const theme = useAnimatedTheme();

  const textInputStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(focused.value, [0, 1], [theme.value.primary, theme.value.secondary]),
  }));

  const handlePress = () => {
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    focused.value = 1;
  };

  const handleBlur = () => {
    focused.value = 0;
  };
  return (
    <Pressable onPress={handlePress}>
      <AnimatedTextInput
        ref={inputRef}
        value={undefined}
        keyboardType="numeric"
        pointerEvents="none"
        style={[s.textInput, textInputStyle]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Pressable>
  );
};

const s = StyleSheet.create({
  textInput: {
    padding: 10,
    marginBottom: 20,
  },
});
