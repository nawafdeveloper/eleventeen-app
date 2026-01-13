import { Colors } from '@/constants/theme'
import React, { useState } from 'react'
import { Pressable, StyleSheet, useColorScheme, useWindowDimensions } from 'react-native'
import Animated, {
    FadeIn,
    FadeOut,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSpring
} from 'react-native-reanimated'
import { HeartGradientIcon, LikeGradientIcon } from './icons'
import { ThemedText } from './themed-text'
import { ThemedView } from './themed-view'

const REACTIONS = [
    { type: 'heart', component: HeartGradientIcon },
    { type: 'like', component: LikeGradientIcon },
    { type: 'laugh', emoji: '😂' },
    { type: 'love', emoji: '😍' },
    { type: 'angry', emoji: '😡' }
]

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const ReactionItem = ({ reaction, index, onSelect }: any) => {
    const scale = useSharedValue(0)
    const pressScale = useSharedValue(1)

    React.useEffect(() => {
        scale.value = withDelay(
            index * 50,
            withSpring(1, {
                damping: 15,
                stiffness: 200,
                mass: 0.5
            })
        )
    }, [])

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: scale.value * pressScale.value }
        ]
    }))

    const handlePressIn = () => {
        pressScale.value = withSpring(1.3, {
            damping: 10,
            stiffness: 300
        })
    }

    const handlePressOut = () => {
        pressScale.value = withSpring(1, {
            damping: 10,
            stiffness: 300
        })
    }

    return (
        <AnimatedPressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => onSelect(reaction.type)}
            style={[styles.reactionItem, animatedStyle]}
        >
            {reaction.component ? (
                <reaction.component size={32} />
            ) : (
                <ThemedText style={styles.emoji}>{reaction.emoji}</ThemedText>
            )}
        </AnimatedPressable>
    )
}

const ProfilePageSingelPostItemReactionButton = () => {
    const colorScheme = useColorScheme()
    const { width } = useWindowDimensions()

    const isTablet = width > 600

    const [isInteractionVisible, setIsInteractionVisible] = useState(false)

    const handleToggleInteraction = () => setIsInteractionVisible(prev => !prev)

    const handleSelectReaction = (reactionType: string) => {
        console.log('Selected reaction:', reactionType)
        setIsInteractionVisible(false)
    }

    return (
        <ThemedView style={styles.content}>
            <Pressable
                onPress={handleToggleInteraction}
                onLongPress={handleToggleInteraction}
                style={styles.interactionResultsLeftReactions}
            >
                <HeartGradientIcon size={24} strokeWidth={10} strokeColor={Colors[colorScheme ?? 'dark'].background} />
                <ThemedView style={styles.interactionResultsLeftSingleReaction}>
                    <LikeGradientIcon size={24} strokeWidth={10} strokeColor={Colors[colorScheme ?? 'dark'].background} />
                </ThemedView>
            </Pressable>

            {isInteractionVisible && (
                <Animated.View
                    key="popup-container"
                    entering={FadeIn.duration(200)}
                    exiting={FadeOut.duration(150)}
                    style={[
                        styles.popupContainer,
                        {
                            backgroundColor: Colors[colorScheme ?? 'dark'].background,
                        }
                    ]}
                >
                    {REACTIONS.map((reaction, index) => (
                        <ReactionItem
                            key={reaction.type}
                            reaction={reaction}
                            index={index}
                            onSelect={handleSelectReaction}
                        />
                    ))}
                </Animated.View>
            )}
        </ThemedView>
    )
}

export default ProfilePageSingelPostItemReactionButton

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
        bottom: 40,
        left: -10,
        zIndex: 999,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingLeft: 12,
        paddingRight: 140,
        paddingVertical: 8,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    reactionItem: {
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emoji: {
        fontSize: 32,
        lineHeight: 34
    }
})