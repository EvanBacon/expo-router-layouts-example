import {
  createBottomSheetNavigator,
  BottomSheetNavigationOptions,
  BottomSheetNavigationEventMap,
  BottomSheetNavigationState,
} from "@th3rdwave/react-navigation-bottom-sheet";
import { withLayoutContext } from "expo-router";
import { ParamListBase } from "@react-navigation/native";

const { Navigator } = createBottomSheetNavigator<ParamListBase>();

export const BottomSheet = withLayoutContext<
  BottomSheetNavigationOptions,
  typeof Navigator,
  BottomSheetNavigationState<ParamListBase>,
  BottomSheetNavigationEventMap
>(Navigator);
