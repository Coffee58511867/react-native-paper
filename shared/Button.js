import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

export default function CustomButtom({ text, onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text onPress={onPress} style={styles.btnText}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
