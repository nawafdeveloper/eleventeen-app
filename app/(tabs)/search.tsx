import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { Search1Outlined } from '@lineiconshq/free-icons';
import Lineicons from '@lineiconshq/react-native-lineicons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, useColorScheme, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SearchScreen = () => {
    const colorScheme = useColorScheme();
    const { width, height } = useWindowDimensions();
    const insets = useSafeAreaInsets();

    const [widthState, setWidthState] = useState(width);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

    useEffect(() => {
        const showEvent =
            Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
        const hideEvent =
            Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide'

        const showSub = Keyboard.addListener(showEvent, () =>
            setIsKeyboardVisible(true)
        )
        const hideSub = Keyboard.addListener(hideEvent, () =>
            setIsKeyboardVisible(false)
        )

        return () => {
            showSub.remove()
            hideSub.remove()
        }
    }, [])

    useEffect(() => {
        setWidthState(width);
    }, [width, height]);

    const isTablet = widthState > 600;

    return (
        <KeyboardAvoidingView
            style={[
                styles.content,
                {
                    maxWidth: isTablet ? (widthState / 2.5) : 'auto',
                    marginHorizontal: 'auto',
                    width: '100%',
                    backgroundColor: Colors[colorScheme ?? 'dark'].background,
                }
            ]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'android' ? isKeyboardVisible ? 40 : -30 : 90}
        >
            <ThemedView style={styles.topContainer}>
                <ThemedView>
                    <ThemedText style={styles.listDescription}>
                        Start typing to search for users you want to follow and discover new people to connect with.
                    </ThemedText>
                    <ThemedText style={styles.listTitle}>
                        Search history
                    </ThemedText>
                </ThemedView>
                <FlatList
                    data={Array.from({ length: 20 })}
                    renderItem={({ index }) => (
                        <Pressable
                            onPress={() => router.push('/profile-page')}
                            key={index}
                            style={styles.searchItemContainer}
                        >
                            <Image
                                source={{ uri: 'https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-1/418935722_390591180172520_5691167081189509875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=DdruYd6XIUwQ7kNvwHCemxp&_nc_oc=Admy3mS1RXf-12NQ_TtB2XzVIamiA2PSobmprFS5s4fRMYuJxzKHusf67yvdeflz49XOdTgO-pK8-bA8YpcVgxs0&_nc_zt=24&_nc_ht=scontent-pmo1-1.xx&_nc_gid=b4CV2ffKy8m3ZhaIfCNdnQ&oh=00_Afoyy-73HLEGNs-3B_CcEqWa0mzD5aEdLMeXdGhvwT7pbQ&oe=6969C41A' }}
                                style={styles.avatarItem}
                            />
                            <ThemedText
                                numberOfLines={2}
                                ellipsizeMode='tail'
                                style={styles.displayName}
                            >
                                ثمانية / Thmanyah
                            </ThemedText>
                        </Pressable>
                    )}
                    contentContainerStyle={{
                        gap: 10,
                    }}
                    style={styles.flatList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                />
            </ThemedView>
            <ThemedView
                style={[
                    styles.searchContainer,
                    {
                        paddingBottom: insets.bottom
                    }
                ]}
            >
                <Image
                    source={{ uri: 'https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-1/418935722_390591180172520_5691167081189509875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=DdruYd6XIUwQ7kNvwHCemxp&_nc_oc=Admy3mS1RXf-12NQ_TtB2XzVIamiA2PSobmprFS5s4fRMYuJxzKHusf67yvdeflz49XOdTgO-pK8-bA8YpcVgxs0&_nc_zt=24&_nc_ht=scontent-pmo1-1.xx&_nc_gid=b4CV2ffKy8m3ZhaIfCNdnQ&oh=00_Afoyy-73HLEGNs-3B_CcEqWa0mzD5aEdLMeXdGhvwT7pbQ&oe=6969C41A' }}
                    style={styles.avatar}
                />
                <ThemedView
                    style={[
                        styles.inputContainer,
                        {
                            backgroundColor: Colors[colorScheme ?? 'dark'].card
                        }
                    ]}
                >
                    <Lineicons
                        icon={Search1Outlined}
                        size={24}
                        color={'gray'}
                        strokeWidth={2}
                    />
                    <TextInput
                        placeholder='Search for anything'
                        placeholderTextColor={'gray'}
                        style={[
                            styles.input,
                            {
                                color: Colors[colorScheme ?? 'dark'].text
                            }
                        ]}
                    />
                </ThemedView>
            </ThemedView>
        </KeyboardAvoidingView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'space-between'
    },
    topContainer: {
        flexDirection: 'column',
        gap: 25,
        padding: 10
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 10,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 99,
    },
    avatarItem: {
        width: 50,
        height: 50,
        borderRadius: 99,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 12,
        borderRadius: 99,
        borderCurve: 'continuous',
        flex: 1
    },
    input: {
        minHeight: 36,
        alignSelf: 'stretch',
        flex: 1
    },
    flatList: {
        padding: 10
    },
    searchItemContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        maxWidth: 70
    },
    displayName: {
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 14
    },
    listTitle: {
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'left',
        marginTop: 10
    },
    listDescription: {
        fontSize: 12,
        color: 'gray',
        lineHeight: 14
    }
})