import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "../shared/styles";
import CustomOutlineButtom from "../shared/outlineButton";
import { useState } from "react";
import { FlatList } from "react-native";

export default function SignUp() {
  const [number, setNumber] = useState(5);
  const [number2, setNumber2] = useState(0);
  const [btn, setBtn] = useState("Register");
  const [ischecked, setchecked] = useState(false);

  const [movies, setMovies] = useState([
    {key: '1', name : "Happy and Cheating"},
    {key: '2', name : "Happy and Cheating"},
    {key: '3', name : "Happy and Cheating"},
    {key: '4', name : "Happy and Cheating"},
  ]);

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
      setBtn("Login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container2}>
      <Text style={styles.text}>Get on Board</Text>
      <Text>Number {number}</Text>
      <Text>You Clicked me {number2} times</Text>
      <TextInput placeholder="Full Names" style={styles.input2} />
      <TextInput placeholder="Phone Number" style={styles.input2} />
      <TextInput placeholder="Email Address" style={styles.input2} />
      <TextInput placeholder="Password" style={styles.input2} />

      <CustomOutlineButtom text="Register" onPress={handleClick} />
      <CustomOutlineButtom text={btn} onPress={handleClick2} />

      <FlatList 
         data={movies}
         renderItem={({item}) => (
            <Text>{item.name}</Text>
         )}
        
        />

    </View>
  );
}
