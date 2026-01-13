import { Colors } from '@/constants/theme';
import { Additem } from 'iconsax-react-nativejs';
import React from 'react';
import { Image, Pressable, StyleSheet, useColorScheme } from 'react-native';
import { ThemedText } from './themed-text';

const FriendsUserCardSingleItem = () => {
    const colorScheme = useColorScheme();

    return (
        <Pressable
            style={[
                styles.content,
                {
                    backgroundColor: Colors[colorScheme ?? 'dark'].card
                }
            ]}
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
            <Pressable style={styles.followButton}>
                <Additem
                    size="18"
                    color={Colors.dark.text}
                    variant="Bold"
                />
                <ThemedText style={styles.followText}>
                    Follow
                </ThemedText>
            </Pressable>
        </Pressable>
    )
}

export default FriendsUserCardSingleItem

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 15,
        borderRadius: 14,
        borderCurve: 'continuous',
        flex: 1,
        marginHorizontal: 10
    },
    avatarItem: {
        width: 50,
        height: 50,
        borderRadius: 99,
    },
    displayName: {
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 14
    },
    followButton: {
        paddingVertical: 6,
        borderRadius: 10,
        flexDirection: 'row',
        borderCurve: 'continuous',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.dark.primary,
        width: '100%'
    },
    followText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 14
    }
})