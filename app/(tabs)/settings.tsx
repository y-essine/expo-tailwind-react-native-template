import {
  Box,
  Heading,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";
import LottieView from "lottie-react-native";
import { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const animations = [
  {
    id: 1,
    name: "Break Time",
    file: require("@/assets/anims/break.json"),
    description: "Coffee break animation",
  },
  {
    id: 2,
    name: "Claude Background",
    file: require("@/assets/anims/claude_bg.json"),
    description: "AI assistant theme",
  },
  {
    id: 3,
    name: "Gradient Background",
    file: require("@/assets/anims/gradient_bg.json"),
    description: "Beautiful gradient effects",
  },
  {
    id: 4,
    name: "Planet",
    file: require("@/assets/anims/planet.json"),
    description: "Space exploration theme",
  },
  {
    id: 5,
    name: "Poker",
    file: require("@/assets/anims/poker.json"),
    description: "Card game animation",
  },
  {
    id: 6,
    name: "Sims",
    file: require("@/assets/anims/sims.json"),
    description: "Life simulation theme",
  },
  {
    id: 7,
    name: "Stars",
    file: require("@/assets/anims/stars.json"),
    description: "Twinkling stars effect",
  },
];

const AnimationCard = ({
  animation,
  index,
}: {
  animation: any;
  index: number;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.8);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const handlePress = () => {
    scale.value = withSpring(0.95, {}, () => {
      scale.value = withSpring(1);
    });
    setIsPlaying(!isPlaying);
  };

  const handlePressIn = () => {
    opacity.value = withTiming(1, { duration: 150 });
  };

  const handlePressOut = () => {
    opacity.value = withTiming(0.8, { duration: 150 });
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
      >
        <Box
          bg="$white"
          rounded="$2xl"
          p="$4"
          mb="$4"
          mx="$4"
          shadowColor="$backgroundLight400"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.1}
          shadowRadius={8}
          elevation={3}
        >
          <VStack space="md">
            <View
              h={200}
              w="100%"
              items="center"
              justify="center"
              bg="$backgroundLight50"
              rounded="$xl"
            >
              <LottieView
                source={animation.file}
                autoPlay={isPlaying}
                loop={isPlaying}
                style={{ width: 150, height: 150 }}
              />
            </View>

            <VStack space="xs">
              <Heading size="lg" color="$backgroundDark900">
                {animation.name}
              </Heading>
              <Text size="sm" color="$backgroundDark600">
                {animation.description}
              </Text>
              <Text size="xs" color="$backgroundDark400">
                Tap to {isPlaying ? "pause" : "play"}
              </Text>
            </VStack>
          </VStack>
        </Box>
      </TouchableOpacity>
    </Animated.View>
  );
};

const SettingsPage = () => {
  return (
    <SafeAreaView flex="1" bg="$backgroundLight100">
      <ScrollView
        flex="1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack space="lg" pt="$6">
          <VStack space="sm" px="$4">
            <Heading size="3xl" color="$backgroundDark900" bold>
              Animations
            </Heading>
            <Text size="md" color="$backgroundDark600">
              Showcase of beautiful Lottie animations used in this template
            </Text>
          </VStack>

          <VStack space="md">
            {animations.map((animation, index) => (
              <AnimationCard
                key={animation.id}
                animation={animation}
                index={index}
              />
            ))}
          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsPage;
