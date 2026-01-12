import { Colors } from '@/constants/theme'
import React, { useState } from 'react'
import { Platform, Pressable, StyleSheet, useColorScheme, useWindowDimensions } from 'react-native'
import Animated, { ZoomInEasyDown, ZoomOutEasyDown } from 'react-native-reanimated'
import { HeartGradientIcon, LikeGradientIcon } from './icons'
import { ThemedText } from './themed-text'
import { ThemedView } from './themed-view'

const HomePostSingleReactionButton = () => {
    const colorScheme = useColorScheme();
    const {width} = useWindowDimensions();

    const isTablet = width > 600;

    const [isInteractionVisible, setIsInteractionVisible] = useState(false);

    const handleToggleInteraction = () => setIsInteractionVisible(prev => !prev);

    return (
        <ThemedView style={styles.content}>
            <Pressable onPress={handleToggleInteraction} style={styles.interactionResultsLeftReactions}>
                <HeartGradientIcon size={24} strokeWidth={10} strokeColor={Colors[colorScheme ?? 'dark'].background} />
                <ThemedView style={styles.interactionResultsLeftSingleReaction}>
                    <LikeGradientIcon size={24} strokeWidth={10} strokeColor={Colors[colorScheme ?? 'dark'].background} />
                </ThemedView>
            </Pressable>
            {isInteractionVisible && (
                <Animated.View
                    key={'popup-container'}
                    entering={ZoomInEasyDown.duration(150)}
                    exiting={ZoomOutEasyDown.duration(150)}
                    style={[
                        styles.popupContainer,
                        {
                            backgroundColor: Colors[colorScheme ?? 'dark'].background,
                            left: isTablet ? -75 : 0
                        }
                    ]}
                >
                    <Pressable>
                        <HeartGradientIcon size={32} />
                    </Pressable>
                    <Pressable>
                        <LikeGradientIcon size={32} />
                    </Pressable>
                    <Pressable>
                        <ThemedText style={styles.emoji}>😂</ThemedText>
                    </Pressable>
                    <Pressable>
                        <ThemedText style={styles.emoji}>😍</ThemedText>
                    </Pressable>
                    <Pressable>
                        <ThemedText style={styles.emoji}>😡</ThemedText>
                    </Pressable>
                </Animated.View>
            )}
        </ThemedView>
    )
}

export default HomePostSingleReactionButton

const styles = StyleSheet.create({
    content: {
        position: 'relative',
        backgroundColor: 'transparent',
        overflow: 'visible'
    },
    interactionResultsLeftReactions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    interactionResultsLeftSingleReaction: {
        marginLeft: -7,
        backgroundColor: 'transparent'
    },
    popupContainer: {
        position: 'absolute',
        top: -55,
        zIndex: 999,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 8,
        borderRadius: 99,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 9,
        elevation: 4,
        width: Platform.OS === 'android' ? 237 : 225
    },
    emoji: {
        fontSize: 32,
        lineHeight: 34
    }
})