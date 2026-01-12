import { Colors } from '@/constants/theme';
import { useBottomSheet } from '@/context/bottom-sheet-context';
import { Comment1Outlined, MenuMeatballs1Solid, Share1Outlined, ThumbsUp3Outlined } from '@lineiconshq/free-icons';
import { Lineicons } from '@lineiconshq/react-native-lineicons';
import { GlobeHemisphereEastIcon, SealCheckIcon } from 'phosphor-react-native';
import React from 'react';
import { Image, Pressable, StyleSheet, useColorScheme } from 'react-native';
import HomePostSingleItemMoreAction from './home-post-single-item-more-action';
import HomePostSingleReactionButton from './home-post-single-reaction-button';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

const image = 'https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-1/418935722_390591180172520_5691167081189509875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=DdruYd6XIUwQ7kNvwHCemxp&_nc_oc=Admy3mS1RXf-12NQ_TtB2XzVIamiA2PSobmprFS5s4fRMYuJxzKHusf67yvdeflz49XOdTgO-pK8-bA8YpcVgxs0&_nc_zt=24&_nc_ht=scontent-pmo1-1.xx&_nc_gid=b4CV2ffKy8m3ZhaIfCNdnQ&oh=00_Afoyy-73HLEGNs-3B_CcEqWa0mzD5aEdLMeXdGhvwT7pbQ&oe=6969C41A'

const HomePostSingleItem = () => {
    const colorScheme = useColorScheme();
    const { present } = useBottomSheet();

    return (
        <ThemedView style={styles.content}>
            <ThemedView style={styles.headerContainer}>
                <ThemedView style={styles.headerLeft}>
                    <Image
                        source={{ uri: image }}
                        resizeMode='contain'
                        style={styles.avatarImage}
                    />
                    <ThemedView style={styles.userInfoContainer}>
                        <ThemedView style={styles.usernameContainer}>
                            <ThemedText style={styles.usernameText}>
                                ثمانية / Thmanyah
                            </ThemedText>
                            <SealCheckIcon color={Colors[colorScheme ?? 'dark'].primary} weight="fill" size={16} />
                        </ThemedView>
                        <ThemedView style={styles.postMetadataContainer}>
                            <ThemedText style={[styles.postTimestampText, { color: Colors[colorScheme ?? 'dark'].secondaryText }]}>
                                January 7 at 11:28 PM
                            </ThemedText>
                            <GlobeHemisphereEastIcon color={Colors[colorScheme ?? 'dark'].secondaryText} weight="fill" size={14} />
                        </ThemedView>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.headerRight}>
                    <Pressable onPress={() => present(<HomePostSingleItemMoreAction />)}>
                        <Lineicons
                            icon={MenuMeatballs1Solid}
                            size={24}
                            color={Colors[colorScheme ?? 'dark'].secondaryText}
                        />
                    </Pressable>
                </ThemedView>
            </ThemedView>
            <ThemedView style={styles.postContentContainer}>
                <ThemedText style={styles.postDescriptionText}>
                    لا تحتاج أكثر من قفزة واحدة للبدء، وبداية أسبوع موفقة! 🫶
                </ThemedText>
                <Image
                    source={{ uri: 'https://scontent.fdmm2-4.fna.fbcdn.net/v/t39.30808-6/614121653_901874235710876_6082170084607589440_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mQJUC36k1m8Q7kNvwGhTL0u&_nc_oc=AdnbOc2026t0sCufsq80Ggp6z3Id6D9x-y6IuKwaUOngTJRnCFnVi8H6Xa8lmPvzG2rvrC6Nxw9gqp6mu1S1QcN9&_nc_zt=23&_nc_ht=scontent.fdmm2-4.fna&_nc_gid=rF0Ity43aMgkz_WV2rUnJA&oh=00_AfqjhWogySBtjmLW8vDC4yM4Um_p-MYWXQ8Hy0qVLNA5vA&oe=6969DDDD' }}
                    resizeMode='contain'
                    style={styles.postImage}
                />
            </ThemedView>
            <ThemedView style={styles.interactonsContainer}>
                <ThemedView style={styles.interactionResultsContainer}>
                    <ThemedView style={styles.interactionResultsLeft}>
                        <HomePostSingleReactionButton />
                        <ThemedText style={[styles.interactionResultsLeftTotalText, { color: Colors[colorScheme ?? 'dark'].secondaryText }]}>
                            81 more
                        </ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.interactionResultsRight}>
                        <ThemedText style={[styles.interactionResultsRightOtherMetaText, { color: Colors[colorScheme ?? 'dark'].secondaryText }]}>
                            9 comments
                        </ThemedText>
                        <ThemedText style={[styles.interactionResultsRightOtherMetaText, { color: Colors[colorScheme ?? 'dark'].secondaryText }]}>
                            12 shares
                        </ThemedText>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.interactionsButtonsContainer}>
                    <Pressable style={styles.interactionSingleButtonContainer}>
                        <Lineicons
                            icon={ThumbsUp3Outlined}
                            size={24}
                            color={Colors[colorScheme ?? 'dark'].text}
                        />
                        <ThemedText style={styles.interactionSingleButtonText}>Like</ThemedText>
                    </Pressable>
                    <Pressable style={styles.interactionSingleButtonContainer}>
                        <Lineicons
                            icon={Comment1Outlined}
                            size={24}
                            color={Colors[colorScheme ?? 'dark'].text}
                        />
                        <ThemedText style={styles.interactionSingleButtonText}>Comment</ThemedText>
                    </Pressable>
                    <Pressable style={styles.interactionSingleButtonContainer}>
                        <Lineicons
                            icon={Share1Outlined}
                            size={24}
                            color={Colors[colorScheme ?? 'dark'].text}
                        />
                        <ThemedText style={styles.interactionSingleButtonText}>Share</ThemedText>
                    </Pressable>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

export default HomePostSingleItem

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        gap: 10
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    avatarImage: {
        width: 35,
        height: 35,
        borderRadius: 99
    },
    userInfoContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    usernameText: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 14
    },
    postMetadataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    postTimestampText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 12
    },
    postContentContainer: {
        flexDirection: 'column',
        gap: 12
    },
    postDescriptionText: {
        fontSize: 16,
        paddingHorizontal: 10
    },
    postImage: {
        width: '100%',
        aspectRatio: 1,
    },
    interactonsContainer: {
        flexDirection: 'column',
        gap: 10,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    interactionResultsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    interactionResultsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    interactionResultsLeftReactions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    interactionResultsLeftSingleReaction: {
        marginLeft: -7,
        backgroundColor: 'transparent'
    },
    interactionResultsLeftTotalText: {
        fontSize: 14,
    },
    interactionResultsRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    interactionResultsRightOtherMetaText: {
        fontSize: 14
    },
    interactionsButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    interactionSingleButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    interactionSingleButtonText: {
        fontSize: 14,
    },
})