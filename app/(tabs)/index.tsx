import { Heading, HStack, View, VStack } from "@gluestack-ui/themed";
// @ts-ignore
import HomeHeader from "@/components/Home/HomeHeader";
import StocktakeCard from "@/components/Stocktakes/StocktakeCard";
import Colors from "@/constants/Colors";
import { ScrollView } from "@gluestack-ui/themed";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const AuthorizedPage = () => {
  const data = [
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      title: "WeWork",
      date: "31/07/2024",
      address: "18 Rue du Fossé des Tanneurs 74200 Thonon-les-Bains",
      status: "going",
    },
    {
      id: 2,
      image: "https://picsum.photos/300/400",
      title: "BioTex",
      date: "01/08/2024",
      address: "Zac du Parc des Tulipes 95500 Gonesse",
      status: "todo",
    },
    {
      id: 3,
      image: "https://picsum.photos/250/300",
      title: "Morning",
      date: "24/11/2024",
      address: "12 Rue de la République 69002 Lyon",
      status: "todo",
    },
    {
      id: 4,
      image: "https://picsum.photos/300/450",
      title: "Inventaire 4",
      date: "26/11/2024",
      address: "25 Rue de l’Innovation 75001 Paris",
      status: "todo",
    },
  ];

  const { width: SCREEN_WIDTH, height } = useWindowDimensions();

  return (
    <View bg="$white" flex="1">
      <HomeHeader p="$5" />
      <ScrollView
        flex="1"
        contentContainerStyle={{ paddingBottom: 126 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <HStack items="center" justify="space-between" px="$5">
            <View>
              <Heading size="4xl" bold color="$black">
                Hello,
              </Heading>
              <HStack items="center">
                <Heading size="4xl" bold color="$black">
                  Yassine{" "}
                </Heading>
                <Heading size="4xl" bold color={Colors.primary}>
                  !
                </Heading>
              </HStack>
            </View>
          </HStack>
          <View px="$5" pt="$5">
            <VStack space="md">
              {/* <VStack
                                space="sm"
                                p="$5"
                                bg="$indigo100"
                                rounded="$xl"
                            >
                                <HStack space="md" items="center">
                                    <Icon
                                        as={InfoIcon}
                                        size={24}
                                        color="$indigo500"
                                    />
                                    <Text size="lg" color="$indigo500" medium>
                                        Bienvenue dans l'app
                                    </Text>
                                </HStack>
                                <Text size="sm" color="$indigo500">
                                    Vous pouvez commencer à ajouter des
                                    inventaires
                                </Text>
                            </VStack> */}
              <View>
                <Heading size="xl" color={Colors.text}>
                  Incoming stocktakes
                </Heading>
              </View>
              <View items="center">
                <HStack space="sm" items="center">
                  <TouchableOpacity>
                    <View
                      bg="$backgroundDark800"
                      h={12}
                      w={12}
                      rounded="$full"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View bg="$backgroundDark400" h={8} w={8} rounded="$full" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View bg="$backgroundDark400" h={8} w={8} rounded="$full" />
                  </TouchableOpacity>
                </HStack>
              </View>
              {/* <FlatList
                                gap={14}
                                data={data}
                                renderItem={({ item }) => (
                                    <StocktakeCard item={item} />
                                )}
                                contentContainerStyle={{
                                    gap: 14,
                                    // paddingBottom: 200,
                                }}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            /> */}
              <View style={{ flex: 1 }}>
                <Carousel
                  loop
                  width={SCREEN_WIDTH}
                  height={280}
                  autoPlay={true}
                  data={data}
                  scrollAnimationDuration={1000}
                  autoPlayInterval={5000}
                  renderItem={({ item }) => <StocktakeCard item={item} />}
                />
              </View>
            </VStack>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthorizedPage;
