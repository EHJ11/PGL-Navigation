import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import PortfolioHeader from "../../components/PortfolioHeader";

export default function HobbiesScreen() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode
    ? {
        background: "#1e1e2f",
        card: "#2a2a3c",
        text: "#f0f0f5",
        button: "#3a6ea5",
        buttonText: "#fff",
        border: "#555",
      }
    : {
        background: "#fff",
        card: "#eee",
        text: "#000",
        button: "#3498db",
        buttonText: "#fff",
        border: "#000",
      };

  const hobbies = [
    "Salir a pasear",
    "Senderismo",
    "Ir a la playita",
    "Domingos de misa",
    "La guitarrita",
    "El monte con lluvia",
    "Viajar",
    "Música variadita",
    "Anime",
    "Ducharme",
    "Videojuegos",
    "Ir de cenar romántica",
    "ver series de television",
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.scrollView}>
        <PortfolioHeader darkMode={darkMode} />

        <View style={styles.themeButtonContainer}>
          <Pressable
            style={[styles.themeButton, { borderColor: theme.border }]}
            onPress={() => setDarkMode(!darkMode)}
          >
            <Text style={{ color: theme.text, textAlign: "center" }}>
              {darkMode ? "Tema Claro" : "Tema Oscuro"}
            </Text>
          </Pressable>
        </View>

        <Text style={[styles.title, { color: theme.text }]}>
          Cosas que me gustan mucho:
        </Text>

        {hobbies.map((item) => (
          <Text
            key={item}
            style={[
              styles.hobbyItem,
              {
                backgroundColor: theme.card,
                color: theme.text,
                borderColor: theme.border,
              },
            ]}
          >
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  themeButtonContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  themeButton: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  title: {
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
  },
  hobbyItem: {
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 12,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    marginVertical: 4,
  },
});
