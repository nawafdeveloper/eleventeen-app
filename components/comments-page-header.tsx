import { Colors } from '@/constants/theme';
import { ChevronLeftOutlined } from '@lineiconshq/free-icons';
import Lineicons from '@lineiconshq/react-native-lineicons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

const CommentsPageHeader = () => {
    const colorScheme = useColorScheme();

    return (
        <ThemedView style={[
            styles.headerContainer,
            {
                borderBottomColor: Colors[colorScheme ?? 'dark'].border
            }
        ]}>
            <Pressable onPress={() => router.back()}>
                <Lineicons
                    icon={ChevronLeftOutlined}
                    size={24}
                    color={Colors[colorScheme ?? 'dark'].text}
                />
            </Pressable>
            <ThemedView style={styles.userInfoContainer}>
                <ThemedText style={styles.usernameText}>
                    ثمانية / Thmanyah - Comments
                </ThemedText>
            </ThemedView>
        </ThemedView>
    )
}

export default CommentsPageHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        padding: 10,
        borderBottomWidth: 1
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    usernameText: {
        fontSize: 14,
        fontWeight: '700',
    },
})