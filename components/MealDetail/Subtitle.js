import { View, Text, StyleSheet } from "react-native";

export const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    color: "#e4bba1",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e4bba1",
    borderBottomWidth: 2,
  },
});
