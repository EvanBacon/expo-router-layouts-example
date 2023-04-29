import { TopTabs, useScrollProps } from "@bacons/expo-router-top-tabs";
import { View, Text, ViewBase } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <TopTabs>
      <TopTabs.Header>
        <View
          pointerEvents="none"
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            padding: 24,
          }}
        >
          <View
            style={{
              width: 64,
              height: 64,
              borderRadius: 64 / 2,
              backgroundColor: "#D8D8D8",
            }}
          />
          <View style={{ paddingHorizontal: 24 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 48 }}
              accessibilityRole="header"
            >
              Evan Bacon
            </Text>
            <Text
              style={{ fontSize: 16, opacity: 0.5 }}
              accessibilityRole="header"
            >
              Creator of Expo Router
            </Text>
          </View>
        </View>
      </TopTabs.Header>
      <TopTabs.Screen
        name="index"
        options={{
          title: "Posts",
        }}
      />
      <TopTabs.Screen
        name="second"
        options={{
          title: "Likes",
        }}
      />
    </TopTabs>
  );
}
