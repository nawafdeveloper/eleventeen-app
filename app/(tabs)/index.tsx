import HomePostSingleItem from '@/components/home-post-single-item';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import React, { useCallback, useState } from 'react';
import {
    FlatList,
    RefreshControl,
    StyleSheet,
    useColorScheme,
} from 'react-native';

const HomeScreen = () => {
    const colorScheme = useColorScheme();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1200);
    }, []);

    return (
        <ThemedView
            lightColor="#f5f5f5"
            darkColor="#1a1a1a"
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
