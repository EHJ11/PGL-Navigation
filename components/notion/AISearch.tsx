import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const AISearch = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.searchButton}>
      <Ionicons name="flash" size={20} color="#999" />
      <Text style={styles.searchText}>Ask, chat, find with AI...</Text>
    </TouchableOpacity>
  </View>
);

export default AISearch;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  searchText: {
    fontSize: 14,
    color: "#999",
    marginLeft: 8,
  },
});
