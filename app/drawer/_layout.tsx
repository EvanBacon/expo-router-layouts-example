import { Drawer } from "../../layouts/drawer";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Drawer
      screenOptions={
        {
          // API Reference: https://reactnavigation.org/docs/drawer-navigator#options
        }
      }
    />
  );
}
