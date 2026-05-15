import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const Header = () => (
  <View style={styles.header}>
    <View style={styles.left}>
      <Text style={styles.avatar}>😊</Text>
      <Text style={styles.title}>Ness Notion</Text>
      <AntDesign name="down" size={14} color="gray" />
    </View>
    <TouchableOpacity>
      <Entypo name="dots-three-horizontal" size={20} color="black" />
    </TouchableOpacity>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    fontSize: 22,
    marginRight: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 6,
  },
});
