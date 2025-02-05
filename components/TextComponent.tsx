import { type StyleProp, type TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

interface TextComponentProps {
  name: string;
  style?: StyleProp<TextStyle>;
}

export const TextComponent = ({ name, style }: TextComponentProps) => (
  <Animated.Text style={[s.wrapper, style]}>{name}</Animated.Text>
);

const s = StyleSheet.create({
  wrapper: {
    padding: 10,

    borderWidth: 2,
    borderColor: 'dark',
  },
});
