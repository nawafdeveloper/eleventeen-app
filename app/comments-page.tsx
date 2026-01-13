import CommentsPageCommentSingleItem from '@/components/comments-page-comment-single-item';
import CommentsPageHeader from '@/components/comments-page-header';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, TextInput, useColorScheme, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const CommentsPage = () => {
    const colorScheme = useColorScheme();
    const { width, height } = useWindowDimensions();
    const insets = useSafeAreaInsets();

    const [widthState, setWidthState] = useState(width);

    useEffect(() => {
        setWidthState(width);
    }, [width, height]);

    const isTablet = widthState > 600;

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
            <KeyboardAvoidingView
                style={[
                    styles.content,
                    {
                        maxWidth: isTablet ? (widthState / 2) : 'auto',
                        marginHorizontal: 'auto',
                        width: '100%',
                        backgroundColor: Colors[colorScheme ?? 'dark'].card,
                    }
                ]}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={0}
            >
                <CommentsPageHeader />
                <FlatList
                    data={Array.from({ length: 20 })}
                    renderItem={({ index }) => (
                        <CommentsPageCommentSingleItem
                            key={index}
                        />
                    )}
                    contentContainerStyle={{
                        gap: 4,
                        paddingBottom: 8,
                        backgroundColor: Colors[colorScheme ?? 'dark'].card
                    }}
                    style={styles.flatList}
                    keyboardShouldPersistTaps="handled"
                />
                <ThemedView
                    style={[
                        styles.commentContainer,
                        {
                            borderTopColor: Colors[colorScheme ?? 'dark'].border,
                            paddingBottom: insets.bottom || 10
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
                        <TextInput
                            placeholder='Write a comment'
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
        </SafeAreaView>
    )
}

export default CommentsPage

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    flatList: {
        flex: 1,
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 10,
        borderTopWidth: 1
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 99,
    },
    inputContainer: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 99,
        borderCurve: 'continuous',
        flex: 1
    },
    input: {
        flex: 1,
    }
})