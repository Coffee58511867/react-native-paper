import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "../shared/styles";
import CustomOutlineButtom from "../shared/outlineButton";
import { FlatList } from "react-native";

export default function SignUp() {


  const handleClick = () => {
    try {
      Alert.alert("Confirm Delete", "Are you sure you want to delete");
 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container2}>
    
      <TextInput placeholder="Full Names" style={styles.input2} />
      <TextInput placeholder="Phone Number" style={styles.input2} />
      <TextInput placeholder="Email Address" style={styles.input2} />
      <TextInput placeholder="Password" style={styles.input2} />

      <CustomOutlineButtom text="Register" onPress={handleClick} />
  



    </View>
  );
}
