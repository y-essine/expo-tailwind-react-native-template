import TabBar from "@/components/Tabs/TabBar";
import { SettingsIcon } from "@gluestack-ui/themed";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { HomeIcon, PlusCircleIcon } from "lucide-react-native";

const AuthorizedLayout = () => {
  const items = [
    { name: "index", label: "Accueil", icon: HomeIcon },
    { name: "add", label: "Ajouter", icon: PlusCircleIcon },
    { name: "settings", label: "Paramètres", icon: SettingsIcon },
  ];

  return (
    <Tabs
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        lazy: false, // Render all screens on initial render
      }}
    >
      {items.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            title: item.label,
            icon: item.icon,
          }}
        />
      ))}
    </Tabs>
  );
};

export default AuthorizedLayout;
