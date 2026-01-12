import { Colors } from '@/constants/theme'
import { SealCheckIcon } from 'phosphor-react-native'
import React from 'react'
import { Pressable, StyleSheet, useColorScheme } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemedText } from './themed-text'
import { ThemedView } from './themed-view'

const HomePostSingleItemVerificationDescription = () => {
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();

    return (
        <ThemedView style={styles.content}>
            <ThemedText style={styles.userDisplayNameText}>
                Thmanyah / ثمانية
            </ThemedText>
            <ThemedText
                style={[
                    styles.descriptionText,
                    {
                        color: Colors[colorScheme ?? 'dark'].secondaryText
                    }
                ]}
            >
                To keep you informed, we are showing information about people and their profiles
            </ThemedText>
            <ThemedView
                style={[
                    styles.verifyContainer,
                    {
                        backgroundColor: Colors[colorScheme ?? 'dark'].card
                    }
                ]}
            >
                <SealCheckIcon color={Colors[colorScheme ?? 'dark'].primary} weight="fill" size={28} />
                <ThemedView style={styles.verifyContainerRightSide}>
                    <ThemedText style={styles.verifyTitle}>
                        Thmanyah / ثمانية is verified
                    </ThemedText>
                    <ThemedText
                        style={[
                            styles.verifyDescription,
                            {
                                color: Colors[colorScheme ?? 'dark'].secondaryText
                            }
                        ]}
                    >
                        Accounts with a verified badge have been authenticated and can be a notable persons or brands. {' '}
                        <ThemedText style={styles.getVerifyText}>
                            Get verified now
                        </ThemedText>
                    </ThemedText>
                    <Pressable style={styles.learnMoreButton}>
                        <ThemedText style={styles.learnMoreButtonText}>
                            Learn more
                        </ThemedText>
                    </Pressable>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

export default HomePostSingleItemVerificationDescription

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        gap: 15
    },
    userDisplayNameText: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 18
    },
    descriptionText: {
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 14
    },
    verifyContainer: {
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 14,
        borderCurve: 'continuous',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 10
    },
    verifyContainerRightSide: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        flexShrink: 1,
        backgroundColor: 'transparent'
    },
    verifyTitle: {
        fontWeight: '600',
        lineHeight: 16
    },
    verifyDescription: {
        fontSize: 14,
        lineHeight: 16
    },
    getVerifyText: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.dark.primary
    },
    learnMoreButton: {
        paddingVertical: 10,
        borderRadius: 12,
        borderCurve: 'continuous',
        backgroundColor: Colors.dark.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    learnMoreButtonText: {
        fontWeight: '900',
        color: Colors.dark.text,
    }
})