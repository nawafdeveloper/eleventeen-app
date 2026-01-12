import HomePostSingleItem from '@/components/home-post-single-item';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    FlatList,
    RefreshControl,
    StyleSheet,
    useColorScheme,
    useWindowDimensions,
} from 'react-native';

const HomeScreen = () => {
    const colorScheme = useColorScheme();
    const [refreshing, setRefreshing] = useState(false);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const { width, height } = useWindowDimensions();

    const [widthState, setWidthState] = useState(width);
    const [heightState, setHeightState] = useState(height);

    useEffect(() => {
        setWidthState(width);
        setHeightState(height);
    }, [width, height]);

    const isTablet = widthState > 600;
    const isLandscape = widthState > heightState;

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1200);
    }, []);

    return (
        <ThemedView
            style={styles.main}
        >
            <FlatList
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
                    maxWidth: isTablet ? isLandscape ? (widthState / 2.5) : (widthState / 1.5) : 'auto',
                    marginHorizontal: 'auto'
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[Colors[colorScheme ?? 'dark'].primary]}
                    />
                }
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
