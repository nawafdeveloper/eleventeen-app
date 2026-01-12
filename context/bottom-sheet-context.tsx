import { Colors } from '@/constants/theme';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useRef,
    useState,
} from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type BottomSheetContextType = {
    present: (content?: ReactNode) => void;
    dismiss: () => void;
    setContent: (content: ReactNode) => void;
};

const BottomSheetContext =
    createContext<BottomSheetContextType | null>(null);

interface ProviderProps {
    children: ReactNode;
}

export const BottomSheetProvider = ({
    children,
}: ProviderProps) => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();

    const [content, setContent] = useState<ReactNode>(null);

    const present = (newContent?: ReactNode) => {
        if (newContent) {
            setContent(newContent);
        }
        bottomSheetRef.current?.present();
    };

    const dismiss = () => {
        bottomSheetRef.current?.dismiss();
    };

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                pressBehavior="close"
            />
        ),
        []
    );

    return (
        <BottomSheetContext.Provider
            value={{ present, dismiss, setContent }}
        >
            <BottomSheetModalProvider>
                {children}
                <BottomSheetModal
                    ref={bottomSheetRef}
                    backdropComponent={renderBackdrop}
                    enableDynamicSizing
                    enablePanDownToClose
                    handleStyle={{
                        backgroundColor: Colors[colorScheme ?? 'dark'].background,
                    }}
                    handleIndicatorStyle={{
                        backgroundColor:
                            Colors[colorScheme ?? 'dark'].secondaryText,
                    }}
                    backgroundStyle={{
                        backgroundColor:
                            Colors[colorScheme ?? 'dark'].background,
                    }}
                >
                    <BottomSheetView
                        style={[
                            styles.contentContainer,
                            {
                                backgroundColor:
                                    Colors[colorScheme ?? 'dark'].background,
                                paddingBottom: insets.bottom,
                            },
                        ]}
                    >
                        {content}
                    </BottomSheetView>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </BottomSheetContext.Provider>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingHorizontal: 15,
        gap: 25
    },
})

export const useBottomSheet = () => {
    const context = useContext(BottomSheetContext);

    if (!context) {
        throw new Error(
            'useBottomSheet must be used inside BottomSheetProvider'
        );
    }

    return context;
};


