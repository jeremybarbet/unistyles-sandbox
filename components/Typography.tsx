import { type ReactNode } from 'react';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

interface TypographyProps {
  children: ReactNode;
}

export const Typography = ({ children }: TypographyProps) => {
  return <Animated.Text style={s.wrapper}>{children}</Animated.Text>;
};

const s = StyleSheet.create(theme => ({
  wrapper: {
    color: theme.primary,
  },
}));
