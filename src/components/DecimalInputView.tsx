import { useRef } from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { Pressable } from './Pressable';

interface DecimalInputViewProps {
  value?: TextInputProps['value'];
  style?: TextInputProps['style'];
  onChange(value: string): void;
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

export const DecimalInputView = ({
  value,
}: DecimalInputViewProps) => {
  const focused = useSharedValue(0);
  const inputRef = useRef<TextInput>(null);
  const theme = useAnimatedTheme()

  const textInputStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(focused.value, [0, 1], [theme.value.primary, theme.value.secondary]),
  }))

  const handlePress = () => {
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    console.log('-focus',);
    focused.value = 1
  };

  const handleBlur = () => {
    console.log('-blur',);
    focused.value = 0
  };

  return (
    <Pressable onPress={handlePress}>
      <AnimatedTextInput
        ref={inputRef}
        value={value}
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
    marginBottom: 20
  }
})
