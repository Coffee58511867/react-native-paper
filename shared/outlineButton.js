import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

export default function CustomOutlineButtom({ text, onPress }) {
  return (
 
      <TouchableOpacity>
        <View style={styles.btn}>
          <Text onPress={onPress} style={styles.btnText}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
 
  );
}
