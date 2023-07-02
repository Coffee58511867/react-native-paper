import React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "../shared/styles";
import CustomOutlineButtom from "../shared/outlineButton";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.registerTitle}>Welcome Back</Text>
      <Text  style={styles.loginSubTitle}>Make it work, make it right, make it fast</Text>
      <View style={{ justifyContent: "space-between" }}>

        <TextInput
          label="Email Address"
          style={styles.input}
          placeholder="Email Address"
          mode="outlined"
          left={<TextInput.Icon icon="mail" />}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
        />


        <CustomOutlineButtom  text="Login" onPress={() => console.log("Pressed")}/>
        <CustomOutlineButtom  text="Register" onPress={() => console.log("Pressed")}/>
      </View>
    </View>
  );
}
