import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Colors } from '@/constants/theme';
import { BottomSheetProvider } from '@/context/bottom-sheet-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView>
        <BottomSheetProvider>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="image-preview"
              options={{
                headerShown: false,
                animation: 'none',
                contentStyle: { backgroundColor: 'black' }
              }}
            />
            <Stack.Screen
              name="profile-page"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
          <StatusBar
            style="auto"
            backgroundColor={Colors[colorScheme ?? 'dark'].background}
          />
        </BottomSheetProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
