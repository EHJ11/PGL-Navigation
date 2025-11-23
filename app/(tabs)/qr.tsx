import { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  Linking,
} from "react-native";
import PortfolioHeader from "../../components/PortfolioHeader";

export default function QRScreen() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode
    ? {
        background: "#1e1e2f",
        text: "#f0f0f5",
        border: "#555",
        button: "#3a6ea5",
      }
    : {
        background: "#fff",
        text: "#000",
        border: "#000",
        button: "#3498db",
      };

  const repoUrl = "https://github.com/adhernea";

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView>
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

        <View style={styles.qrContainer}>
          <Text style={[styles.title, { color: theme.text }]}>
            Mi Repositorio de GitHub
          </Text>

          <View style={[styles.qrPlaceholder, { borderColor: theme.border }]}>
            <Text style={[styles.qrText, { color: theme.text }]}>QR</Text>
          </View>

          <Pressable
            style={[styles.linkButton, { backgroundColor: theme.button }]}
            onPress={() => Linking.openURL(repoUrl)}
          >
            <Text style={styles.linkButtonText}>Abrir GitHub</Text>
          </Pressable>

          <Text style={[styles.urlText, { color: theme.text }]}>{repoUrl}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  qrContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  qrPlaceholder: {
    width: 250,
    height: 250,
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  qrText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  linkButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  linkButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  urlText: {
    fontSize: 14,
    textAlign: "center",
  },
});
