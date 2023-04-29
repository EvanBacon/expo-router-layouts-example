import { CustomStack } from "../../layouts/custom-stack";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <CustomStack
      screenOptions={
        {
          // API Reference: https://reactnavigation.org/docs/stack-navigator#options
        }
      }
    />
  );
}
