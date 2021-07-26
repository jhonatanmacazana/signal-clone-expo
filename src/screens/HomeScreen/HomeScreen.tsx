import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>
        Home screen
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
});
