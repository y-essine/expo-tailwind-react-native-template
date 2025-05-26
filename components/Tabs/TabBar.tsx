import Colors from "@/constants/Colors";
import {
  Icon,
  Pressable,
  SafeAreaView,
  View,
  VStack,
} from "@gluestack-ui/themed";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("window").width;
const HORIZONTAL_PADDING = 16;
const HIGHLIGHT_CIRCLE_SIZE = 45;
const TAB_HEIGHT = 70;

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const [lastVisitedTab, setLastVisitedTab] = useState<string | null>(null);

  const itemCount = state.routes.length;
  const tabWidth = (SCREEN_WIDTH - HORIZONTAL_PADDING * 0) / itemCount;

  return (
    <SafeAreaView
      edges="bottom"
      style={styles.safeArea}
      px={HORIZONTAL_PADDING}
      bg="$white"
    >
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
            setLastVisitedTab(route.name);
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const animatedIconStyle = useAnimatedStyle(() => {
            return {
              transform: [
                {
                  scale: withSpring(isFocused ? 1.2 : 1, {
                    damping: 18,
                    stiffness: 1200,
                  }),
                },
              ],
            };
          });

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.tabItem, { width: tabWidth }]}
            >
              <VStack space="sm" items="center">
                <Animated.View style={animatedIconStyle}>
                  <Icon
                    as={options.icon}
                    size={28}
                    color={isFocused ? Colors.primary : Colors.textLight}
                  />
                </Animated.View>
              </VStack>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: TAB_HEIGHT,
    borderTopColor: "rgba(0, 0, 0, 0.05)",
    borderTopWidth: 1,
  },
  highlightCircle: {
    position: "absolute",
    width: HIGHLIGHT_CIRCLE_SIZE,
    height: HIGHLIGHT_CIRCLE_SIZE,
    borderRadius: HIGHLIGHT_CIRCLE_SIZE / 2,
    backgroundColor: "#222",
    bottom: (TAB_HEIGHT - HIGHLIGHT_CIRCLE_SIZE) / 2,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

export default TabBar;
