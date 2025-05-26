import {
  HStack,
  Icon,
  Image,
  SafeAreaView,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";
import dayjs from "dayjs";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { ChevronDownIcon } from "lucide-react-native";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

const HomeHeader = ({ props }) => {
  const [time, setTime] = useState(dayjs().format("HH:mm"));
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("HH:mm"));
      setBlink((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView {...props}>
      <View h="$5" w="$full">
        <BlurView intensity={30} style={{ flex: 1 }} />
      </View>
      <VStack space="lg" px="$5" pb="$5">
        <HStack justify="space-between">
          <TouchableOpacity
            onPress={() =>
              router.replace({
                pathname: "/splash",
                params: {
                  next: "/org-picker",
                  time: 1000,
                },
              })
            }
          >
            <HStack p="$2" rounded="$sm" bg="$backgroundDark100" items="center">
              <Text color="$textDark600" size="sm" semibold>
                Vextech
              </Text>
              <Icon as={ChevronDownIcon} color="$textDark600" />
            </HStack>
          </TouchableOpacity>

          <View>
            <TouchableOpacity onPress={() => router.replace("/")}>
              <Image
                source={require("@/assets/avatar.jpeg")}
                height={32}
                width={32}
                rounded="$full"
                alt="Avatar"
              />
            </TouchableOpacity>
          </View>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};

export default HomeHeader;
