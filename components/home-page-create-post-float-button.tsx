import { Colors } from '@/constants/theme'
import { PlusOutlined } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-native-lineicons'
import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, useWindowDimensions } from 'react-native'
import Animated, { Extrapolate, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { ThemedView } from './themed-view'

interface Props {
    progress: SharedValue<number>;
}

const HomePageCreatePostFloatButton = ({ progress }: Props) => {
    const { width, height } = useWindowDimensions();

    const [widthState, setWidthState] = useState(width);
    const [heightState, setHeightState] = useState(height);

    useEffect(() => {
        setWidthState(width);
        setHeightState(height);
    }, [width, height]);

    const isTablet = widthState > 600;

    const animatedStyle = useAnimatedStyle(() => {
        const translateX = interpolate(
            progress.value,
            [0, 1],
            [0, 150],
            Extrapolate.CLAMP
        )

        return {
            transform: [{ translateX }],
        }
    })

    return (
        <ThemedView
            style={styles.main}
            pointerEvents='box-none'
        >
            <Animated.View
                style={animatedStyle}
            >
                <Pressable
                    style={[
                        styles.buttonContainer,
                        {
                            paddingRight: isTablet ? 80 : 20
                        }
                    ]}
                >
                    <Lineicons
                        icon={PlusOutlined}
                        size={32}
                        color={Colors.dark.text}
                    />
                </Pressable>
            </Animated.View>
        </ThemedView>
    )
}

export default HomePageCreatePostFloatButton

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 70,
        zIndex: 999,
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%'
    },
    buttonContainer: {
        paddingVertical: 10,
        paddingLeft: 10,
        backgroundColor: Colors.dark.primary,
        borderTopLeftRadius: 99,
        borderBottomLeftRadius: 99,
        marginLeft: 'auto'
    }
})