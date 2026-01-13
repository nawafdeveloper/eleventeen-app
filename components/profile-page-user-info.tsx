import { Colors } from '@/constants/theme';
import { useBottomSheet } from '@/context/bottom-sheet-context';
import { Additem } from 'iconsax-react-nativejs';
import { SealCheckIcon } from 'phosphor-react-native';
import React from 'react';
import { Image, Pressable, StyleSheet, useColorScheme } from 'react-native';
import HomePostSingleItemVerificationDescription from './home-post-single-item-verification-description';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

const image = 'https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-1/418935722_390591180172520_5691167081189509875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=DdruYd6XIUwQ7kNvwHCemxp&_nc_oc=Admy3mS1RXf-12NQ_TtB2XzVIamiA2PSobmprFS5s4fRMYuJxzKHusf67yvdeflz49XOdTgO-pK8-bA8YpcVgxs0&_nc_zt=24&_nc_ht=scontent-pmo1-1.xx&_nc_gid=b4CV2ffKy8m3ZhaIfCNdnQ&oh=00_Afoyy-73HLEGNs-3B_CcEqWa0mzD5aEdLMeXdGhvwT7pbQ&oe=6969C41A'

const ProfilePageUserInfo = () => {
    const colorScheme = useColorScheme();
    const { present } = useBottomSheet();

    return (
        <ThemedView>
            <ThemedView style={styles.userInfoMainContainer}>
                <Image
                    source={{ uri: image }}
                    resizeMode='contain'
                    style={styles.avatarImage}
                />
                <ThemedView style={styles.userInfoContainer}>
                    <Pressable
                        onPress={() => present(<HomePostSingleItemVerificationDescription />)}
                        style={styles.usernameContainer}>
                        <ThemedText style={styles.usernameText}>
                            ثمانية / Thmanyah
                        </ThemedText>
                        <SealCheckIcon color={Colors[colorScheme ?? 'dark'].text} weight="fill" size={20} />
                    </Pressable>
                </ThemedView>
            </ThemedView>
            <ThemedView style={styles.userInfoMetaContainer}>
                <Pressable style={styles.metaContainer}>
                    <ThemedText style={styles.countText}>
                        244K
                    </ThemedText>
                    <ThemedText style={styles.tagText}>
                        followers
                    </ThemedText>
                </Pressable>
                <ThemedText style={styles.dotText}>•</ThemedText>
                <Pressable style={styles.metaContainer}>
                    <ThemedText style={styles.countText}>
                        1.5K
                    </ThemedText>
                    <ThemedText style={styles.tagText}>
                        following
                    </ThemedText>
                </Pressable>
                <ThemedText style={styles.dotText}>•</ThemedText>
                <Pressable style={styles.metaContainer}>
                    <ThemedText style={styles.countText}>
                        25
                    </ThemedText>
                    <ThemedText style={styles.tagText}>
                        posts
                    </ThemedText>
                </Pressable>
            </ThemedView>
            <ThemedView style={styles.bioAndActionsContainer}>
                <ThemedText>
                    نصنع أفضل محتوى عربي، وننقل البطولات السعودية بأعلى جودة — تطبيق ثمانية متاح اليوم للجميع. 👇
                </ThemedText>
                <Pressable style={styles.followButton}>
                    <Additem
                        size="24"
                        color={Colors.dark.text}
                        variant="Bold"
                    />
                    <ThemedText style={styles.followText}>
                        Follow
                    </ThemedText>
                </Pressable>
            </ThemedView>
        </ThemedView>
    )
}

export default ProfilePageUserInfo

const styles = StyleSheet.create({
    userInfoMainContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 15,
        padding: 10
    },
    avatarImage: {
        width: 75,
        height: 75,
        borderRadius: 99
    },
    userInfoContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 5,
        marginVertical: 'auto'
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    usernameText: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 18
    },
    userInfoMetaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    countText: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 14
    },
    tagText: {
        fontSize: 14,
        lineHeight: 14
    },
    dotText: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 14
    },
    bioAndActionsContainer: {
        flexDirection: 'column',
        gap: 20,
        padding: 10,
    },
    followButton: {
        paddingVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        borderCurve: 'continuous',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.dark.primary
    },
    followText: {
        fontWeight: '600',
        color: 'white'
    }
})