import React from 'react';

import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Bell1Outlined, Bell1Solid, Home2Outlined, Home2Solid, UserMultiple4Outlined, UserMultiple4Solid } from '@lineiconshq/free-icons';
import { Lineicons } from '@lineiconshq/react-native-lineicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, StyleSheet } from 'react-native';
import HomeScreen from '.';
import FriendsScreen from './friends';
import NotificationScreen from './notifications';
import ProfileScreen from './profile';

const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: Colors[colorScheme ?? 'dark'].primary,
                    height: 3,
                    borderRadius: 30,
                },
                tabBarStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                    borderBottomWidth: 1,
                    borderColor: Colors[colorScheme ?? 'dark'].border,
                    backgroundColor: Colors[colorScheme ?? 'dark'].background
                },
                tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].primary,
                tabBarInactiveTintColor: Colors[colorScheme ?? 'dark'].icon,
                swipeEnabled: false,
                animationEnabled: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Lineicons
                            icon={focused ? Home2Solid : Home2Outlined}
                            size={24}
                            color={color}
                            strokeWidth={2}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Friends"
                component={FriendsScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Lineicons
                            icon={focused ? UserMultiple4Solid : UserMultiple4Outlined}
                            size={24}
                            color={color}
                            strokeWidth={2}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Lineicons
                            icon={focused ? Bell1Solid : Bell1Outlined}
                            size={24}
                            color={color}
                            strokeWidth={2}
                        />
                    ),
                    tabBarBadge: () => (
                        <ThemedView
                            style={{
                                width: 5,
                                height: 5,
                                borderRadius: 99,
                                backgroundColor: 'red',
                                position: 'absolute',
                                top: 15,
                                right: 35
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <ThemedView style={[
                            styles.profileButton,
                            {
                                borderWidth: focused ? 2 : 0,
                                borderColor: color,
                            }
                        ]}>
                            <Image
                                source={{ uri: 'https://pbs.twimg.com/profile_images/1958555730165817344/nI8flmWW_400x400.jpg' }}
                                resizeMode='contain'
                                style={styles.profileImage}
                            />
                        </ThemedView>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    profileButton: {
        width: 24,
        height: 24,
        borderRadius: 99,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        margin: 2,
        borderRadius: 99
    }
});