import Colors from "@/constants/Colors";
import { HStack, Text, View } from "@gluestack-ui/themed";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const AnimatedButton = ({
    title,
    onPress,
    style,
    iconLeft,
    iconRight,
    ...props
}: {
    title: string;
    onPress: () => void;
    style?: {} | null;
    secondary?: boolean; // Add the 'secondary' property to the type definition
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const handlePressIn = () => {
        scale.value = withSpring(0.95);
    };

    const handlePressOut = () => {
        scale.value = withSpring(1);
    };

    return (
        <View {...props}>
            {props.secondary ? (
                <TouchableOpacity
                    onPress={onPress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <Animated.View
                        style={[
                            styles.button,
                            animatedStyle,
                            style,
                            { backgroundColor: "#" },
                        ]}
                    >
                        <HStack items="center" space="md">
                            {iconLeft}
                            <Text medium color="$white" size="sm">
                                {title}
                            </Text>
                            {iconRight}
                        </HStack>
                    </Animated.View>
                </TouchableOpacity>
            ) : (
                <AnimatedTouchable
                    style={[
                        styles.button,
                        animatedStyle,
                        style,
                        styles.shadowPrimary,
                        styles.primary,
                    ]}
                    onPress={onPress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <HStack items="center" space="md">
                        {iconLeft}
                        <Text style={styles.text} medium>
                            {title}
                        </Text>
                        {iconRight}
                    </HStack>
                </AnimatedTouchable>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    primary: {
        backgroundColor: Colors.primary,
    },
    secondary: {
        backgroundColor: Colors.secondary,
    },
    primaryShadow: {
        shadowColor: Colors.primary,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    secondaryShadow: {
        shadowColor: "#6366f1",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    button: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 200,
    },
    shadowPrimary: {
        // shadow
        shadowColor: Colors.primary,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    text: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "bold",
        // fontFamily: "Outfit_600SemiBold",
    },
});

export default AnimatedButton;
