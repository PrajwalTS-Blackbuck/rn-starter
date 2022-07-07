import { Text, View, Pressable, StyleSheet } from "react-native";

const ProfileScreen = ({navigation}) => {
  const onPressFunction = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Pressable onPress={onPressFunction} style={styles.button}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
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

export default ProfileScreen;

