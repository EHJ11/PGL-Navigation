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
import { registerUser } from "../services/auth.service";
import { isValidEmail, isValidPassword } from "../utils/validators";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (fullName.trim() === "") {
      Alert.alert("Error", "Introduce un nombre");
      return;
    }

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
      const response = await registerUser(fullName, email, password);

      if (!response.ok) {
        const message =
          response.data?.message ||
          response.data?.error ||
          "Error al registrar el usuario";
        Alert.alert("Error", message);
        return;
      }

      Alert.alert("Correcto", "Usuario registrado correctamente");
      router.replace("/login");
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error inesperado. Inténtalo de nuevo.");
      console.error("Register error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        placeholder="Nombre completo"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />

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
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Registrarse</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Text>
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
    backgroundColor: "#28A745",
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
    color: "#28A745",
    textAlign: "center",
    fontWeight: "600",
  },
});
