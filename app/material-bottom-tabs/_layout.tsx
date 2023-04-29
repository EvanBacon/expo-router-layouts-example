import { MaterialBottomTabs } from "../../layouts/material-bottom-tabs";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <MaterialBottomTabs
      screenOptions={
        {
          // API Reference: https://reactnavigation.org/docs/material-bottom-tab-navigator#options
        }
      }
    />
  );
}
