import Colors from "@/constants/Colors";
import { HStack, Icon, Text, View } from "@gluestack-ui/themed";
import { ClockIcon } from "lucide-react-native";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import AssignedUsers from "./AssignedUsers";

const StocktakeCard = ({ item }) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const isToday = item.date == new Date().toLocaleDateString();

  const isTomorrow =
    item.date == new Date(new Date().getTime() + 86400000).toLocaleDateString();

  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        p="$8"
        bg="#00000008"
        key={item.id}
        rounded="$3xl"
        gap={10}
        w={SCREEN_WIDTH - 40}
        h={274}
      >
        <HStack space="xl" items="center" justify="space-between">
          <Text size="3xl" semibold numberOfLines={2}>
            {item.title}
          </Text>
          <HStack bg="$white" p="$3" rounded="$xl" items="center" space="md">
            <Icon as={ClockIcon} size={16} color="$textDark500" />
            <Text size="sm" color="$textDark500">
              15:26
            </Text>
          </HStack>
        </HStack>
        <Text size="sm" color={Colors.textMedium}>
          {item.address}
        </Text>
        {isToday || isTomorrow ? (
          <View
            bg={isToday ? "$indigo500" : "$amber500"}
            py="$1"
            px="$3"
            rounded="$full"
          >
            <Text color="$white" semibold size="sm">
              {isToday ? "Aujourd'hui" : "Demain"}
            </Text>
          </View>
        ) : (
          <Text color="$textDark500" semibold size="sm">
            {item.date}
          </Text>
        )}
        <AssignedUsers />
      </View>
    </TouchableOpacity>
  );
};

export default StocktakeCard;
