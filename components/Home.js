import { Text, View, Pressable, StyleSheet } from "react-native";
import Food from "./Food";
import { food } from "../constant";

const HomeScreen = ({ navigation }) => {
  const onPressFunction = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressFunction} style={styles.button}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </Pressable>
      {food.map((foodItem) => (
        <Food foodItem={foodItem} />
      ))}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  button: {
    padding: 12,
    backgroundColor: "blue",
    borderRadius: 4,
    marginVertical: 8,
  },
  buttonText: {
    color: "white",
  },
});
