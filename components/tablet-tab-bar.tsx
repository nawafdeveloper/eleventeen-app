import { Colors } from '@/constants/theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { ThemedView } from './themed-view';

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const colorScheme = useColorScheme();

    return (
        <ThemedView style={[
            styles.tabBarContainer,
        ]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const color = isFocused
                    ? Colors[colorScheme ?? 'dark'].primary
                    : Colors[colorScheme ?? 'dark'].icon;

                return (
                    <Pressable
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        style={styles.tabItem}
                    >
                        {options.tabBarIcon?.({ focused: isFocused, color, size: 24 })}
                    </Pressable>
                );
            })}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        width: 70,
        minWidth: 70,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    tabItem: {
        padding: 12,
    },
});