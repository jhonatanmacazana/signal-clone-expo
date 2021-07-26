import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";

import ControlledInput from "#root/components/ui/ControlledInput";
import { auth } from "#root/lib/firebase";
import { RegisterScreenProps } from "#root/lib/stack";

type RegisterFormPayload = {
  name: string;
  email: string;
  password: string;
  imageUrl?: string;
};

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const { control, handleSubmit } = useForm<RegisterFormPayload>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  const handleRegister = async (payload: RegisterFormPayload) => {
    console.log(payload);
    try {
      const authUser = await auth.createUserWithEmailAndPassword(payload.email, payload.password);
      console.log({ authUser });
      await authUser.user?.updateProfile({
        displayName: payload.name,
        photoURL:
          payload.imageUrl ||
          "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
      });
    } catch (err) {
      alert(err?.message);
    }
  };

  const handlePreRegister = handleSubmit(handleRegister);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <ControlledInput
          autoFocus
          control={control}
          name="name"
          placeholder="Full Name"
          textContentType="name"
        />
        <ControlledInput
          control={control}
          name="email"
          placeholder="Email"
          autoCompleteType="email"
        />
        <ControlledInput control={control} name="password" placeholder="Password" secureTextEntry />
        <ControlledInput
          control={control}
          name="imageUrl"
          placeholder="Profile Picture URL (optional)"
          onSubmitEditing={handlePreRegister}
        />
      </View>

      <Button containerStyle={styles.button} onPress={handlePreRegister} raised title="Register" />

      {/* <View style={{ height: 100 }} /> */}
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
