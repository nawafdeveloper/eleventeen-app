import { moreActionList } from '@/constants/more-action-list';
import { Colors } from '@/constants/theme';
import Lineicons from '@lineiconshq/react-native-lineicons';
import React from 'react';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

const HomePostSingleItemMoreAction = () => {
    const colorScheme = useColorScheme();

    return (
        <>
            <ThemedView style={[
                styles.buttonsGroupContainer,
                {
                    backgroundColor: colorScheme === 'dark' ? Colors.dark.card : '#f5f5f5'
                }
            ]}>
                {moreActionList.slice(0, 2).map((item) => (
                    <Pressable key={item.id} style={styles.buttonContainer}>
                        <Lineicons
                            icon={item.icon}
                            size={24}
                            color={Colors[colorScheme ?? 'dark'].text}
                        />
                        <ThemedView style={styles.buttonContentContainer}>
                            <ThemedText style={styles.buttonTitle}>
                                {item.title}
                            </ThemedText>
                            {item.description && (
                                <ThemedText style={[styles.buttonDescription, { color: Colors[colorScheme ?? 'dark'].secondaryText }]}>
                                    {item.description}
                                </ThemedText>
                            )}
                        </ThemedView>
                    </Pressable>
                ))}
            </ThemedView>
            <ThemedView style={[
                styles.buttonsGroupContainer,
                {
                    backgroundColor: colorScheme === 'dark' ? Colors.dark.card : '#f5f5f5'
                }
            ]}>
                {moreActionList.slice(2, 7).map((item) => (
                    <Pressable key={item.id} style={styles.buttonContainer}>
                        <Lineicons
                            icon={item.icon}
                            size={24}
                            color={Colors[colorScheme ?? 'dark'].text}
                        />
                        <ThemedView style={styles.buttonContentContainer}>
                            <ThemedText style={styles.buttonTitle}>
                                {item.title}
                            </ThemedText>
                            {item.description && (
                                <ThemedText style={[styles.buttonDescription, { color: Colors[colorScheme ?? 'dark'].secondaryText }]}>
                                    {item.description}
                                </ThemedText>
                            )}
                        </ThemedView>
                    </Pressable>
                ))}
            </ThemedView>
            <ThemedView style={[
                styles.buttonsGroupContainer,
                {
                    backgroundColor: colorScheme === 'dark' ? Colors.dark.card : '#f5f5f5'
                }
            ]}>
                {moreActionList.slice(7, 9).map((item) => (
                    <Pressable key={item.id} style={styles.buttonContainer}>
                        <Lineicons
                            icon={item.icon}
                            size={24}
                            color={Colors[colorScheme ?? 'dark'].text}
                        />
                        <ThemedView style={styles.buttonContentContainer}>
                            <ThemedText style={styles.buttonTitle}>
                                {item.title}
                            </ThemedText>
                            {item.description && (
                                <ThemedText style={[styles.buttonDescription, { color: Colors[colorScheme ?? 'dark'].secondaryText }]}>
                                    {item.description}
                                </ThemedText>
                            )}
                        </ThemedView>
                    </Pressable>
                ))}
            </ThemedView>
        </>
    )
}

export default HomePostSingleItemMoreAction

const styles = StyleSheet.create({
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
    buttonDescription: {
        fontSize: 12,
        lineHeight: 12,
        maxWidth: 300
    }
})