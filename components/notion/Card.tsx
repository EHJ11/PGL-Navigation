import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type CardProps = {
  title: string;
  iconName: string;
  bgColor: string;
};

const Card = ({ title, iconName, bgColor }: CardProps) => (
  <TouchableOpacity style={styles.card}>
    <View style={[styles.cardBackground, { backgroundColor: bgColor }]}>
      <Ionicons name={iconName as any} size={40} color="#666" />
    </View>
    <View style={styles.cardFooter}>
      <Text style={styles.cardTitle} numberOfLines={2}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 200,
    borderRadius: 12,
    marginRight: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardBackground: {
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  cardFooter: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    justifyContent: "flex-start",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
});
