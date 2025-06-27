import { type ReactNode } from 'react';
import { Pressable as RNPressable } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface PressableProps {
  children: ReactNode;
  onPress(): void;
}

const AnimatedPressable = Animated.createAnimatedComponent(RNPressable);

/**
 * The Pressable looks to be the culprit somehow.
 */
export const Pressable = ({ children, onPress }: PressableProps) => {
  const sv = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(sv.value, [0, 1], [1, 0.8]) }],
  }));

  const handlePressIn = () => {
    sv.value = withSpring(1);
  };

  const handlePressOut = () => {
    sv.value = withSpring(0);
  };

  return (
    <AnimatedPressable style={animatedStyle} onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      {children}
    </AnimatedPressable>
  );
};
