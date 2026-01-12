import HomePostMediaPreview from '@/components/home-post-media-preview';
import { ThemedView } from '@/components/themed-view';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

const ImagePreview = () => {
    const { postId } = useLocalSearchParams<{ postId: string }>();
    const { width } = useWindowDimensions();

    const [widthState, setWidthState] = useState(width);

    useEffect(() => {
        setWidthState(width);
    }, [width]);

    const isTablet = widthState > 600;

    return (
        <ThemedView
            style={{
                backgroundColor: 'black',
                maxWidth: isTablet ? (widthState / 2) : 'auto',
                marginHorizontal: 'auto',
                flex: 1
            }}
        >
            <HomePostMediaPreview />
        </ThemedView>
    )
}

export default ImagePreview

const styles = StyleSheet.create({})