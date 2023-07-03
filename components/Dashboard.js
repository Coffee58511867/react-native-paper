import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";

export default function DashboardScreen() {
    const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  return (
    <View style={{ flex: 1, padding: 40 }}>
      <View style={{ marginTop: 30, flexDirection: 'row', alignContent: 'space-around' }}>
        <Text style={{ fontSize: 30, fontWeight: 400 }}>
          Maroba
        </Text>

        <Text style={{ fontSize: 30, fontWeight: 400, marginLeft: 100}}>
          $147.00
        </Text>
      </View>
       <Image source={image}/>
      <View style={{ marginTop: 100 }}>
        
        <Text style={styles.text}>
          Monthly constribution
        </Text>
 
      </View>
    </View>
  );
}
