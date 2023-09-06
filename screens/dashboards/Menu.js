import { View, TextInput, Text } from "react-native";
import { styles } from "../../styles/styles";
import CustomButtom from "../../shared/Button";
import RBSheet from "react-native-raw-bottom-sheet";

export default function CustomerMenu() {
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <View style={styles.container}>
      <CustomButtom text="Register" onPress={handleClick} />
      <CustomButtom text="Register" onPress={handleClick} />
      <CustomButtom text="Register" onPress={handleClick} />
      <CustomButtom text="Register" onPress={handleClick} />

      <CustomButtom text="Open Model" onPress={() => this.RBSheet.open()} />

      <RBSheet
        ref={(ref) => {
          this.RBSheet = ref;
        }}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Text style={styles.text}>Reset Password</Text>
               <TextInput
          placeholder="Email Address"
          style={styles.inputSignin}
          keyboardType="email-address"
        />

        <CustomButtom text="Register" onPress={handleClick} />
      </RBSheet>
    </View>
  );
}
