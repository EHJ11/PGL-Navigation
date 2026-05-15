import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Entypo, Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

type ListItemProps = {
  name: string;
  iconLib: string;
  iconName: string;
  iconBg: string;
};

const NotionListItem = ({ name, iconLib, iconName, iconBg }: ListItemProps) => {
  const renderIcon = () => {
    switch (iconLib) {
      case "Entypo":
        return <Entypo name={iconName as any} size={18} color="#000" />;
      case "MaterialIcons":
        return <MaterialIcons name={iconName as any} size={18} color="#000" />;
      case "Ionicons":
        return <Ionicons name={iconName as any} size={18} color="#000" />;
      case "MaterialCommunityIcons":
        return <MaterialCommunityIcons name={iconName as any} size={18} color="#000" />;
      case "AntDesign":
        return <AntDesign name={iconName as any} size={18} color="#000" />;
      default:
        return <Entypo name="dot-single" size={18} color="gray" />;
    }
  };

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.left}>
        <AntDesign name="right" size={12} color="#999" style={styles.arrow} />
        <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
          {renderIcon()}
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.right}>
        <Entypo name="dots-three-horizontal" size={16} color="#ccc" style={styles.dotsIcon} />
        <AntDesign name="plus" size={16} color="#ccc" />
      </View>
    </TouchableOpacity>
  );
};

export default NotionListItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  arrow: {
    marginRight: 8,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotsIcon: {
    marginRight: 10,
  },
});
