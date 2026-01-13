import { Colors } from '@/constants/theme'
import { useBottomSheet } from '@/context/bottom-sheet-context'
import { ChevronLeftOutlined, MenuMeatballs1Outlined } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-native-lineicons'
import { router } from 'expo-router'
import { SealCheckIcon } from 'phosphor-react-native'
import React from 'react'
import { Image, Pressable, StyleSheet, useColorScheme } from 'react-native'
import Animated, { Extrapolate, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import ProfilePageMoreAction from './profile-page-more-action'
import { ThemedText } from './themed-text'
import { ThemedView } from './themed-view'

const image = 'https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-1/418935722_390591180172520_5691167081189509875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=DdruYd6XIUwQ7kNvwHCemxp&_nc_oc=Admy3mS1RXf-12NQ_TtB2XzVIamiA2PSobmprFS5s4fRMYuJxzKHusf67yvdeflz49XOdTgO-pK8-bA8YpcVgxs0&_nc_zt=24&_nc_ht=scontent-pmo1-1.xx&_nc_gid=b4CV2ffKy8m3ZhaIfCNdnQ&oh=00_Afoyy-73HLEGNs-3B_CcEqWa0mzD5aEdLMeXdGhvwT7pbQ&oe=6969C41A'

interface Props {
    scrollY: SharedValue<number>;
}

const ProfilePageHeader = ({ scrollY }: Props) => {
    const colorScheme = useColorScheme();
    const { present } = useBottomSheet();

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 200],
                [0, 1],
                Extrapolate.CLAMP
            ),
        }
    })

    return (
        <ThemedView style={styles.headerContainer}>
            <ThemedView style={styles.headerLeftSide}>
                <Pressable onPress={() => router.back()}>
                    <Lineicons
                        icon={ChevronLeftOutlined}
                        size={24}
                        color={Colors[colorScheme ?? 'dark'].text}
                    />
                </Pressable>
                <Animated.View style={[styles.userInfoContainer, animatedStyle]}>
                    <Image
                        source={{ uri: image }}
                        resizeMode='contain'
                        style={styles.avatarImage}
                    />
                    <ThemedText style={styles.usernameText}>
                        ثمانية / Thmanyah
                    </ThemedText>
                    <SealCheckIcon color={Colors[colorScheme ?? 'dark'].text} weight="fill" size={14} />
                </Animated.View>
            </ThemedView>
            <Pressable onPress={() => present(<ProfilePageMoreAction />)}>
                <Lineicons
                    icon={MenuMeatballs1Outlined}
                    size={24}
                    color={Colors[colorScheme ?? 'dark'].text}
                />
            </Pressable>
        </ThemedView>
    )
}

export default ProfilePageHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerLeftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    avatarImage: {
        width: 25,
        height: 25,
        borderRadius: 99
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    usernameText: {
        fontSize: 14,
        fontWeight: '700',
    },
})