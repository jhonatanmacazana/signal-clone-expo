import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  const handleRegister = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>

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

export default RegisterScreen;

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
