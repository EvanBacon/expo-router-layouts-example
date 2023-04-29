import { Stack } from "../../layouts/stack";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack
        screenOptions={
          {
            // API Reference: https://reactnavigation.org/docs/native-stack-navigator#options
          }
        }
      >
        <Stack.Screen
          name="index"
          options={{
            headerLargeTitle: true,
            title: "Expo Router",
            headerSearchBarOptions: { placeholder: "Search" },
          }}
        />
        <Stack.Screen
          name="second"
          options={{
            headerLargeTitle: true,
            title: "Search",
            headerSearchBarOptions: { placeholder: "Search" },
          }}
        />
      </Stack>
    </>
  );
}
