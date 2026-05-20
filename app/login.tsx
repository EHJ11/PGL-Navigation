import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { loginUser } from "../services/auth.service";
import { saveToken } from "../services/storage.service";
import { isValidEmail, isValidPassword } from "../utils/validators";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!isValidEmail(email)) {
      Alert.alert("Error", "Introduce un email válido");
      return;
    }

    if (!isValidPassword(password)) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
      return;
    }

    const response = await loginUser(email, password);

    if (!response.ok) {
      Alert.alert("Error", response.data.message);
      return;
    }

    await saveToken(response.data.object.token);

    Alert.alert("Correcto", "Login exitoso");

    router.replace("/welcome");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    textAlign: "center",
    color: "#007AFF",
    fontWeight: "600",
  },
});
