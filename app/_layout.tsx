import { LogBox } from 'react-native';
import { Stack } from 'expo-router';

LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);

const RootLayout = () => (
  <Stack>
    <Stack.Screen
      name="modal"
      options={{
        headerShown: false,
        presentation: 'modal',
      }}
    />
  </Stack>
);

// eslint-disable-next-line import/no-unused-modules
export default RootLayout;
