import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Image } from "react-native-elements";

import ControlledInput from "#root/components/ui/ControlledInput";
import { auth } from "#root/lib/firebase";
import { ProfileScreenProps } from "#root/lib/stack";

type LoginPayload = {
  email: string;
  password: string;
};

const LoginScreen = ({ navigation }: ProfileScreenProps) => {
  const { control, handleSubmit } = useForm<LoginPayload>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log({ authUser });
      if (authUser) navigation.replace("Home");
    });
    return unsubscribe;
  }, []);

  const handleLogin = (payload: LoginPayload) => {
    console.log({ payload });
  };
  const handlePreLogin = handleSubmit(handleLogin);
  const handleGoToRegister = () => navigation.navigate("Register");
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{ uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png" }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <ControlledInput
          autoCompleteType="email"
          autoFocus
          control={control}
          name="email"
          placeholder="Email"
        />
        <ControlledInput control={control} name="password" placeholder="Password" secureTextEntry />
      </View>

      <Button containerStyle={styles.button} onPress={handlePreLogin} title="Login" />
      <Button
        containerStyle={styles.button}
        onPress={handleGoToRegister}
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
