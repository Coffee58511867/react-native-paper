import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";

export default function DashboardScreen() {
  const [payments, setPayments] = useState([
    { key: "1", name: "Hlalele", amount: "M4500.00", date: "23 May 2023" },
    { key: "2", name: "Hlalele", amount: "M4500.00", date: "23 May 2023" },
    { key: "3", name: "Hlalele", amount: "M4500.00", date: "23 May 2023" },
    { key: "4", name: "Hlalele", amount: "M4500.00", date: "23 May 2023" },
    { key: "5", name: "Hlalele", amount: "M4500.00", date: "23 May 2023" },
    { key: "6", name: "Hlalele", amount: "M4500.00", date: "23 May 2023" },
  ]);

  const transactions = [
    {
      key: "1",
      from: "Hlalele",
      to: "Maroba",
      amount: "M1200.00",
      date: "20 MAY 2023",
    },
  ];

  const image = {
    uri: "https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg",
  };
  return (
    <ScrollView>
    <View style={{ flex: 1, padding: 15 }}>
      <View
        style={{
          marginTop: 10,
          alignContent: "space-around",
          backgroundColor: "#91BAD6",
        
        }}
      >
        <Text style={styles.dashboardTitle}>Transactions Made</Text>

        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Text style={styles.dashboardSubtitle}>{item.from}</Text>
                <Text style={styles.dashboardSubtitle}>{item.to}</Text>
                <Text style={styles.dashboardSubtitle}>{item.amount}</Text>
                <Text style={styles.dashboardSubtitle}>{item.date}</Text>
              </View>
            </>
          )}
        />
      </View>

      <View
        style={{
          marginTop: 10,
          backgroundColor: "#1974D2",
       
          width: "100%",
        }}
      >
        <Text style={styles.dashboardTitle}>Monthly constribution</Text>
        <FlatList
          data={payments}
          renderItem={({ item }) => (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Text style={styles.dashboardSubtitle}>{item.name}</Text>
                <Text style={styles.dashboardSubtitle}>{item.amount}</Text>
                <Text style={styles.dashboardSubtitle}>{item.date}</Text>
              </View>
            </>
          )}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: "#1974D2",
          width: "100%",
        }}
      >
        <Text style={styles.dashboardTitle}>Registered Users</Text>
        <FlatList
          data={payments}
          renderItem={({ item }) => (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Text style={styles.dashboardSubtitle}>{item.name}</Text>
                <Text style={styles.dashboardSubtitle}>{item.amount}</Text>
                <Text style={styles.dashboardSubtitle}>{item.date}</Text>
              </View>
            </>
          )}
        />
      </View>
    </View>
    </ScrollView>
  );
}
