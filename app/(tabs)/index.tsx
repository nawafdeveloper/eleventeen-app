import HomePageCreatePostFloatButton from '@/components/home-page-create-post-float-button';
import HomePostSingleItem from '@/components/home-post-single-item';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import React, { useCallback, useEffect, useState } from 'react';
import {
    RefreshControl,
    StyleSheet,
    useColorScheme,
    useWindowDimensions
} from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

const HomeScreen = () => {
    const colorScheme = useColorScheme();
    const [refreshing, setRefreshing] = useState(false);
    const { width, height } = useWindowDimensions();

    const [widthState, setWidthState] = useState(width);
    const [heightState, setHeightState] = useState(height);

    useEffect(() => {
        setWidthState(width);
        setHeightState(height);
    }, [width, height]);

    const isTablet = widthState > 600;
    const isLandscape = widthState > heightState;

    const lastScrollY = useSharedValue(0)
    const progress = useSharedValue(0)

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1200);
    }, []);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            const currentY = event.contentOffset.y
            const maxY =
                event.contentSize.height - event.layoutMeasurement.height

            if (currentY < 0 || currentY > maxY) {
                return
            }

            const delta = currentY - lastScrollY.value

            const sensitivity = 120

            progress.value = Math.min(
                1,
                Math.max(0, progress.value + delta / sensitivity)
            )

            lastScrollY.value = currentY
        },
    })

    return (
        <ThemedView
            style={styles.main}
        >
            <Animated.FlatList
                data={Array.from({ length: 100 })}
                renderItem={({ index }) => (
                    <HomePostSingleItem
                        key={index}
                    />
                )}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{
                    backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    gap: 10,
                    maxWidth: isTablet ? isLandscape ? (widthState / 2.5) : (widthState / 2.5) : 'auto',
                    marginHorizontal: 'auto',
                    overflow: 'hidden',
                }}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[Colors[colorScheme ?? 'dark'].primary]}
                    />
                }
            />
            <HomePageCreatePostFloatButton
                progress={progress}
            />
        </ThemedView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
});
