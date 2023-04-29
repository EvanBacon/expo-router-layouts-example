import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { MaterialBottomTabs } from "../../layouts/material-bottom-tabs";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <MaterialBottomTabs
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={
        {
          // API Reference: https://reactnavigation.org/docs/material-bottom-tab-navigator#options
        }
      }
    >
      <MaterialBottomTabs.Screen
        name="index"
        options={{
          tabBarLabel: "Alpha",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                color={props.color}
                size={24}
                name={
                  props.focused ? "alpha-a-circle" : "alpha-a-circle-outline"
                }
              />
            );
          },
        }}
      />
      <MaterialBottomTabs.Screen
        name="second"
        options={{
          tabBarLabel: "Beta",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                color={props.color}
                size={24}
                name={
                  props.focused ? "alpha-b-circle" : "alpha-b-circle-outline"
                }
              />
            );
          },
        }}
      />
    </MaterialBottomTabs>
  );
}
