import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { loginUser } from "../services/auth.service";
import { saveToken } from "../services/storage.service";
import { isValidEmail, isValidPassword } from "../utils/validators";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!isValidEmail(email)) {
      Alert.alert("Error", "Introduce un email válido");
      return;
    }

    if (!isValidPassword(password)) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);

    try {
      const response = await loginUser(email, password);

      if (!response.ok) {
        const message =
          response.data?.message ||
          response.data?.error ||
          "Error al iniciar sesión";
        Alert.alert("Error", message);
        return;
      }

      const token = response.data?.object?.token;

      if (!token) {
        Alert.alert("Error", "No se recibió el token del servidor");
        return;
      }

      await saveToken(token);
      Alert.alert("Correcto", "Login exitoso");
      router.replace("/welcome");
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error inesperado. Inténtalo de nuevo.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
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
  buttonDisabled: {
    opacity: 0.6,
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
