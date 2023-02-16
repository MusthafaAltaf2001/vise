import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function HeaderTab(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCF9EE",
    // alignItems: "center",
    marginTop: StatusBar.currentHeight,
    paddingTop: 20,
  },
  // logo: {
  //   alignItems: "center",
  // },
  header: {
    color: "#222",
    fontSize: 44,
    fontFamily: "TrajanProBold",
    letterSpacing: 4,
    textAlign: "center",
    // textDecorationLine: "underline",
  },
});
