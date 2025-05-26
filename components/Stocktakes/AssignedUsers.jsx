import { HStack, Icon, Image, Text, View } from "@gluestack-ui/themed";
import { ChevronDownIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

const AssignedUsers = ({}) => {
    return (
        <TouchableOpacity>
            <View p="$3" rounded="$full" bg="$white" items="center">
                <HStack>
                    <Image
                        source={require("@/assets/avatar.jpeg")}
                        height={24}
                        width={24}
                        rounded="$full"
                        alt="Avatar"
                        borderWidth="$1"
                        borderColor="$white"
                    />
                    <Image
                        source={{
                            uri: "https://media.licdn.com/dms/image/D4D03AQF8cO6xnMntfQ/profile-displayphoto-shrink_100_100/0/1683722897547?e=1727913600&v=beta&t=VYk43so7UjKS4YJKEXP1cxHEnB_3UyavZILfZ5dUmQo",
                        }}
                        height={24}
                        width={24}
                        rounded="$full"
                        alt="Avatar"
                        borderWidth="$1"
                        borderColor="$white"
                    />
                    <Image
                        source={{
                            uri: "https://media.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_100_100/0/1516678908521?e=1727913600&v=beta&t=g_XVdrl62x98puiz7eMHSTHDOnBOHJ7a6PV9d2E9-Lw",
                        }}
                        height={24}
                        width={24}
                        rounded="$full"
                        alt="Avatar"
                        borderWidth="$1"
                        borderColor="$white"
                    />
                </HStack>
                {/* <Text size="sm" medium>
                    En savoir plus
                </Text> */}
                <Icon as={ChevronDownIcon} size={16} />
            </View>
        </TouchableOpacity>
    );
};

export default AssignedUsers;
