import BottomButton from "@/components/Buttons/BottomButton";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Icon,
  Input,
  InputField,
  SafeAreaView,
  View,
  VStack,
} from "@gluestack-ui/themed";
import { ArrowRight, Layers2Icon } from "lucide-react-native";

const AddPage = () => {
  return (
    <SafeAreaView flex="1" bg="$white">
      <View flex="1" p="$6" position="relative">
        <VStack space="md" mt="$4" mb="$4" pb="$10">
          {/* Layers Icon */}
          <View items="center" justify="center">
            <View
              w="$24"
              h="$24"
              items="center"
              justify="center"
              rounded="$3xl"
              // bg="$emerald100"
              bg="$backgroundDark100"
            >
              <Icon
                as={Layers2Icon}
                size={36}
                // color="$emerald500"
                color="$backgroundDark900"
              />
            </View>
          </View>

          {/* Page title */}
          <Heading size="2xl" mb="$2">
            Ajouter une mission d'inventaire
          </Heading>

          {/* Form */}
          <FormControl isRequired={true}>
            <FormControlLabel>
              <FormControlLabelText medium>
                Nom de l'inventaire
              </FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField placeholder="Nom" />
            </Input>
          </FormControl>
          <FormControl isRequired={true}>
            <FormControlLabel>
              <FormControlLabelText medium>Description</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField placeholder="Desription ou commentaire" />
            </Input>
          </FormControl>
          <FormControl isRequired={true}>
            <FormControlLabel>
              <FormControlLabelText medium>
                Date d'inventaire
              </FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField placeholder="Date et heure" />
            </Input>
          </FormControl>
        </VStack>

        {/* Bottom button */}
        <BottomButton
          title="Suivant"
          onPress={() => {}}
          iconRight={<Icon as={ArrowRight} size="md" color="white" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddPage;
