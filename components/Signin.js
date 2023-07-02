import {
  View,
  TextInput,
  Text,
  Alert,
  Image,
} from "react-native";
import { styles } from "../shared/styles";
import CustomButtom from "../shared/outlineButton";
import CustomOutlineButtom from "../shared/Button";

export default function SignIn() {
  const handleClick = () => {
    try {
      Alert.alert("Confirm Delete", "Are you sure you want to delete");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container2}>
      {/* <Image source={require("assets/paypal.webp")} /> */}
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png",
        }}
        style={{ width: 200, height: 80, marginBottom: 20 }}
      />
      <TextInput placeholder="Email Address" style={styles.inputSignin} />
      <TextInput placeholder="Password" style={styles.inputSignin} />

      <CustomButtom text="Login" onPress={handleClick} />
      <Text style={styles.textAccount}>Do not have an account ?</Text>
      <CustomOutlineButtom text="Create Account" onPress={handleClick} />
    </View>
  );
}
