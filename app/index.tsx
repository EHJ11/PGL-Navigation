import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcome-image.png")}
        style={styles.image}
      />

      <Text style={styles.title}>¡Bienvenido!</Text>

      <Text style={styles.subtitle}>
        Explora mi portfolio y conoce más sobre mí
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(tabs)/hobbies")}
      >
        <Text style={styles.buttonText}>Ver Portfolio</Text>
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
    marginBottom: 30,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
    color: "#555",
  },
  button: {
    backgroundColor: "#3498db",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
// url desde la raiz, añadir el settings, en gallerys poner el contaxt
// names.map
// header show false
// se puede tener en el layout una verificacion para saber si tienes el token de usuario
// puede ser con fragmentos, y si no se devuelbe con el drawer string
//
