import { useState } from "react";
import { Button, Text, View } from "react-native";
import { CustomStack } from "../../layouts/custom-stack";
import { cardStyleInterpolator } from "../../transitions/custom-transition";

export const unstable_settings = {
  initialRouteName: "index",
};

const animationSettings = [
  ["default", {}],
  [
    "custom slide",
    {
      cardStyleInterpolator,
    },
  ],
  [
    "vertical",
    {
      gestureDirection: "vertical",
      cardStyleInterpolator: ({ current, layouts }) => {
        return {
          cardStyle: {
            transform: [
              {
                translateY: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.height, 0],
                }),
              },
            ],
          },
        };
      },
    },
  ],
] as const;

export default function Layout() {
  const [index, setIndex] = useState(0);
  const selected = animationSettings[index];
  return (
    <View style={{ flex: 1 }}>
      <CustomStack
        screenOptions={{
          ...selected[1],
          // API Reference: https://reactnavigation.org/docs/stack-navigator#options
        }}
      />
      <View
        style={{
          borderTopColor: "#eee",
          borderTopWidth: 1,
          backgroundColor: "white",
        }}
      >
        <Text style={{ padding: 8, opacity: 0.6 }}>
          Press these buttons to change the layout transition{"\n"}↓ then press
          "Next" to see the transition. ↓
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {animationSettings.map((value, i) => (
            <Button
              color={index === i ? "#2196F3" : "#ccc"}
              title={value[0]}
              key={String(i)}
              onPress={() => setIndex(i)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
