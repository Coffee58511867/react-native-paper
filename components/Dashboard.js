import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";

export default function DashboardScreen() {
  const [payments, setPayments] = useState([
    { key: "1", name: "Hlalele", amount: 4500, date: "23 May 2023" },
    { key: "2", name: "Hlalele", amount: 4500, date: "23 May 2023" },
    { key: "3", name: "Hlalele", amount: 4500, date: "23 May 2023" },
    { key: "4", name: "Hlalele", amount: 4500, date: "23 May 2023" },
    { key: "5", name: "Hlalele", amount: 4500, date: "23 May 2023" },
    { key: "6", name: "Hlalele", amount: 4500, date: "23 May 2023" },
  ]);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  const paymentsList = [
    { key: "1", name: "Hlalele", amount: "M1200.00" },
    { key: "2", name: "Hlalele", amount: "M1200.00" },
    { key: "3", name: "Hlalele", amount: "M1200.00" },
    { key: "4", name: "Hlalele", amount: "M1200.00" },
  ];

  const image = {
    uri: "https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg",
  };
  return (
    <View style={{ flex: 1, padding: 20 }}>
      
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignContent: "space-around",
          backgroundColor: "blue",
          height: "50%",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 400, color: "white" }}>
          Maroba
        </Text>

        <Text
          style={{
            fontSize: 30,
            fontWeight: 400,
            marginLeft: 30,
            color: "white",
          }}
        >
          $147.00
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          backgroundColor: "#1974D2",
          height: "50%",
          width: "100%",
        }}
      >
        <Text style={styles.dashboardTitle}>Monthly constribution</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <FlatList
            data={payments}
            renderItem={({ item }) => (
              <>
                <Text style={styles.dashboardSubtitle}>{item.name}</Text>
                <Text style={styles.dashboardSubtitle}>{item.amount}</Text>
                <Text style={styles.dashboardSubtitle}>{item.date}</Text>
              </>
            )}
          />
        </View>
      </View>
    </View>
  );
}
