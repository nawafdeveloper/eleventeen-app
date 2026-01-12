import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Colors } from '@/constants/theme';
import { BottomSheetProvider } from '@/context/bottom-sheet-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView>
        <BottomSheetProvider>
          <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors[colorScheme ?? 'dark'].background,
          }}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <StatusBar
              style="auto"
              backgroundColor={Colors[colorScheme ?? 'dark'].background}
            />
          </SafeAreaView>
        </BottomSheetProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
