import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../shared/styles";


export default function Card(){
    return(
        <View style={styles.container2}>
            <TouchableOpacity style={styles.card2}>
                <View>
                    <Text>Hello</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}