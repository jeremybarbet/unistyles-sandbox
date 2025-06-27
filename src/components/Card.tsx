import { type ReactNode } from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import Animated, { type BaseAnimationBuilder, type LayoutAnimationFunction } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

interface CardProps {
  children: ReactNode;
  layout?: BaseAnimationBuilder | LayoutAnimationFunction | typeof BaseAnimationBuilder;
  style?: StyleProp<ViewStyle>;
}

export const Card = ({ children, layout, style }: CardProps) => (
  <Animated.View style={[s.wrapper, style]} layout={layout}>
    {children}
  </Animated.View>
);

const s = StyleSheet.create((theme) => ({
  wrapper: {
    width: '50%',

    padding: 10,

    borderRadius: 10,
    borderCurve: 'continuous',
    backgroundColor: theme.primary,
    boxShadow: theme.primary,
  },
}));
