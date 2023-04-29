import { BottomSheet } from "../../layouts/bottom-sheet";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <BottomSheet
      screenOptions={
        {
          // API Reference: https://github.com/th3rdwave/react-navigation-bottom-sheet#navigation-options
          // And: https://gorhom.github.io/react-native-bottom-sheet/modal/props/
        }
      }
    />
  );
}
