import { View, TextInput, TouchableOpacity, Text, Alert, Image } from "react-native";
import { styles } from "../shared/styles";
import CustomOutlineButtom from "../shared/outlineButton";
import { useState } from "react";
import { FlatList } from "react-native";

export default function SignUp() {
  const handleClick = () => {
    try {
      Alert.alert("Confirm Delete", "Are you sure you want to delete");
      setNumber(number + 4);
      setNumber2(number2 + 1);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick2 = () => {
    try {
      Alert.alert("Confirm Delete", "Are you sure you want to delete");
      setBtn("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container2}>
      <Image source={require('assets/paypal.webp')} />
      <TextInput placeholder="Email Address" style={styles.input2} />
      <TextInput placeholder="Password" style={styles.input2} />

      <CustomOutlineButtom text="Login" onPress={handleClick} />
    </View>
  );
}
