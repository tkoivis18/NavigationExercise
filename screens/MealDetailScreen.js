import { Text } from "react-native";

export const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  return <Text>This is the Meal Detail screen ({mealId})</Text>;
};
