import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen(){
    return(
        <View style={{ flex: 1, padding: 40}}>
           <View  style={{marginTop: 70 , backgroundColor: 'gray'}}>
          <Text style={{fontSize: 30, fontWeight: 400}}>What is your desired monthly constribution</Text>
          <Text style={{fontSize: 25, marginTop: 2}}>How much would you like to commit on a monthly basics towards your goal</Text>
          <Text style={{fontSize: 40, fontWeight: 800, marginTop: 30}}>$147.00</Text>
        </View>

          <View style={{marginTop: 100}}>
          <Text style={{fontSize: 18, fontWeight: 400}}>Monthly constribution</Text>
          <TouchableOpacity style={{marginTop: 40, alignItems: 'center', justifyContent: 'center', borderColor: 'blue'}}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>Continue</Text>
          </TouchableOpacity>
        </View>
        </View>
        
    )
}