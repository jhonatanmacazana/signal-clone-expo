import { RouteProp } from "@react-navigation/native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export const Stack = createStackNavigator<RootStackParamList>();

export type ProfileScreenProps = {
  route: RouteProp<RootStackParamList, "Login">;
  navigation: StackNavigationProp<RootStackParamList, "Login">;
};

export type RegisterScreenProps = {
  route: RouteProp<RootStackParamList, "Register">;
  navigation: StackNavigationProp<RootStackParamList, "Register">;
};
