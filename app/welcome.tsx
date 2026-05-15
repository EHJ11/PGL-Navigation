import { View, Text, StyleSheet, Pressable, Image, Alert } from "react-native";
import { useRouter } from "expo-router";
import { getToken, removeToken } from "../services/storage.service";
import { getWelcomeMessage } from "../services/auth.service";

export default function WelcomeScreen() {
  const router = useRouter();

  async function handleWelcomeMessage() {
    const token = await getToken();
    if (!token) {
      Alert.alert("Error", "No existe token de sesión");
      return;
    }
    const response = await getWelcomeMessage(token);
    if (!response.ok) {
      Alert.alert("Error", response.data.message);
      return;
    }
    Alert.alert("Bienvenida", response.data.message);
  }

  async function handleLogout() {
    await removeToken();
    Alert.alert("Sesión cerrada", "Hasta pronto");
    router.replace("/login");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcome-image.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Bienvenido</Text>

      <Text style={styles.subtitle}>
        Explora mi portfolio y conoce más sobre mí
      </Text>

      <Pressable
        style={styles.buttonPrimary}
        onPress={() => router.push("/(tabs)/hobbies")}
      >
        <Text style={styles.buttonText}>Ver Portfolio</Text>
      </Pressable>

      <Pressable style={styles.buttonBlue} onPress={handleWelcomeMessage}>
        <Text style={styles.buttonText}>Mensaje del servidor</Text>
      </Pressable>

      <Pressable style={styles.buttonLogout} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
    color: "#555",
  },
  buttonPrimary: {
    backgroundColor: "#3498db",
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
    marginBottom: 12,
  },
  buttonBlue: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
    marginBottom: 12,
  },
  buttonLogout: {
    backgroundColor: "#DC3545",
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
