import { Icon, View } from "@gluestack-ui/themed";
import { ArrowRight } from "lucide-react-native";
import AnimatedButton from "./AnimatedButton";

// !!!!!! PARENT VIEW MUST HAVE position="relative" PROP !!!!!!
// !!!!!! PARENT VIEW MUST HAVE position="relative" PROP !!!!!!
// !!!!!! PARENT VIEW MUST HAVE position="relative" PROP !!!!!!

const BottomButton = (props: any) => {
    return (
        <View position="absolute" w="$full" bottom="$16" left="$6" pb="$6">
            <AnimatedButton {...props} />
        </View>
    );
};

export default BottomButton;
