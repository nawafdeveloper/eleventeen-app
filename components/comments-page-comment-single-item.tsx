import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'

const CommentsPageCommentSingleItem = () => {
    return (
        <ThemedView style={styles.container}>
            <Image
                source={{ uri: 'https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-1/418935722_390591180172520_5691167081189509875_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=DdruYd6XIUwQ7kNvwHCemxp&_nc_oc=Admy3mS1RXf-12NQ_TtB2XzVIamiA2PSobmprFS5s4fRMYuJxzKHusf67yvdeflz49XOdTgO-pK8-bA8YpcVgxs0&_nc_zt=24&_nc_ht=scontent-pmo1-1.xx&_nc_gid=b4CV2ffKy8m3ZhaIfCNdnQ&oh=00_Afoyy-73HLEGNs-3B_CcEqWa0mzD5aEdLMeXdGhvwT7pbQ&oe=6969C41A' }}
                style={styles.avatar}
            />
            <ThemedView style={styles.contentWrapper}>
                <ThemedView style={styles.bubble}>
                    <ThemedText style={styles.username}>
                        ثمانية / Thmanyah
                    </ThemedText>

                    <ThemedText style={styles.commentText}>
                        حاول ألّا تفقد إتزانك ما زلنا في بداية الأسبوع. 🧘‍♂️
                        اسمع وصايا مهذل الصقور الشعريّة من حلقة سابقة في بودكاست #ذا_قال.
                    </ThemedText>
                </ThemedView>
                <ThemedView style={styles.actions}>
                    <Pressable>
                        <ThemedText style={styles.actionText}>Like</ThemedText>
                    </Pressable>
                    <ThemedText style={styles.timeText}>
                        · 2h
                    </ThemedText>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

export default CommentsPageCommentSingleItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 10,
    },
    contentWrapper: {
        flex: 1,
    },
    bubble: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 16,
        maxWidth: '90%',
    },
    username: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 14,
        marginBottom: 4
    },
    commentText: {
        fontSize: 14,
        lineHeight: 18,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        paddingLeft: 6,
    },
    actionText: {
        fontSize: 12,
        fontWeight: '500',
        marginRight: 12,
        opacity: 0.7,
    },
    timeText: {
        fontSize: 12,
        opacity: 0.5,
    },
})
