import { Stack } from "../../layouts/stack";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack
      screenOptions={
        {
          // API Reference: https://reactnavigation.org/docs/native-stack-navigator#options
        }
      }
    />
  );
}
