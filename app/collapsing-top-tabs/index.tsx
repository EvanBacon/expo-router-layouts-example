import { useScrollProps } from "@bacons/expo-router-top-tabs";
import { Link } from "expo-router";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const scroll = useScrollProps();
  return (
    <Animated.ScrollView {...scroll}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Posts</Text>
          <Link href="/collapsing-top-tabs/second" style={styles.subtitle}>
            Next
          </Link>
        </View>
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
