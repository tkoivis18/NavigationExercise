import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

export const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({