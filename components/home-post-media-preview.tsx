import { Colors } from '@/constants/theme'
import { useBottomSheet } from '@/context/bottom-sheet-context'
import { Comment1Outlined, MenuMeatballs1Solid, Share1Outlined, ThumbsUp3Outlined, XmarkSolid } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-native-lineicons'
import * as Haptics from 'expo-haptics'
import { router } from 'expo-router'
import { GlobeHemisphereEastIcon } from 'phosphor-react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions, Pressable, StyleSheet, useWindowDimensions } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, {
    Extrapolation,
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomePostSingleItemMoreAction from './home-post-single-item-more-action'
import { HeartGradientIcon } from './icons'
import { ThemedText } from './themed-text'
import { ThemedView } from './themed-view'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
const MIN_SCALE = 1
const MAX_SCALE = 4
const PAN_LIMIT = 30
const RESISTANCE_FACTOR = 0.20
const ZOOM_RESISTANCE_FACTOR = 0.15

const HomePostMediaPreview = () => {
    const { width } = useWindowDimensions();
    const { present } = useBottomSheet();

    const [widthState, setWidthState] = useState(width);

    useEffect(() => {
        setWidthState(width);
    }, [width]);

    const isTablet = widthState > 600;

    const scale = useSharedValue(1)
    const savedScale = useSharedValue(1)
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
    const savedTranslateX = useSharedValue(0)
    const savedTranslateY = useSharedValue(0)

    const uiOpacity = useSharedValue(1)

    const triggerHaptic = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }

    const applyResistance = (value: number, limit: number, resistance: number) => {
        'worklet'
        if (Math.abs(value) <= limit) {
            return value
        }

        const excess = Math.abs(value) - limit
        const resistedExcess = excess * resistance
        return value > 0
            ? limit + resistedExcess
            : -(limit + resistedExcess)
    }

    const pinchGesture = Gesture.Pinch()
        .onStart(() => {
            savedScale.value = scale.value
        })
        .onUpdate((event) => {
            let newScale = savedScale.value * event.scale

            if (newScale > MAX_SCALE) {
                const excess = newScale - MAX_SCALE
                newScale = MAX_SCALE + (excess * ZOOM_RESISTANCE_FACTOR)
            } else if (newScale < MIN_SCALE) {
                const deficit = MIN_SCALE - newScale
                newScale = MIN_SCALE - (deficit * ZOOM_RESISTANCE_FACTOR)
            }

            scale.value = newScale

            if (newScale > MIN_SCALE + 0.05) {
                uiOpacity.value = withTiming(0, { duration: 200 })
            }
        })
        .onEnd(() => {
            if (scale.value > MAX_SCALE || scale.value < MIN_SCALE) {
                runOnJS(triggerHaptic)()
            }

            if (scale.value > MAX_SCALE) {
                scale.value = withSpring(MAX_SCALE, {
                    damping: 120,
                    stiffness: 900
                })
                savedScale.value = MAX_SCALE
            } else if (scale.value < MIN_SCALE) {
                scale.value = withSpring(MIN_SCALE, {
                    damping: 120,
                    stiffness: 900
                })
                savedScale.value = MIN_SCALE
            } else {
                savedScale.value = scale.value
            }

            if (scale.value <= MIN_SCALE + 0.05) {
                uiOpacity.value = withTiming(1, { duration: 300 })
                translateX.value = withSpring(0, { damping: 120, stiffness: 900 })
                translateY.value = withSpring(0, { damping: 120, stiffness: 900 })
                savedTranslateX.value = 0
                savedTranslateY.value = 0
            }
        })

    const panGesture = Gesture.Pan()
        .onStart(() => {
            savedTranslateX.value = translateX.value
            savedTranslateY.value = translateY.value
        })
        .onUpdate((event) => {
            if (scale.value > MIN_SCALE + 0.05) {
                const maxTranslateX = ((SCREEN_WIDTH * scale.value) - SCREEN_WIDTH) / 2
                const maxTranslateY = ((SCREEN_HEIGHT * scale.value) - SCREEN_HEIGHT) / 2

                const newX = savedTranslateX.value + event.translationX
                const newY = savedTranslateY.value + event.translationY

                translateX.value = applyResistance(newX, maxTranslateX, RESISTANCE_FACTOR)
                translateY.value = applyResistance(newY, maxTranslateY, RESISTANCE_FACTOR)
            } else {
                const rawX = event.translationX
                const rawY = event.translationY

                translateX.value = applyResistance(rawX, PAN_LIMIT, RESISTANCE_FACTOR)
                translateY.value = applyResistance(rawY, PAN_LIMIT, RESISTANCE_FACTOR)
            }
        })
        .onEnd(() => {
            if (scale.value > MIN_SCALE + 0.05) {
                const maxTranslateX = ((SCREEN_WIDTH * scale.value) - SCREEN_WIDTH) / 2
                const maxTranslateY = ((SCREEN_HEIGHT * scale.value) - SCREEN_HEIGHT) / 2

                let finalX = translateX.value
                let finalY = translateY.value

                if (Math.abs(translateX.value) > maxTranslateX) {
                    runOnJS(triggerHaptic)()
                    finalX = translateX.value > 0 ? maxTranslateX : -maxTranslateX
                    translateX.value = withSpring(finalX, { damping: 120, stiffness: 900 })
                }

                if (Math.abs(translateY.value) > maxTranslateY) {
                    runOnJS(triggerHaptic)()
                    finalY = translateY.value > 0 ? maxTranslateY : -maxTranslateY
                    translateY.value = withSpring(finalY, { damping: 120, stiffness: 900 })
                }

                savedTranslateX.value = finalX
                savedTranslateY.value = finalY
            } else {
                if (Math.abs(translateX.value) > PAN_LIMIT || Math.abs(translateY.value) > PAN_LIMIT) {
                    runOnJS(triggerHaptic)()
                }

                translateX.value = withSpring(0, { damping: 120, stiffness: 900 })
                translateY.value = withSpring(0, { damping: 120, stiffness: 900 })
                savedTranslateX.value = 0
                savedTranslateY.value = 0
            }
        })

    const doubleTapGesture = Gesture.Tap()
        .numberOfTaps(2)
        .onEnd(() => {
            if (scale.value > MIN_SCALE + 0.05) {
                scale.value = withSpring(MIN_SCALE, { damping: 120, stiffness: 900 })
                savedScale.value = MIN_SCALE
                translateX.value = withSpring(0, { damping: 120, stiffness: 900 })
                translateY.value = withSpring(0, { damping: 120, stiffness: 900 })
                savedTranslateX.value = 0
                savedTranslateY.value = 0
                uiOpacity.value = withTiming(1, { duration: 300 })
            }
        })

    const composedGesture = Gesture.Simultaneous(
        Gesture.Race(doubleTapGesture, panGesture),
        pinchGesture
    )

    const animatedImageStyle = useAnimatedStyle(() => {
        const dragScale = scale.value <= MIN_SCALE + 0.05
            ? interpolate(
                Math.max(Math.abs(translateX.value), Math.abs(translateY.value)),
                [0, PAN_LIMIT, PAN_LIMIT * 1.5],
                [1, 0.98, 0.95],
                Extrapolation.CLAMP
            )
            : 1

        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
                { scale: scale.value * dragScale }
            ]
        }
    })

    const animatedUIStyle = useAnimatedStyle(() => ({
        opacity: uiOpacity.value
    }))

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.content}>
                <Animated.View style={[styles.headerContainer, animatedUIStyle]}>
                    <Pressable onPress={() => router.back()}>
                        <Lineicons
                            icon={XmarkSolid}
                            size={24}
                            color={Colors.dark.text}
                        />
                    </Pressable>
                    <Pressable onPress={() => present(<HomePostSingleItemMoreAction />)}>
                        <Lineicons
                            icon={MenuMeatballs1Solid}
                            size={24}
                            color={Colors.dark.text}
                        />
                    </Pressable>
                </Animated.View>
                <GestureDetector gesture={composedGesture}>
                    <Animated.View style={styles.imageContainer}>
                        <Animated.Image
                            source={{ uri: 'https://scontent.fdmm2-4.fna.fbcdn.net/v/t39.30808-6/614121653_901874235710876_6082170084607589440_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mQJUC36k1m8Q7kNvwGhTL0u&_nc_oc=AdnbOc2026t0sCufsq80Ggp6z3Id6D9x-y6IuKwaUOngTJRnCFnVi8H6Xa8lmPvzG2rvrC6Nxw9gqp6mu1S1QcN9&_nc_zt=23&_nc_ht=scontent.fdmm2-4.fna&_nc_gid=rF0Ity43aMgkz_WV2rUnJA&oh=00_AfqjhWogySBtjmLW8vDC4yM4Um_p-MYWXQ8Hy0qVLNA5vA&oe=6969DDDD' }}
                            resizeMode={'contain'}
                            style={[
                                styles.image,
                                animatedImageStyle,
                                {
                                    maxWidth: isTablet ? (widthState / 2) : 'auto',
                                    marginHorizontal: 'auto',
                                }
                            ]}
                        />
                    </Animated.View>
                </GestureDetector>
                <Animated.View style={[styles.footerContainer, animatedUIStyle]}>
                    <ThemedView style={styles.captionContainer}>
                        <ThemedText style={styles.usernameText}>
                            ثمانية / Thmanyah
                        </ThemedText>
                        <ThemedView style={styles.postMetadataContainer}>
                            <ThemedText style={[styles.postTimestampText, { color: Colors.dark.secondaryText }]}>
                                January 7 at 11:28 PM
                            </ThemedText>
                            <GlobeHemisphereEastIcon color={Colors.dark.secondaryText} weight="fill" size={14} />
                        </ThemedView>
                        <ThemedText style={styles.postDescriptionText}>
                            لا تحتاج أكثر من قفزة واحدة للبدء، وبداية أسبوع موفقة! 🫶
                        </ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.interactonsContainer}>
                        <ThemedView style={styles.interactionResultsContainer}>
                            <ThemedView style={styles.interactionResultsLeft}>
                                <HeartGradientIcon size={20} />
                                <ThemedText style={[styles.interactionResultsLeftTotalText, { color: Colors.dark.secondaryText }]}>
                                    81 more
                                </ThemedText>
                            </ThemedView>
                            <ThemedView style={styles.interactionResultsRight}>
                                <ThemedText style={[styles.interactionResultsRightOtherMetaText, { color: Colors.dark.secondaryText }]}>
                                    9 comments
                                </ThemedText>
                                <ThemedText style={[styles.interactionResultsRightOtherMetaText, { color: Colors.dark.secondaryText }]}>
                                    12 shares
                                </ThemedText>
                            </ThemedView>
                        </ThemedView>
                        <ThemedView style={styles.interactionsButtonsContainer}>
                            <Pressable style={styles.interactionSingleButtonContainer}>
                                <Lineicons
                                    icon={ThumbsUp3Outlined}
                                    size={24}
                                    color={Colors.dark.text}
                                />
                                <ThemedText style={styles.interactionSingleButtonText}>Like</ThemedText>
                            </Pressable>
                            <Pressable onPress={() => router.push('/comments-page')} style={styles.interactionSingleButtonContainer}>
                                <Lineicons
                                    icon={Comment1Outlined}
                                    size={24}
                                    color={Colors.dark.text}
                                />
                                <ThemedText style={styles.interactionSingleButtonText}>Comment</ThemedText>
                            </Pressable>
                            <Pressable style={styles.interactionSingleButtonContainer}>
                                <Lineicons
                                    icon={Share1Outlined}
                                    size={24}
                                    color={Colors.dark.text}
                                />
                                <ThemedText style={styles.interactionSingleButtonText}>Share</ThemedText>
                            </Pressable>
                        </ThemedView>
                    </ThemedView>
                </Animated.View>
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default HomePostMediaPreview

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        padding: 10,
        zIndex: 10
    },
    imageContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    footerContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        backgroundColor: 'transparent',
        padding: 10,
        zIndex: 10
    },
    captionContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        backgroundColor: 'transparent'
    },
    usernameText: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 14,
        color: 'white'
    },
    postMetadataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'transparent'
    },
    postTimestampText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 12
    },
    postDescriptionText: {
        fontSize: 16,
        paddingHorizontal: 10,
        color: 'white'
    },
    interactonsContainer: {
        flexDirection: 'column',
        gap: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: 'transparent',
    },
    interactionResultsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        width: '100%'
    },
    interactionResultsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'transparent'
    },
    interactionResultsLeftTotalText: {
        fontSize: 14,
    },
    interactionResultsRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'transparent'
    },
    interactionResultsRightOtherMetaText: {
        fontSize: 14
    },
    interactionsButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent'
    },
    interactionSingleButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 15
    },
    interactionSingleButtonText: {
        fontSize: 14,
        color: 'white'
    },
})