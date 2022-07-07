import { Text, View, Pressable, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const onPressFunction = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressFunction} style={styles.button}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </Pressable>
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
    marginTop: 8,
  },
  buttonText: {
    color: "white",
  },
});
