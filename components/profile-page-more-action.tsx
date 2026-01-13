import { Colors } from '@/constants/theme';
import { Ban2Outlined, Flag1Outlined, Share1Outlined } from '@lineiconshq/free-icons';
import Lineicons from '@lineiconshq/react-native-lineicons';
import React from 'react';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

const ProfilePageMoreAction = () => {
    const colorScheme = useColorScheme();

    return (
        <ThemedView style={styles.main}>
            <ThemedView style={[
                styles.buttonsGroupContainer,
                {
                    backgroundColor: Colors[colorScheme ?? 'dark'].card
                }
            ]}>
                <Pressable style={styles.buttonContainer}>
                    <Lineicons
                        icon={Flag1Outlined}
                        size={24}
                        color={Colors[colorScheme ?? 'dark'].text}
                    />
                    <ThemedView style={styles.buttonContentContainer}>
                        <ThemedText style={styles.buttonTitle}>
                            Report user
                        </ThemedText>
                    </ThemedView>
                </Pressable>
                <Pressable style={styles.buttonContainer}>
                    <Lineicons
                        icon={Ban2Outlined}
                        size={24}
                        color={Colors[colorScheme ?? 'dark'].text}
                    />
                    <ThemedView style={styles.buttonContentContainer}>
                        <ThemedText style={styles.buttonTitle}>
                            Block user
                        </ThemedText>
                    </ThemedView>
                </Pressable>
                <Pressable style={styles.buttonContainer}>
                    <Lineicons
                        icon={Share1Outlined}
                        size={24}
                        color={Colors[colorScheme ?? 'dark'].text}
                    />
                    <ThemedView style={styles.buttonContentContainer}>
                        <ThemedText style={styles.buttonTitle}>
                            Share user profile
                        </ThemedText>
                    </ThemedView>
                </Pressable>
            </ThemedView>
        </ThemedView>
    )
}

export default ProfilePageMoreAction

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    buttonsGroupContainer: {
        padding: 10,
        borderRadius: 15,
        borderCurve: 'continuous',
        flexDirection: 'column'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingVertical: 10
    },
    buttonContentContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        gap: 5
    },
    buttonTitle: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 14
    },
})