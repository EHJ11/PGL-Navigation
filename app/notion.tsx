import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import NotionCard from "../components/NotionCard";
import NotionListItem from "../components/NotionListItem";
import { recentPages, favorites, privatePages } from "../data/pagesdata";

export default function NotionScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.avatar}>😊</Text>
            <Text style={styles.headerTitle}>Ness Notion</Text>
            <AntDesign name="down" size={14} color="gray" />
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Jump back in */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jump back in</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {recentPages.map((page) => (
              <NotionCard
                key={page.id}
                title={page.title}
                iconName={page.iconName}
                bgColor={page.bgColor}
              />
            ))}
          </ScrollView>
        </View>

        {/* Favorites */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorites</Text>
          {favorites.map((item) => (
            <NotionListItem
              key={item.id}
              name={item.name}
              iconLib={item.iconLib}
              iconName={item.iconName}
              iconBg={item.iconBg}
            />
          ))}
        </View>

        {/* Private */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Private</Text>
          {privatePages.map((item) => (
            <NotionListItem
              key={item.id}
              name={item.name}
              iconLib={item.iconLib}
              iconName={item.iconName}
              iconBg={item.iconBg}
            />
          ))}
        </View>

        {/* AI Search */}
        <View style={styles.aiContainer}>
          <TouchableOpacity style={styles.aiButton}>
            <Ionicons name="flash" size={20} color="#999" />
            <Text style={styles.aiText}>Ask, chat, find with AI...</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    fontSize: 22,
    marginRight: 6,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 6,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 13,
    color: "#999",
    marginBottom: 12,
    fontWeight: "500",
  },
  horizontalScroll: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  aiContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  aiButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  aiText: {
    fontSize: 14,
    color: "#999",
    marginLeft: 8,
  },
});
