import React from "react";
import { Control, Controller, FieldError, FieldValues, RegisterOptions } from "react-hook-form";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import { Input, InputProps } from "react-native-elements";

type ControlledInputProps = {
  control: Control<any>;
  defaultValue?: string;
  error?: FieldError;
  label?: string;
  name: string;
  rules?: Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs">;
  style?: StyleProp<TextStyle>;
} & InputProps;

const ControlledInput = ({
  control,
  defaultValue,
  error,
  label,
  name,
  rules,
  style,
  ...inputProps
}: ControlledInputProps) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            {...inputProps}
            onBlur={onBlur}
            onChangeText={onChange}
            style={style}
            value={value}
          />
        )}
        rules={{ ...rules }}
      />
      {error && <Text>{error.message}</Text>}
    </View>
  );
};

export default ControlledInput;

const styles = StyleSheet.create({});
