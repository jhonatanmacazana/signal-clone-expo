import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

import { ProfileScreenProps } from "#root/lib/stack";

const LoginScreen = ({ navigation }: ProfileScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{ uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png" }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          autoFocus
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          autoCompleteType="email"
          value={email}
        />
        <Input
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          value={password}
        />
      </View>

      <Button containerStyle={styles.button} onPress={handleLogin} title="Login" />
      <Button
        containerStyle={styles.button}
        onPress={handleRegister}
        title="Register"
        type="outline"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
