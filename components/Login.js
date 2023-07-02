import React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "../shared/styles";

export default function Login() {
  return (
    <View style={{ padding: 20, margin: 10, marginTop: 200 }}>
      <Text style={styles.registerTitle}>Get on Board</Text>
      <View style={{ justifyContent: "space-between" }}>

        <TextInput
          label="Email Address"
          style={styles.input}
          placeholder="Email Address"
          mode="outlined"
          left={<TextInput.Icon icon="lock" />}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          mode="outlined"
          right={<TextInput.Icon icon="eye" />}
        />

        <Button
          icon="camera"
          mode="contained"
          buttonColor="blue"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
      </View>
    </View>
  );
}
