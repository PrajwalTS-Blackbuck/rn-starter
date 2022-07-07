import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Food = ({ foodItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{foodItem.name}</Text>
      <Image style={styles.image} source={{uri: foodItem.image}} />
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    margin: 8
  },
  name: {
    flex: 1,
  },
  image: {
    height: 50,
    width: 50,
  },
});
