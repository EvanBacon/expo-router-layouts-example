import { Link, Navigator, Slot } from "expo-router";
import { View, Text, StyleSheet, Pressable, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    // You can wrap the navigator with any custom views.
    <View style={{ flex: 1 }}>
      {/* The custom navigator context must wrap the CustomTabBar so it has access to the Slot state. */}
      <Navigator>
        {/* A custom UI for our navigator. */}
        <CustomTabBar />
        {/* The selected contents render here. */}
        <Slot />
      </Navigator>
    </View>
  );
}

function CustomTabBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#191A20",
        paddingVertical: 24,
        borderBottomColor: "#D8D8D8",
        borderBottomWidth: 1,
      }}
    >
      <Link href="/slot" style={[styles.link]}>
        My Website
      </Link>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        {/* Purposefully kept verbose, this can be automated with a for loop. */}
        <TabLink
          // `name` is used to determine if the tab is selected.
          name="index"
          // `href` is used to determine the route to navigate to.
          href="/slot"
        >
          {({ focused }) => (
            <Text style={[styles.link, { opacity: focused ? 1 : 0.5 }]}>
              First
            </Text>
          )}
        </TabLink>

        <TabLink name="second" href="/slot/second">
          {({ focused }) => (
            <Text style={[styles.link, { opacity: focused ? 1 : 0.5 }]}>
              Second
            </Text>
          )}
        </TabLink>
      </View>
    </View>
  );
}

// Utilities...

function useIsTabSelected(name: string): boolean {
  const { state } = Navigator.useContext();
  const current = state.routes.find((route, i) => state.index === i);
  return current.name === name;
}

function TabLink({
  children,
  name,
  href,
  style,
}: {
  children?: any;
  name: string;
  href: string;
  style?: ViewStyle;
}) {
  const focused = useIsTabSelected(name);
  return (
    <Link href={href} asChild style={style}>
      <Pressable>{(props) => children({ ...props, focused })}</Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 24,
    color: "#E7E9E6",
    fontWeight: "bold",
    paddingHorizontal: 24,
  },
});
