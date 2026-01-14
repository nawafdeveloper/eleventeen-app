import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Colors } from '@/constants/theme'
import React, { useEffect, useState } from 'react'
import {
    Image,
    Keyboard,
    Platform,
    Pressable,
    StyleSheet,
    TextInput,
    useColorScheme,
    useWindowDimensions
} from 'react-native'

const WelcomePage = () => {
    const colorScheme = useColorScheme()
    const { width, height } = useWindowDimensions()

    const [widthState, setWidthState] = useState(width)
    const [isEmailFocus, setIsEmailFocus] = useState(false)
    const [isPasswordFocus, setIsPasswordFocus] = useState(false)

    useEffect(() => {
        setWidthState(width)
    }, [width, height])

    const isTablet = widthState > 600

    return (
        <Pressable
            style={{ flex: 1 }}
            onPress={Keyboard.dismiss}
            accessible={false}
        >
            <ThemedView style={styles.main}>
                <ThemedView
                    style={[
                        styles.topContainer,
                        {
                            backgroundColor: Colors[colorScheme ?? 'dark'].secondary
                        }
                    ]}
                >
                    <ThemedView
                        style={[
                            styles.topMaxedWidth,
                            {
                                maxWidth: isTablet ? widthState / 2.5 : 'auto',
                                marginHorizontal: 'auto'
                            }
                        ]}
                    >
                        <Image
                            source={require('@/assets/images/eleventeen-logo-white.png')}
                            resizeMode="contain"
                            style={styles.logo}
                        />
                    </ThemedView>
                </ThemedView>

                <ThemedView
                    style={[
                        styles.mainContent,
                        {
                            maxWidth: isTablet ? widthState / 2.5 : 'auto',
                            marginHorizontal: 'auto',
                            paddingHorizontal: isTablet ? 0 : 20
                        }
                    ]}
                >
                    <ThemedView style={styles.innerTopContent}>
                        <ThemedView
                            style={[
                                styles.inputContainer,
                                {
                                    outlineWidth: isEmailFocus ? 2 : 1,
                                    outlineColor: isEmailFocus
                                        ? Colors[colorScheme ?? 'dark'].primary
                                        : Colors[colorScheme ?? 'dark'].inputBorder,
                                    backgroundColor: Colors[colorScheme ?? 'dark'].card
                                }
                            ]}
                        >
                            <TextInput
                                placeholder="Email address"
                                style={{ color: Colors[colorScheme ?? 'dark'].text }}
                                onFocus={() => setIsEmailFocus(true)}
                                onBlur={() => setIsEmailFocus(false)}
                                returnKeyType="next"
                                autoCapitalize='none'
                            />
                        </ThemedView>

                        <ThemedView
                            style={[
                                styles.inputContainer,
                                {
                                    outlineWidth: isPasswordFocus ? 2 : 1,
                                    outlineColor: isPasswordFocus
                                        ? Colors[colorScheme ?? 'dark'].primary
                                        : Colors[colorScheme ?? 'dark'].inputBorder,
                                    backgroundColor: Colors[colorScheme ?? 'dark'].card
                                }
                            ]}
                        >
                            <TextInput
                                placeholder="Password"
                                secureTextEntry
                                style={{ color: Colors[colorScheme ?? 'dark'].text }}
                                onFocus={() => setIsPasswordFocus(true)}
                                onBlur={() => setIsPasswordFocus(false)}
                                returnKeyType="done"
                            />
                        </ThemedView>

                        <Pressable
                            style={[
                                styles.loginButtonContainer,
                                {
                                    backgroundColor: Colors[colorScheme ?? 'dark'].primary
                                }
                            ]}
                        >
                            <ThemedText style={styles.loginText}>
                                Login
                            </ThemedText>
                        </Pressable>

                        <Pressable>
                            <ThemedText style={styles.forgotPassText}>
                                Forgot your password?
                            </ThemedText>
                        </Pressable>
                    </ThemedView>

                    <ThemedView style={styles.bottomInnterContainer}>
                        <ThemedView style={styles.orContainer}>
                            <ThemedView
                                style={[
                                    styles.separator,
                                    { backgroundColor: Colors[colorScheme ?? 'dark'].border }
                                ]}
                            />
                            <ThemedText style={styles.orText}>Or</ThemedText>
                            <ThemedView
                                style={[
                                    styles.separator,
                                    { backgroundColor: Colors[colorScheme ?? 'dark'].border }
                                ]}
                            />
                        </ThemedView>

                        <Pressable
                            style={[
                                styles.signupButtonContainer,
                                {
                                    backgroundColor: Colors[colorScheme ?? 'dark'].secondary
                                }
                            ]}
                        >
                            <ThemedText
                                style={[
                                    styles.signupText,
                                    { color: Colors[colorScheme ?? 'dark'].primary }
                                ]}
                            >
                                Create new account
                            </ThemedText>
                        </Pressable>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </Pressable>
    )
}

export default WelcomePage

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    topContainer: {
        paddingTop: 100,
        paddingBottom: 70
    },
    topMaxedWidth: {
        backgroundColor: 'transparent'
    },
    logo: {
        width: 164,
        height: 44
    },
    mainContent: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
        width: '100%'
    },
    innerTopContent: {
        gap: 20,
        width: '100%'
    },
    inputContainer: {
        paddingVertical: Platform.OS === 'android' ? 2 : 14,
        paddingHorizontal: 14,
        borderRadius: 10,
        borderCurve: 'continuous',
        width: '100%'
    },
    loginButtonContainer: {
        paddingVertical: 15,
        borderRadius: 10,
        borderCurve: 'continuous',
        width: '100%'
    },
    loginText: {
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        lineHeight: 16
    },
    forgotPassText: {
        fontWeight: '600',
        color: Colors.dark.primary,
        textAlign: 'center',
        lineHeight: 16
    },
    bottomInnterContainer: {
        gap: 20,
        width: '100%'
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    separator: {
        flex: 1,
        height: 1
    },
    orText: {
        fontSize: 14,
        color: 'gray'
    },
    signupButtonContainer: {
        paddingVertical: 15,
        borderRadius: 10,
        borderCurve: 'continuous',
        width: '100%'
    },
    signupText: {
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 16
    }
})
