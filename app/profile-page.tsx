import ProfilePageHeader from '@/components/profile-page-header'
import ProfilePageSinglePostItem from '@/components/profile-page-single-post-item'
import ProfilePageUserInfo from '@/components/profile-page-user-info'
import { ThemedView } from '@/components/themed-view'
import { Colors } from '@/constants/theme'
import React, { useEffect, useState } from 'react'
import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfilePage = () => {
    const colorScheme = useColorScheme();
    const { width, height } = useWindowDimensions();

    const [widthState, setWidthState] = useState(width);

    useEffect(() => {
        setWidthState(width);
    }, [width, height]);

    const isTablet = widthState > 600;

    const scrollY = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y
        },
    })

    return (
        <SafeAreaView
            style={[
                styles.content,
                {
                    backgroundColor: Colors[colorScheme ?? 'dark'].background,
                }
            ]}
            edges={['top', 'right', 'left']}
        >
            <ThemedView
                style={[
                    styles.content,
                    {
                        maxWidth: isTablet ? (widthState / 2.5) : 'auto',
                        marginHorizontal: 'auto',
                        backgroundColor: Colors[colorScheme ?? 'dark'].card,
                    }
                ]}
            >
                <ProfilePageHeader
                    scrollY={scrollY}
                />
                <Animated.FlatList
                    data={Array.from({ length: 20 })}
                    renderItem={({ index }) => (
                        <ProfilePageSinglePostItem
                            key={index}
                        />
                    )}
                    ListHeaderComponent={() => (
                        <ProfilePageUserInfo />
                    )}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    contentContainerStyle={{
                        backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                        gap: 10,
                    }}
                />
            </ThemedView>
        </SafeAreaView>
    )
}

export default ProfilePage

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
})