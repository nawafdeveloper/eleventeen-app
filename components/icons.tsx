import React from 'react';
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

type Props = {
    size?: number;
    strokeWidth?: number;
    strokeColor?: string;
};

export const HeartGradientIcon = ({
    size = 100,
    strokeWidth = 0,
    strokeColor = 'transparent',
}: Props) => {
    const boxSize = 100 - strokeWidth;

    return (
        <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1="85.1504"
                    y1="0"
                    x2="40.6015"
                    y2="121.429"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0" stopColor="#FF187C" />
                    <Stop offset="1" stopColor="#960037" />
                </LinearGradient>
            </Defs>

            <Rect
                x={strokeWidth / 2}
                y={strokeWidth / 2}
                width={boxSize}
                height={boxSize}
                rx={boxSize / 2}
                fill="url(#paint0_linear)"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
            />

            <Path
                d="M77.125 43.7031C77.125 60.6562 51.9884 74.3786 50.9179 74.9453C50.6357 75.0971 50.3204 75.1765 50 75.1765C49.6796 75.1765 49.3643 75.0971 49.0821 74.9453C48.0116 74.3786 22.875 60.6562 22.875 43.7031C22.8795 39.7221 24.4629 35.9054 27.2779 33.0904C30.0929 30.2754 33.9096 28.692 37.8906 28.6875C42.8918 28.6875 47.2705 30.8381 50 34.4734C52.7295 30.8381 57.1082 28.6875 62.1094 28.6875C66.0904 28.692 69.9071 30.2754 72.7221 33.0904C75.5371 35.9054 77.1205 39.7221 77.125 43.7031Z"
                fill="white"
            />
        </Svg>
    );
};

export const LikeGradientIcon = ({
    size = 100,
    strokeWidth = 0,
    strokeColor = 'transparent',
}: Props) => {
    const boxSize = 100 - strokeWidth;

    return (
        <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <Defs>
                <LinearGradient
                    id="paint0_linear_like"
                    x1="85.1504"
                    y1="0"
                    x2="40.6015"
                    y2="121.429"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0" stopColor="#18AEFF" />
                    <Stop offset="1" stopColor="#0166E2" />
                </LinearGradient>
            </Defs>

            <Rect
                x={strokeWidth / 2}
                y={strokeWidth / 2}
                width={boxSize}
                height={boxSize}
                rx={boxSize / 2}
                fill="url(#paint0_linear_like)"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
            />

            <Path
                d="M49.8047 24.1641C53.532 24.1642 56.2961 27.6232 55.4736 31.2588L54.2324 36.7471C55.3275 36.4555 56.632 36.1572 58.0381 35.9365C60.0038 35.6281 62.233 35.4606 64.4004 35.7061C66.5634 35.9511 68.7908 36.6231 70.6084 38.1045C75.239 41.8788 76.5242 47.6647 75.501 53.084C74.4806 58.4887 71.1408 63.7871 66.1338 66.9648C63.7248 68.4937 60.556 69.1689 57.377 69.418C54.1572 69.6701 50.7059 69.5001 47.5693 69.1738C44.4243 68.8465 41.5446 68.3571 39.4541 67.9502C38.5046 67.7655 37.7144 67.5969 37.1328 67.4678V36.5205L45.2637 26.3477C46.3668 24.9677 48.0379 24.1641 49.8047 24.1641Z"
                fill="white"
            />

            <Path
                d="M33.2598 37.6719V67.2705H29.9805C26.7704 67.2705 24.1682 64.6679 24.168 61.458V43.4844C24.168 40.2742 26.7703 37.6719 29.9805 37.6719H33.2598Z"
                fill="white"
            />
        </Svg>
    );
};