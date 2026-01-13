import FriendsUserCardSingleItem from '@/components/friends-user-card-single-item';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { PlusOutlined } from '@lineiconshq/free-icons';
import Lineicons from '@lineiconshq/react-native-lineicons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { router, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type RootStackParamList = {
    Search: undefined
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>

const FriendsScreen = () => {
    const colorScheme = useColorScheme();
    const { width, height } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp>()

    const [widthState, setWidthState] = useState(width);

    useEffect(() => {
        setWidthState(width);
    }, [width, height]);

    const handleAddFriend = () => {
        if (isTablet) {
            router.push('/(tabs)/search');
        }

        navigation.navigate('Search');
    };

    const isTablet = widthState > 600;
    return (
        <ThemedView
            style={[
                styles.content,
                {
                    maxWidth: isTablet ? (widthState / 2.5) : 'auto',
                    marginHorizontal: 'auto',
                    width: '100%',
                    backgroundColor: Colors[colorScheme ?? 'dark'].background,
                }
            ]}
        >
            <FlatList
                data={Array.from({ length: 20 })}
                renderItem={({ index }) => (
                    <FriendsUserCardSingleItem
                        key={index}
                    />
                )}
                numColumns={2}
                contentContainerStyle={{
                    gap: 20,
                }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <>
                        <ThemedText style={styles.description}>
                            Here you’ll see your friends, where you can add, manage, and stay connected with them.
                        </ThemedText>
                        <ThemedView style={styles.headerButtons}>
                            <Pressable
                            onPress={handleAddFriend}
                                style={[
                                    styles.buttonContainer,
                                    {
                                        backgroundColor: Colors[colorScheme ?? 'dark'].card
                                    }
                                ]}
                            >
                                <Lineicons
                                    icon={PlusOutlined}
                                    size={18}
                                    color={Colors[colorScheme ?? 'dark'].text}
                                    strokeWidth={2}
                                />
                                <ThemedText style={styles.buttonText}>
                                    Add new friend
                                </ThemedText>
                            </Pressable>
                        </ThemedView>
                    </>
                )}
            />
        </ThemedView>
    )
}

export default FriendsScreen

const styles = StyleSheet.create({
    content: {
        flex: 1,
        gap: 20
    },
    description: {
        fontSize: 12,
        color: 'gray',
        lineHeight: 14,
        padding: 10
    },
    headerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 10
    },
    buttonContainer: {
        paddingVertical: 12,
        paddingRight: 18,
        paddingLeft: 10,
        borderRadius: 99,
        borderCurve: 'continuous',
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 14
    }
})