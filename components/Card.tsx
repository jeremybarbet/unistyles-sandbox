import { type ReactNode } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => <View style={s.wrapper}>{children}</View>;

const s = StyleSheet.create(theme => ({
  wrapper: {
    marginBottom: 10,

    borderWidth: 10,
    backgroundColor: theme.primary,
  },
}));
