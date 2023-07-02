import React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "../shared/styles";

export default function Register() {
  return (
    <View style={{ padding: 20, margin: 10 , marginTop: 200}}>
      <Text style={styles.registerTitle}>Get on Board</Text>
      <View style={{ justifyContent: "space-between" }}>
        <TextInput
          style={styles.input}
          label="Email Address"
          placeholder="Email Address"
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          label="Email Address"
          textColor="blue"
          placeholder="Email Address"
          mode="outlined"
        />
        <TextInput
          label="Password"
          secureTextEntry
          style={styles.input}
          mode="outlined"
          right={<TextInput.Icon icon="eye" />}
        />
        <TextInput
          label="Email Address"
          style={styles.input}
          placeholder="Email Address"
          mode="outlined"
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
