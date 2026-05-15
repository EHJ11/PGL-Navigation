import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const BottomNavigation = () => (
  <View style={styles.bottomNav}>
    <TouchableOpacity>
      <Entypo name="home" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Entypo name="magnifying-glass" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
      <AntDesign name="inbox" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
      <FontAwesome name="pencil-square-o" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

export default BottomNavigation;

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
});
