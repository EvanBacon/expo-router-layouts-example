import { Tabs } from "../../layouts/tabs";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={
        {
          // API Reference: https://reactnavigation.org/docs/bottom-tab-navigator#options
        }
      }
    />
  );
}
