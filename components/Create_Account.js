import { View, TextInput, Alert, Image } from "react-native";
import { styles } from "../styles/styles";
import CustomOutlineButtom from "../shared/outlineButton";

export default function CreateAccount({navigation}) {
  const handleClick = () => {
    try {
      Alert.alert("Confirm Delete", "Are you sure you want to delete");
      navigation.push('Menu');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container2}>
              <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png",
        }}
        style={{ width: 200, height: 80, marginBottom: 20 }}
      />
      <TextInput placeholder="Full Names" style={styles.inputSignin} keyboardType='default' />
      <TextInput placeholder="Phone Number" style={styles.inputSignin} keyboardType='phone-pad' maxLength={8} />
      <TextInput placeholder="Email Address" style={styles.inputSignin} keyboardType='email-address' />
      <TextInput placeholder="Password" style={styles.inputSignin} secureTextEntry/>

      <CustomOutlineButtom text="Register" onPress={handleClick} />
    </View>
  );
}
