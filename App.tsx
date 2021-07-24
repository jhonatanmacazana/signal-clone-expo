import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import React from "react";

import { LoginScreen } from "#root/screens/LoginScreen";
import { RegisterScreen } from "#root/screens/RegisterScreen";
import { Stack } from "#root/lib/stack";

const globalScreenOptions: StackNavigationOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          component={LoginScreen}
          name="Login"
          options={{
            title: "Ingresar",
          }}
        />
        <Stack.Screen
          component={RegisterScreen}
          name="Register"
          options={{
            title: "Registrarse",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
