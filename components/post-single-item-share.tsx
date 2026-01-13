import { shareActionList } from '@/constants/share-action-list'
import { Colors } from '@/constants/theme'
import { IconData } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-native-lineicons'
import React from 'react'
import { Pressable, StyleSheet, useColorScheme, View } from 'react-native'
import { ThemedText } from './themed-text'
import { ThemedView } from './themed-view'

type Item = {
    id: string
    title: string
    icon: IconData
    label: string
}

const PostSingleItemShare = () => {
    const colorScheme = useColorScheme()

    return (
        <ThemedView style={styles.content}>
            <ThemedText style={styles.headerTitle}>Share post</ThemedText>
            <View style={styles.gridContainer}>
                {shareActionList.map((item: Item) => (
                    <Pressable key={item.id} style={styles.buttonContainer}>
                        <ThemedView
                            style={[
                                styles.circleContainer,
                                { backgroundColor: Colors[colorScheme ?? 'dark'].card }
                            ]}
                        >
                            <Lineicons
                                icon={item.icon}
                                size={24}
                                color={Colors[colorScheme ?? 'dark'].secondaryText}
                            />
                        </ThemedView>
                        <ThemedText
                            style={styles.title}
                            numberOfLines={1}
                            ellipsizeMode='tail'
                        >
                            {item.title}
                        </ThemedText>
                    </Pressable>
                ))}
            </View>
        </ThemedView>
    )
}

export default PostSingleItemShare

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 15
    },
    buttonContainer: {
        width: 70,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    circleContainer: {
        width: 50,
        height: 50,
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 4
    }
})
