import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { DecimalInputView } from './DecimalInputView';

export const Input = () => {
  return (
    <Animated.View style={[s.wrapper]}>
      <DecimalInputView
        value={undefined}
        onChange={() => null}
      />
    </Animated.View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    alignItems: 'center',

    marginTop: 100,
  },
});
