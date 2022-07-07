import { Text, View, Pressable, StyleSheet } from "react-native";
import Food from "./Food";
import { food } from "../constant";
import { useEffect, useState } from "react";

const HomeScreen = ({ navigation }) => {
  const [foodList, setFoodList] = useState([]);

  const onPressFunction = () => {
    navigation.navigate("Profile");
  };

  const getFoodList = async () => {
    const data = await fetch("http://demo3671678.mockable.io/food").then(
      (response) => response.json()
    );
    setFoodList(data);
  };

  useEffect(() => {
    getFoodList();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressFunction} style={styles.button}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </Pressable>
      {foodList.length === 0 && <Text>No food items available</Text>}
      {foodList.map((foodItem) => (
        <Food foodItem={foodItem} key={foodItem.id} />
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
