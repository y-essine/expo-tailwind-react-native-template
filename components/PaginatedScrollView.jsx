import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import { View, ScrollView } from "@gluestack-ui/themed";
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
    runOnJS,
} from "react-native-reanimated";
import Colors from "@/constants/Colors";

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const PaginatedScrollView = ({ children, onNext, goTo }) => {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const translateX = useSharedValue(0);
    const { width: SCREEN_WIDTH } = useWindowDimensions();

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            translateX.value = event.contentOffset.x;
            const index = Math.round(event.contentOffset.x / SCREEN_WIDTH);
            if (index !== currentIndex) {
                runOnJS(setCurrentIndex)(index);
            }
        },
    });

    useEffect(() => {
        onNext(currentIndex);
    }, [currentIndex, onNext]);

    useEffect(() => {
        if (typeof goTo === "function") {
            goTo((index) => {
                scrollRef.current?.scrollTo({
                    x: index * SCREEN_WIDTH,
                    animated: true,
                });
            });
        }
    }, [goTo, SCREEN_WIDTH]);

    return (
        <View style={styles.container}>
            <AnimatedScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
            >
                {children}
            </AnimatedScrollView>
            <View style={styles.indicatorContainer}>
                {React.Children.map(children, (_, index) => (
                    <Indicator
                        key={index}
                        index={index}
                        translateX={translateX}
                        SCREEN_WIDTH={SCREEN_WIDTH}
                    />
                ))}
            </View>
        </View>
    );
};

const Indicator = ({ index, translateX, SCREEN_WIDTH }) => {
    const animatedStyle = useAnimatedStyle(() => {
        const inputRange = [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
        ];

        return {
            width: interpolate(
                translateX.value,
                inputRange,
                [10, 20, 10],
                Extrapolate.CLAMP
            ),
            opacity: interpolate(
                translateX.value,
                inputRange,
                [0.5, 1, 0.5],
                Extrapolate.CLAMP
            ),
        };
    });

    return <Animated.View style={[styles.indicator, animatedStyle]} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    indicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    indicator: {
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.primary, // Replace with your primary color
        marginHorizontal: 5,
    },
});

export default PaginatedScrollView;
